import React, { useMemo } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Flex, ArrowForwardIcon, Skeleton } from '@pancakeswap-libs/uikit'
import max from 'lodash/max'
import { NavLink } from 'react-router-dom'
import useI18n from 'hooks/useI18n'
import BigNumber from 'bignumber.js'
import { getFarmApr } from 'utils/apr'
import { useFarms, usePriceCakeBusd } from 'state/hooks'
import { getAddress } from 'utils/addressHelpers'

const StyledFarmStakingCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0;
    max-width: none;
  }
`
const CardMidContent = styled(Heading).attrs({ size: 'xl' })`
  line-height: 44px;
`
const EarnAPRCard = () => {
  const TranslateString = useI18n()
  const { data: farmsLP } = useFarms()
  const cakePrice = usePriceCakeBusd()

  const highestApr = useMemo(() => {
    const aprs = farmsLP
      // Filter inactive farms, because their theoretical APR is super high. In practice, it's 0.
      .filter((farm) => farm.multiplier !== '0X')
      .map((farm) => {
        if (farm.lpTotalInQuoteToken) {
          const quoteTokenPriceUsd = farm.quoteToken.busdPrice
          const totalLiquidity = new BigNumber(farm.lpTotalInQuoteToken).times(quoteTokenPriceUsd)
          return getFarmApr(farm.ChocoPerBlock, farm.poolWeight, cakePrice, totalLiquidity)
        }
        return null
      })

    const maxApr = max(aprs)
    return maxApr?.toLocaleString('en-US', { maximumFractionDigits: 2 })
  }, [cakePrice, farmsLP])

  return (
    <StyledFarmStakingCard>
      <CardBody>
        <Heading color="contrast" size="lg">
          Earn up to
        </Heading>
        <CardMidContent color="#1993fb">
          {highestApr ? (
            `${highestApr}% ${TranslateString(736, 'APR')}`
          ) : (
            <Skeleton animation="pulse" variant="rect" height="44px" />
          )}
        </CardMidContent>
        <Flex justifyContent="space-between">
          <Heading color="contrast" size="lg">
            in Farms
          </Heading>
          <NavLink exact activeClassName="active" to="/farms" id="farm-apr-cta">
            <ArrowForwardIcon mt={30} color="primary" />
          </NavLink>
        </Flex>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default EarnAPRCard
