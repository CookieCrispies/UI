import { BigNumber, FixedNumber } from '@ethersproject/bignumber'
import { WeiPerEther } from '@ethersproject/constants'
import _toString from 'lodash/toString'
import { BLOCKS_PER_YEAR } from 'config'
import masterChefAbi from 'config/abi/masterchef.json'
import { useCallback, useMemo } from 'react'
// todo: implement this or similar (as it doesn't exist in our version)
import { useCakeVaultContract } from "./useContract";
import useSWRImmutable from 'swr/immutable'
import { getMasterChefAddress } from 'utils/addressHelpers'
import { BIG_ZERO } from 'utils/bigNumber'
// todo: these values can be hardcoded or fetched from the contract
import { BOOST_WEIGHT, DURATION_FACTOR, MAX_LOCK_DURATION } from 'config/constants/pools'
import multicall from "../utils/multicall";

const masterChefAddress = getMasterChefAddress()

// default
const DEFAULT_PERFORMANCE_FEE_DECIMALS = 2

const PRECISION_FACTOR = BigNumber.from('1000000000000')

const getFlexibleApy = (
    totalCakePoolEmissionPerYear: FixedNumber,
    pricePerFullShare: FixedNumber,
    totalShares: FixedNumber,
) =>
    totalCakePoolEmissionPerYear
        .mulUnsafe(FixedNumber.from(WeiPerEther))
        .divUnsafe(pricePerFullShare)
        .divUnsafe(totalShares)
        .mulUnsafe(FixedNumber.from(100))

const _getBoostFactor = (boostWeight: BigNumber, duration: number, durationFactor: BigNumber) => {
    return FixedNumber.from(boostWeight)
        .mulUnsafe(FixedNumber.from(Math.max(duration, 0)))
        .divUnsafe(FixedNumber.from(durationFactor))
        .divUnsafe(FixedNumber.from(PRECISION_FACTOR))
}

const getLockedApy = (flexibleApy: string, boostFactor: FixedNumber) =>
    FixedNumber.from(flexibleApy).mulUnsafe(boostFactor.addUnsafe(FixedNumber.from('1')))

const cakePoolPID = 0

export default function useVaultApy({ duration = MAX_LOCK_DURATION }: { duration?: number } = {}) {
    // contract address 0x08bea2702d89abb8059853d654d0838c5e06fe0b
    const contractAddy = "0x08bea2702d89abb8059853d654d0838c5e06fe0b";

    const { data: {
        totalShares = BIG_ZERO,
        pricePerFullShare = BIG_ZERO,
        fees: {performanceFeeAsDecimal} = {performanceFeeAsDecimal: DEFAULT_PERFORMANCE_FEE_DECIMALS},
    }} = useSWRImmutable('use-vault-apy-locked-kingdom', async () => {
        const callsInfo = [
            {
                address: contractAddy,
                name: 'totalShares'
            },
            {
                address: contractAddy,
                name: "getPricePerFullShare"
            },
            {
                address: contractAddy,
                name: "performanceFee"
            }
        ];

        const [totalSharesCt, pricePerFullShareCt, performanceFee] = await multicall(masterChefAbi, callsInfo)

        const perfFeeDec = BigNumber.from(performanceFee).div(BigNumber.from('100')).toNumber();

        return {
            totalShares: totalSharesCt,
            pricePerFullShare: pricePerFullShareCt,
            fees: {
                performanceFeeAsDecimal: perfFeeDec
            },
        }
    });

    const totalSharesAsEtherBN = useMemo(() => FixedNumber.from(totalShares.toString()), [totalShares])
    const pricePerFullShareAsEtherBN = useMemo(() => FixedNumber.from(pricePerFullShare.toString()), [pricePerFullShare])

    // TODO: Change this to work with cub data
    const { data: totalCakePoolEmissionPerYear } = useSWRImmutable('masterChef-total-cake-pool-emission', async () => {
        const calls = [
            {
                address: masterChefAddress,
                name: 'cakePerBlock',
                params: [false],
            },
            {
                address: masterChefAddress,
                name: 'poolInfo',
                params: [cakePoolPID],
            },
            {
                address: masterChefAddress,
                name: 'totalSpecialAllocPoint',
            },
        ]

        const [[specialFarmsPerBlock], cakePoolInfo, [totalSpecialAllocPoint]] = await multicall(masterChefAbi, calls);

        const cakePoolSharesInSpecialFarms = FixedNumber.from(cakePoolInfo.allocPoint).divUnsafe(
            FixedNumber.from(totalSpecialAllocPoint),
        )
        return FixedNumber.from(specialFarmsPerBlock)
            .mulUnsafe(FixedNumber.from(BLOCKS_PER_YEAR))
            .mulUnsafe(cakePoolSharesInSpecialFarms)
    })

    const flexibleApy = useMemo(
        () =>
            totalCakePoolEmissionPerYear &&
            !pricePerFullShareAsEtherBN.isZero() &&
            !totalSharesAsEtherBN.isZero() &&
            getFlexibleApy(totalCakePoolEmissionPerYear, pricePerFullShareAsEtherBN, totalSharesAsEtherBN).toString(),
        [pricePerFullShareAsEtherBN, totalCakePoolEmissionPerYear, totalSharesAsEtherBN],
    )

    const boostFactor = useMemo(() => _getBoostFactor(BOOST_WEIGHT, duration, DURATION_FACTOR), [duration])

    const lockedApy = useMemo(() => {
        return flexibleApy && getLockedApy(flexibleApy, boostFactor).toString()
    }, [boostFactor, flexibleApy])

    const getBoostFactor = useCallback(
        (adjustDuration: number) => _getBoostFactor(BOOST_WEIGHT, adjustDuration, DURATION_FACTOR),
        [],
    )

    const flexibleApyNoFee = useMemo(() => {
        if (flexibleApy && performanceFeeAsDecimal) {
            const rewardPercentageNoFee = _toString(1 - performanceFeeAsDecimal / 100)

            return FixedNumber.from(flexibleApy).mulUnsafe(FixedNumber.from(rewardPercentageNoFee)).toString()
        }

        return flexibleApy
    }, [flexibleApy, performanceFeeAsDecimal])

    return {
        flexibleApy: flexibleApyNoFee,
        lockedApy,
        getLockedApy: useCallback(
            (adjustDuration: number) => flexibleApy && getLockedApy(flexibleApy, getBoostFactor(adjustDuration)).toString(),
            [flexibleApy, getBoostFactor],
        ),
        boostFactor: useMemo(() => boostFactor.addUnsafe(FixedNumber.from('1')), [boostFactor]),
        getBoostFactor: useCallback(
            (adjustDuration: number) => getBoostFactor(adjustDuration).addUnsafe(FixedNumber.from('1')),
            [getBoostFactor],
        ),
    }
}