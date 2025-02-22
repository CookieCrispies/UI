import React, {useMemo, useState} from 'react'
import BigNumber from 'bignumber.js'
import styled, { keyframes } from 'styled-components'
import { Flex, Text, Skeleton } from '@pancakeswap-libs/uikit'
import { Farm } from 'state/types'
import { provider as ProviderType } from 'web3-core'
import useI18n from 'hooks/useI18n'
import ExpandableSectionButton from 'components/ExpandableSectionButton'
import { BASE_ADD_LIQUIDITY_URL, PCS_ADD_LIQUIDITY_URL } from 'config'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
// import Balance from 'components/Balance'

import DetailsSection from './DetailsSection'
import CardHeading from './CardHeading'
import CardActionsContainer from './CardActionsContainer'
import ApyButton from './ApyButton'
import {getRoi, tokenEarnedPerThousandDollarsCompounding} from "../../../../utils/compoundApyHelpers";
import tokens from "../../../../config/constants/tokens";
import {QuoteToken} from "../../../../config/constants/types";

export interface FarmWithStakedValue extends Farm {
  apr?: number
  liquidity?: BigNumber
  depositFeeBP?: number
  lpTokenBalancePCS?: number
  lpTotalInQuoteTokenPCS?: number
  poolWeightPCS?: string
  compounding?: number
  kingdomSupply?: string
  quoteTokenPriceUsd?: number
  beltAPR?:string
  lockedKingdomData?: {
      totalShares: string
      totalLockedAmount: string
      pricePerFullShare: string
      totalBalance: string
      fees: {
          performanceFee: string
          withdrawalFee: string
          withdrawalFeePeriod: string
      }
  }
  beltRate?:string
}

const RainbowLight = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`

const StyledCardAccent = styled.div`
  background: linear-gradient(
    45deg,
    rgba(255, 0, 0, 1) 0%,
    rgba(255, 154, 0, 1) 10%,
    rgba(208, 222, 33, 1) 20%,
    rgba(79, 220, 74, 1) 30%,
    rgba(63, 218, 216, 1) 40%,
    rgba(47, 201, 226, 1) 50%,
    rgba(28, 127, 238, 1) 60%,
    rgba(95, 21, 242, 1) 70%,
    rgba(186, 12, 248, 1) 80%,
    rgba(251, 7, 217, 1) 90%,
    rgba(255, 0, 0, 1) 100%
  );
  background-size: 300% 300%;
  animation: ${RainbowLight} 2s linear infinite;
  border-radius: 32px;
  filter: blur(6px);
  position: absolute;
  top: -2px;
  right: -2px;
  bottom: -2px;
  left: -2px;
  z-index: -1;
`

const FCard = styled.div`
  align-self: baseline;
  background: ${(props) => props.theme.card.background};
  border-radius: 32px;
  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 24px;
  position: relative;
  text-align: center;
`

const Divider = styled.div`
  background-color: ${({ theme }) => theme.colors.borderColor};
  height: 1px;
  margin: 28px auto;
  width: 100%;
`

const ExpandingWrapper = styled.div<{ expanded: boolean }>`
  height: ${(props) => (props.expanded ? '100%' : '0px')};
  overflow: hidden;
