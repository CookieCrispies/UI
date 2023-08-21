import React from 'react'
import {Card, CardBody, Heading, Skeleton, Text} from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import BigNumber from 'bignumber.js'
import CardValue from './CardValue'
import {useFarms, usePriceCakeBusd, useTotalValue} from '../../../state/hooks'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  
`



const CakeStats = () => {
  const TranslateString = useI18n()
  const totalValue = useTotalValue();
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const CookiePrice = usePriceCakeBusd();
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
  const cakeSupply = getBalanceNumber(circSupply);
  const marketCap = CookiePrice.times(circSupply);
  const {data:farms} = useFarms();
  let ChocoPerBlock = 0
  if (farms && farms[0] && farms[0]?.ChocoPerBlock) {
    ChocoPerBlock = new BigNumber(farms[0]?.ChocoPerBlock).toNumber()
  }

  return (
    <StyledCakeStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(534, 'Choco Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">Market Cap</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(marketCap)} decimals={0} prefix="$" />
        </Row>
        <Row>
          <Text fontSize="14px">Total Minted</Text>
          {totalSupply && <CardValue fontSize="14px" value={getBalanceNumber(totalSupply)} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="14px">Total Burned</Text>
          <CardValue fontSize="14px" value={0} decimals={0} />
        </Row>
        <Row>
          <Text fontSize="14px">New Choco/block</Text>
          <Text bold fontSize="14px">
            {ChocoPerBlock}
          </Text>
        </Row>
       
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
