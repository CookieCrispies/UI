import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useAppDispatch } from 'state'
import {
  fetchFarmUserDataAsync,
  updateUserStakedBalance,
  updateUserBalance,
  updateUserPendingReward,
} from 'state/actions'
import {unstake, sousUnstake, sousEmergencyUnstake, unstakeAllLocked, unstakeLocked} from 'utils/callHelpers'
import BigNumber from "bignumber.js";
import {useMasterchef, useSousChef, useKingdom, useLockedKingdom} from './useContract'

const useUnstake = (pid: number, isKingdom?: boolean) => {
  const dispatch = useAppDispatch()
  const { account } = useWeb3React()
  const masterChefContract = useMasterchef()
  const kingdomContract = useKingdom()

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await unstake(isKingdom ? kingdomContract : masterChefContract, pid, amount, account)
      dispatch(fetchFarmUserDataAsync(account))
      console.info(txHash)
    },
    [account, dispatch, masterChefContract, pid, kingdomContract, isKingdom],
  )

  return { onUnstake: handleUnstake }
}

export const useLockedUnstake = (maxShares: string) => {
    const dispatch = useAppDispatch()
    const { account } = useWeb3React()
    const lockedKingdomContract = useLockedKingdom();

    const handleUnstake = useCallback(
        async (amount: string) => {
            if (new BigNumber(amount).gte(new BigNumber(maxShares))) {
                const txHash = await unstakeAllLocked(lockedKingdomContract, account)
                dispatch(fetchFarmUserDataAsync(account))
                console.info(txHash)
            } else {
                const txHash = await unstakeLocked(lockedKingdomContract, amount, account)
                dispatch(fetchFarmUserDataAsync(account))
                console.info(txHash)
            }
        },
        [account, dispatch, lockedKingdomContract, maxShares],
    )

    return { onUnstake: handleUnstake }
}

const SYRUPIDS = [5, 6, 1, 22, 23, 78]

export const useSousUnstake = (sousId) => {
  const dispatch = useAppDispatch()
  const { account } = useWeb3React()
  const masterChefContract = useMasterchef()
  const sousChefContract = useSousChef(sousId)
  const isOldSyrup = SYRUPIDS.includes(sousId)

  const handleUnstake = useCallback(
    async (amount: string, decimals: number) => {
      if (sousId === 3) {
        const txHash = await unstake(masterChefContract, 3, amount, account)
        console.info(txHash)
      } else if (isOldSyrup) {
        const txHash = await sousEmergencyUnstake(sousChefContract, amount, account)
        console.info(txHash)
      } else {
        const txHash = await sousUnstake(sousChefContract, amount, decimals, account)
        console.info(txHash)
      }
      dispatch(updateUserStakedBalance(sousId, account))
      dispatch(updateUserBalance(sousId, account))
      dispatch(updateUserPendingReward(sousId, account))
    },
    [account, dispatch, isOldSyrup, masterChefContract, sousChefContract, sousId],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