`

interface FarmCardProps {
  farm: FarmWithStakedValue
  removed: boolean
  cakePrice?: BigNumber
  plsPrice?: BigNumber
  provider?: ProviderType
  account?: string
}

const FarmCard: React.FC<FarmCardProps> = ({ farm, removed, cakePrice, plsPrice, account }) => {
  const TranslateString = useI18n()

  const [showExpandableSection, setShowExpandableSection] = useState(false)

  // We assume the token name is coin pair + lp e.g. CAKE-BNB LP, LINK-BNB LP,
  // NAR-CAKE LP. The images should be cake-bnb.svg, link-bnb.svg, nar-cake.svg
  const farmImage = farm.lpSymbol.split(' ')[0].toLocaleLowerCase()

    const totalValue: BigNumber = useMemo(() => {
        if (!farm.lpTotalInQuoteToken) {
            return null
        }
        if (farm.quoteToken.symbol === QuoteToken.PLS) {
            return plsPrice.times(farm.lpTotalInQuoteToken)
        }
        if (farm.quoteToken.symbol === QuoteToken.CAKE) {
            return cakePrice.times(farm.lpTotalInQuoteToken)
        }
        return farm.lpTotalInQuoteToken
    }, [cakePrice, farm.lpTotalInQuoteToken, farm.quoteToken.symbol, plsPrice])

  const totalValueFormatted = farm.liquidity && farm.liquidity.toNumber()
    ? `$${farm.liquidity.toNumber().toLocaleString(undefined, { maximumFractionDigits: 0 })}`
    : '-'

    const lpPrice = useMemo(() => {
        return Number(totalValue) / Number(farm.lpTokenBalance)
    }, [farm, totalValue])

    const lpTokenPriceFormated = lpPrice
        ? `${Number(lpPrice).toLocaleString(undefined, { maximumFractionDigits: 2 })}`
        : '-'

  const lpLabel = farm.lpSymbol && farm.lpSymbol.toUpperCase().replace('PANCAKE', '')
  const earnLabel = farm.dual ? farm.dual.earnLabel : 'Choco'

  const farmAPR = farm.apr && farm.apr.toLocaleString('en-US', { maximumFractionDigits: 2 })

  const liquidityUrlPathParts = getLiquidityUrlPathParts({
    quoteTokenAddress: farm.quoteToken.address,
    tokenAddress: farm.token.address,
  })
  const exchangeUrl = farm.pcsVersion && farm.pcsVersion > 1 ? PCS_ADD_LIQUIDITY_URL : BASE_ADD_LIQUIDITY_URL
  const addLiquidityUrl = `${exchangeUrl}/${liquidityUrlPathParts}`
  const lpAddress = farm.lpAddresses[process.env.REACT_APP_CHAIN_ID]

    const tokenEarnedPerThousand365D = tokenEarnedPerThousandDollarsCompounding({
        numberOfDays: 365,
        farmApr: farm.apr,
        tokenPrice: farm.token.busdPrice,
        roundingDecimals: 2,
        compoundFrequency: 1,
    })

    const APR = getRoi({
        amountEarned: tokenEarnedPerThousand365D,
        amountInvested: 1000 / parseFloat(farm.token.busdPrice),
    }).toFixed(2);


  return (
    <FCard>
      {farm.token.symbol === 'Choco' && <StyledCardAccent />}
      <CardHeading
        lpLabel={lpLabel}
        multiplier={farm.multiplier}
        isCommunityFarm={farm.isCommunity}
        farmImage={farmImage}
        tokenSymbol={farm.token.symbol}
        depositFee={farm.depositFeeBP}
      />
      {!removed && (
        <Flex justifyContent="space-between" alignItems="center">
          <Text>{TranslateString(999, 'APR')}:</Text>
          <Text bold style={{ display: 'flex', alignItems: 'center' }}>
            {farm.apr ? (
              <>
                <ApyButton lpLabel={lpLabel} addLiquidityUrl={addLiquidityUrl} cakePrice={cakePrice} apr={farm.apr} />
                {farmAPR}%
              </>
            ) : (
              <Skeleton height={24} width={80} />
            )}
          </Text>
        </Flex>
        )
      }
      <Flex justifyContent="space-between">
        <Text>{TranslateString(318, 'Earn')}:</Text>
        <Text bold>{earnLabel}</Text>
      </Flex>
      <Flex justifyContent='space-between'>
        <Text style={{ fontSize: '16px' }}>{TranslateString(10001, 'Deposit Fee')}:</Text>
        {
          farm.depositFeeBP ? (
            <Text bold style={{ fontSize: '16px' }}>{(farm.depositFeeBP / 100)}%</Text>
          ) : (
            '0%'
          )
        }
      </Flex>
      <CardActionsContainer farm={farm} account={account} addLiquidityUrl={addLiquidityUrl} />
      <Divider />
      <ExpandableSectionButton
        onClick={() => setShowExpandableSection(!showExpandableSection)}
        expanded={showExpandableSection}
      />
      <ExpandingWrapper expanded={showExpandableSection}>
        <DetailsSection
          removed={removed}
          isTokenOnly={farm.isTokenOnly}
          // bscScanAddress={`https://https://www.shibariumscan.io//address/${farm.lpAddresses[process.env.REACT_APP_CHAIN_ID]}`}
          bscScanAddress={
            farm.isTokenOnly ?
              `https://www.shibariumscan.io/token/${farm.token.address[process.env.REACT_APP_CHAIN_ID]}`
              :
              `https://www.shibariumscan.io/token/${farm.lpAddresses[process.env.REACT_APP_CHAIN_ID]}`
          }
          infoAddress={`https://baseswap.fi/info/pools/${lpAddress}`}
          totalValueFormatted={totalValueFormatted}
          lpTokenPriceFormated={lpTokenPriceFormated}
          lpLabel={lpLabel}
          addLiquidityUrl={addLiquidityUrl}
        />
      </ExpandingWrapper>
    </FCard>
  )
}

export default FarmCard
