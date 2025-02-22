import React, { useEffect, useCallback, useState, useMemo, useRef } from 'react'
import { Route, useRouteMatch, useLocation } from 'react-router-dom'
import { useAppDispatch } from 'state'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { Heading, Text, Flex, Button } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import useRefresh from 'hooks/useRefresh'
import { fetchFarmUserDataAsync } from 'state/actions'
import Page from 'components/layout/Page'
import PageHeader from 'components/PageHeader'
import { useTotalCookieStaked } from 'state/hooks'
import { DEFAULT_TOKEN_DECIMAL } from 'config'
import { BIG_ZERO } from 'utils/bigNumber'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { getBalanceNumber } from 'utils/formatBalance'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from 'views/Home/components/CardValue'
import StakedBalance from './StakedBalance'

const Title = styled.div`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.primary};
`

const FlexMobile = styled(Flex)`
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: felx-start;
  }
`
const Card = styled.div`
  align-self: baseline;
  background: ${(props) => props.theme.card.background};
  border-radius: 8px;
  box-shadow: 0 3px 4px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05);
  display: flex;
  /*flex-direction: column;
  justify-content: space-around;*/
  padding: 1rem 1rem;
  position: relative;
  margin: 1.5rem 1rem;
`

const DescriptionCard = styled(Card)`
  background-image: url(images/Cookie/polyCookie/polyCookie_lion.png);
  background-position: top left;
  background-position-y: 0.5rem;
  background-position-x: 0.5rem;
  background-repeat: no-repeat;
  background-size: auto 200px;
  min-height: 200px;
  flex-direction: column;
  justify-content: space-around;
  // opacity: 0.5;
`

const TextCard = styled(Card)`
  margin-left: 2rem;
  margin-right: 2rem;
  opacity: 0.9;
  border: 1px solid #ddd;
`

const Header = styled(Text)`
  margin-left: 2rem;
  margin-right: 2rem;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Airdrops: React.FC = () => {
  // const { path } = useRouteMatch()
  // const { pathname } = useLocation()
  const { account } = useWeb3React()

  const dispatch = useAppDispatch()
  const { fastRefresh } = useRefresh()
  useEffect(() => {
    if (account) {
      dispatch(fetchFarmUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const { Cookie = BIG_ZERO, value = BIG_ZERO } = useTotalCookieStaked()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
  const CookieSupply = getBalanceNumber(circSupply) || 0;
  const pendingAirdrop = CookieSupply ? new BigNumber(1000000).div(CookieSupply).times(Cookie) : BIG_ZERO
  const pCookieValue = pendingAirdrop.times(1)

  return (
    <>
      <PageHeader>
        <div className='k-header'>
          <Heading as="h1" size="xxl" color="secondary" mb="10px">
            POLYCookie Airdrop
          </Heading>
        </div>
      </PageHeader>
      <Page>
        <FlexMobile>
          <Flex flexDirection="column">
            <Title>Total Staked Cookie Balance</Title>
            <StakedBalance Cookie={Cookie} value={value} />
          </Flex>
          <Flex flexDirection="column">
            <Title>Pending Airdrop (60 days)</Title>
            <StakedBalance Cookie={pendingAirdrop} value={pCookieValue} />
            {/* <Text bold fontSize="40px" style={{ lineHeight: '1' }} color="text">{pendingAirdrop.toLocaleString('en-US', { maximumFractionDigits: 0 })}</Text> */}
          </Flex>
        </FlexMobile>
        <DescriptionCard>
          <Header>What is &nbsp;<img alt="PolyCookie" src="images/Cookie/polyCookie/header_logo_wide.svg" style={{width: "auto", height: "50px"}} />?</Header>
          <TextCard>
            <Text>PolyCookie (POLYCookie) is the native token for the PolyCookie yield optimizing platform. Users can earn POLYCookie by participating in any of the Kingdom vaults or by staking it into xPOLYCookie to earn the 50% fee penalty generated by other farmers who harvest their yield before the X block locking period.</Text>
          </TextCard>
        </DescriptionCard>
        <DescriptionCard>
          <Header>How does the airdrop work?</Header>
          <TextCard>
            <Text>To particiapte in the airdrop, all you need to do is hodl Cookie in either the Cookie Kingdom, Cookie-BUSD Farm or Cookie-BNB farm. A daily snapshot of Cookie balances in these 3 locations is taken every day for 60 consecutive days. Each day, POLYCookie tokens are then distributed based on the current balances in each snapshot. This means that if your balance changes (add stake or reduce stake), then your airdrop amount will change from day-to-day. Either increasing if you stake more or decreasing if you stake less.</Text>
          </TextCard>
        </DescriptionCard>
        <Wrapper>
          <Button size="sm">
            <a href="https://docs.polyCookie.com/airdrop">Learn More</a>
          </Button>
          <Button size="sm">
            <a href="https://polyCookie.com/airdrop">Claim</a>
          </Button>
        </Wrapper>
      </Page>
    </>
  )
}

export default Airdrops
