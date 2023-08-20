import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button, Flex } from '@pancakeswap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import useI18n from 'hooks/useI18n'
import { useAllHarvest } from 'hooks/useHarvest'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import useBnbDividends from 'hooks/useBnbDividends'
import { useClaim} from 'hooks/useClaim'
import UnlockButton from 'components/UnlockButton'
import CakeHarvestBalance from './CakeHarvestBalance'
import CakeWalletBalance from './CakeWalletBalance'
import BNBHarvestBalance from './BNBHarvestBalance'

const StyledFarmStakingCard = styled(Card)`
  background-repeat: no-repeat;
  background-position: top right;
  min-height: 376px;
`

const Block = styled.div`
  margin-bottom: 16px;
`

const CardImage = styled.img`
  margin-bottom: 16px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
`

const Actions = styled.div`
  margin-top: 24px;
`

const TokenImageWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`

const FarmedStakingCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const [pendingTxDivs, setPendingTxDivs] = useState(false)
  const { account } = useWeb3React()
  const TranslateString = useI18n()
  const farmsWithBalance = useFarmsWithBalance()
  const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.toNumber() > 10000)

  const bnbDividends = useBnbDividends()
  const { onClaim } = useClaim(bnbDividends || {})
  const bnbRewards = bnbDividends && bnbDividends.amount ? bnbDividends.amount : 0

  const { onReward } = useAllHarvest(balancesWithValue.map((farmWithBalance) => {
    const { pid, isKingdom } = farmWithBalance
    return { pid, isKingdom }
  }))

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    try {
      await onReward()
    } catch (error) {
      // TODO: find a way to handle when the user rejects transaction or it fails
    } finally {
      setPendingTx(false)
    }
  }, [onReward])

  const addWatchCookieToken = useCallback(async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const provider = window.ethereum
    if (provider) {
      try {
        // wasAdded is a boolean. Like any RPC method, an error may be thrown.
        const wasAdded = await provider.request({
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20',
            options: {
              address: '0x02Dff78fDeDaF86D9dfbe9B3132aA3Ea72Ed1680',
              symbol: 'Choco',
              decimals: '18',
              image:
                  'https://raw.githubusercontent.com/Cookie-Factory/images/master/logo.png',
            },
          },
        })

        if (wasAdded) {
          console.log('Token was added')
        }
      } catch (error) {
        // TODO: find a way to handle when the user rejects transaction or it fails
      }
    }
  }, [])

  return (
    <StyledFarmStakingCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          <Row> {TranslateString(542, 'Farms & Staking')} </Row>
        </Heading>
        <TokenImageWrapper>
        <CardImage src="/images/Cookie/logo-card-image.png" alt="Choco logo" width={64} height={64} />

        </TokenImageWrapper>
            <Block>
              <Label>{TranslateString(544, 'Choco to Harvest')}:</Label>
              <CakeHarvestBalance />
            </Block>
            <Block>
              <Label>{TranslateString(546, 'Choco in Wallet')}:</Label>
              <CakeWalletBalance />
            </Block>
            <Actions>
              {account ? (
                <Button
                  id="harvest-all"
                  disabled={balancesWithValue.length <= 0 || pendingTx}
                  onClick={harvestAllFarms}
                  width="100%"
                >
                  {pendingTx
                    ? TranslateString(548, 'Collecting Choco')
                    : TranslateString(532, `Harvest all (${balancesWithValue.length})`, {
                        count: balancesWithValue.length,
                      })}
                </Button>
              ) : (
                <UnlockButton width="100%" />
              )}
            </Actions>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default FarmedStakingCard
