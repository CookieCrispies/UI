import React, { useState, useCallback, useMemo } from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { Button, useModal, IconButton, AddIcon, MinusIcon, Skeleton } from '@pancakeswap-libs/uikit'
import { useLocation } from 'react-router-dom'
import UnlockButton from 'components/UnlockButton'
import { useWeb3React } from '@web3-react/core'
import { useFarmUser } from 'state/hooks'
import { FarmWithStakedValue } from 'views/Farms/components/FarmCard/FarmCard'
import useI18n from 'hooks/useI18n'
import { useApprove } from 'hooks/useApprove'
import { getBep20Contract } from 'utils/contractHelpers'
import { BASE_ADD_LIQUIDITY_URL } from 'config'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import { getBalanceNumber, getFullDisplayBalance } from 'utils/formatBalance'
import useStake from 'hooks/useStake'
import useUnstake from 'hooks/useUnstake'
import useWeb3 from 'hooks/useWeb3'
import { getAddress } from 'utils/addressHelpers'

import DepositModal from '../../DepositModal'
import WithdrawModal from '../../WithdrawModal'
import { ActionContainer, ActionTitles, ActionContent, Earned, Title, Subtle } from './styles'

const IconButtonWrapper = styled.div`
  display: flex;
`

interface StackedActionProps extends FarmWithStakedValue {
  userDataReady: boolean
}

const Staked: React.FunctionComponent<StackedActionProps> = ({
  pid,
  lpSymbol,
  lpAddresses,
  quoteToken,
  token,
  userDataReady,
  isTokenOnly,
}) => {
  const TranslateString = useI18n()
  const { account } = useWeb3React()
  const [requestedApproval, setRequestedApproval] = useState(false)
  const { allowance, tokenBalance, stakedBalance } = useFarmUser(pid)
  const { onStake } = useStake(pid)
  const { onUnstake } = useUnstake(pid)
  const web3 = useWeb3()
  const location = useLocation()
  const tokenAddress = getAddress(token.address)

  const isApproved = account && allowance && (allowance.isGreaterThan(0) || stakedBalance.isGreaterThan(0))


  const lpAddress = lpAddresses[process.env.REACT_APP_CHAIN_ID]
  const liquidityUrlPathParts = getLiquidityUrlPathParts({
    quoteTokenAddress: quoteToken.address,
    tokenAddress: token.address,
  })
  const addLiquidityUrl = `${BASE_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts}`

  const decimals = isTokenOnly ? token.decimals : 18

  const tokenBalanceString = new BigNumber(tokenBalance).div(new BigNumber(10).pow(decimals));

  const displayBalance = useCallback(() => {
    const stakedBalanceNumber = new BigNumber(stakedBalance).div(new BigNumber(10).pow(decimals)).toNumber()
    // if (stakedBalanceNumber > 0 && stakedBalanceNumber < 0.0001) {
    //   return getFullDisplayBalance(new BigNumber(stakedBalanceNumber)).toLocaleString()
    // }
    return Number(stakedBalanceNumber).toLocaleString(undefined, { maximumFractionDigits: 5 })
  }, [stakedBalance, decimals])

  const stakedBalanceString = new BigNumber(stakedBalance).div(new BigNumber(10).pow(decimals));

  const [onPresentDeposit] = useModal(
    <DepositModal max={tokenBalanceString} onConfirm={(amount) => onStake(amount)} tokenName={lpSymbol} addLiquidityUrl={addLiquidityUrl} />,
  )
  const [onPresentWithdraw] = useModal(<WithdrawModal max={stakedBalanceString} onConfirm={onUnstake} tokenName={lpSymbol} />)

  // const lpContract = getBep20Contract(lpAddress, web3)
  const lpContract = useMemo(() => {
    if(isTokenOnly){
      return getBep20Contract(tokenAddress, web3)
    }
    return getBep20Contract(lpAddress, web3)
  }, [lpAddress, isTokenOnly, web3, tokenAddress])

  const { onApprove } = useApprove(lpContract)

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      await onApprove()
      setRequestedApproval(false)
    } catch (e) {
      console.error(e)
    }
  }, [onApprove])

  if (!account) {
    return (
      <ActionContainer>
        <ActionTitles>
          <Subtle>{TranslateString(999, 'START FARMING')}</Subtle>
        </ActionTitles>
        <ActionContent>
          <UnlockButton width="100%" />
        </ActionContent>
      </ActionContainer>
    )
  }

  if (isApproved) {
    if (stakedBalance.gt(0)) {
      return (
        <ActionContainer>
          <ActionTitles>
            <Title>{lpSymbol} </Title>
            <Subtle>{TranslateString(999, 'STAKED')}</Subtle>
          </ActionTitles>
          <ActionContent>
            <div>
              <Earned>{displayBalance()}</Earned>
            </div>
            <IconButtonWrapper>
              <IconButton variant="secondary" onClick={onPresentWithdraw} mr="6px">
                <MinusIcon color="primary" width="14px" />
              </IconButton>
              <IconButton variant="secondary" onClick={onPresentDeposit}>
                <AddIcon color="primary" width="14px" />
              </IconButton>
            </IconButtonWrapper>
          </ActionContent>
        </ActionContainer>
      )
    }

    return (
      <ActionContainer>
        <ActionTitles>
          <Subtle>{TranslateString(999, 'STAKE')} </Subtle>
          <Title>{lpSymbol}</Title>
        </ActionTitles>
        <ActionContent>
          <Button
            width="100%"
            onClick={onPresentDeposit}
            variant="secondary"
            disabled={location.pathname.includes('archived')}
          >
            {TranslateString(999, isTokenOnly ? 'Stake Token' : 'Stake LP')}
          </Button>
        </ActionContent>
      </ActionContainer>
    )
  }

  if (!userDataReady) {
    return (
      <ActionContainer>
        <ActionTitles>
          <Subtle>{TranslateString(999, 'START FARMING')}</Subtle>
        </ActionTitles>
        <ActionContent>
          <Skeleton width={180} marginBottom={28} marginTop={14} />
        </ActionContent>
      </ActionContainer>
    )
  }

  return (
    <ActionContainer>
      <ActionTitles>
        <Subtle>{TranslateString(999, 'ENABLE FARM')}</Subtle>
      </ActionTitles>
      <ActionContent>
        <Button
          width="100%"
          disabled={requestedApproval || location.pathname.includes('archived')}
          onClick={handleApprove}
          variant="secondary"
        >
          {TranslateString(999, 'Enable')}
        </Button>
      </ActionContent>
    </ActionContainer>
  )
}

export default Staked
