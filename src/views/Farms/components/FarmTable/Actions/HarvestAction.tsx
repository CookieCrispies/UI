import React, { useState, useRef, useEffect } from 'react'
import { Button, Skeleton } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js'
import { FarmWithStakedValue } from 'views/Farms/components/FarmCard/FarmCard'
import { getBalanceNumber } from 'utils/formatBalance'
import { useHarvest } from 'hooks/useHarvest'
import useI18n from 'hooks/useI18n'
import { usePriceCakeBusd } from 'state/hooks'
import { useCountUp } from 'react-countup'

import {useWeb3React} from "@web3-react/core";
import { ActionContainer, ActionTitles, Title, Subtle, ActionContent, Earned, Staked } from './styles'
import useStake from "../../../../../hooks/useStake";

interface HarvestActionProps extends FarmWithStakedValue {
  userDataReady: boolean
}

const HarvestAction: React.FunctionComponent<HarvestActionProps> = ({ pid, userData, userDataReady }) => {
  const { account } = useWeb3React()
  const earningsBigNumber = new BigNumber(userData.earnings)
  const cakePrice = usePriceCakeBusd()
  const { onStake } = useStake(3)
  let earnings = 0
  let earningsBusd = 0
  let displayBalance = userDataReady ? earnings.toLocaleString() : <Skeleton width={60} />

  // If user didn't connect wallet default abalance will be 0
  if (!earningsBigNumber.isZero()) {
    earnings = getBalanceNumber(earningsBigNumber)
    earningsBusd = new BigNumber(earnings).multipliedBy(cakePrice).toNumber()
    displayBalance = earnings.toLocaleString()
  }

  const [pendingTx, setPendingTx] = useState(false)
  const { onReward } = useHarvest(pid)
  const TranslateString = useI18n()

  const rawEarningsBalance = account ? getBalanceNumber(earningsBigNumber) : 0

  const { countUp, update } = useCountUp({
    start: 0,
    end: earningsBusd,
    duration: 1,
    separator: ',',
    decimals: 3,
  })
  const updateValue = useRef(update)

  useEffect(() => {
    updateValue.current(earningsBusd)
  }, [earningsBusd, updateValue])

  return (
    <ActionContainer>
      <ActionTitles>
        <Title>Choco </Title>
        <Subtle>{TranslateString(1072, 'EARNED')}</Subtle>
      </ActionTitles>
      <ActionContent>
        <div>
          <Earned>{displayBalance}</Earned>
          {countUp > 0 && <Staked>~{countUp}USD</Staked>}
        </div>
        <Button
          disabled={!earnings || pendingTx || !userDataReady}
          onClick={async () => {
            setPendingTx(true)
            await onReward()
            setPendingTx(false)
          }}
          ml="4px"
        >
          {TranslateString(562, 'Harvest')}
        </Button>
         {pid !== 3 ?
            <Button
                disabled={rawEarningsBalance === 0 || pendingTx}
                variant='secondary'
                onClick={async () => {
                  setPendingTx(true)
                  await Promise.all([
                    onStake(rawEarningsBalance.toString()),
                    onReward(),

                  ]);
                  setPendingTx(false)
                }
                }
            >
              {TranslateString(999, 'Compound')}
            </Button>
            : null} 
      </ActionContent>
    </ActionContainer>
  )
}

export default HarvestAction
