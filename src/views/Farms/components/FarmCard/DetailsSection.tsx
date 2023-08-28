import React from 'react'
import useI18n from 'hooks/useI18n'
import styled from 'styled-components'
import { Text, Flex, LinkExternal } from '@pancakeswap-libs/uikit'

export interface ExpandableSectionProps {
  isTokenOnly?: boolean
  lpTokenPriceFormated?: string
  bscScanAddress?: string
  infoAddress?: string
  removed?: boolean
  totalValueFormatted?: string
  lpLabel?: string
  addLiquidityUrl?: string
  farmAPR?: string
}

const Wrapper = styled.div`
  margin-top: 24px;
`

const StyledLinkExternal = styled(LinkExternal)`
  font-weight: 400;
`

const DetailsSection: React.FC<ExpandableSectionProps> = ({
  isTokenOnly,
  bscScanAddress,
  infoAddress,
  removed,
  totalValueFormatted,
  lpTokenPriceFormated,
  lpLabel,
  addLiquidityUrl,
}) => {
  const TranslateString = useI18n()


  return (
    <Wrapper>
       
       <Flex justifyContent="space-between">
        <Text>{TranslateString(354, 'Total Liquidity')}:</Text>
        <Text>{totalValueFormatted}</Text>
      </Flex>
       
      
       <StyledLinkExternal href={bscScanAddress}>{TranslateString(999, 'View Contract')}</StyledLinkExternal>
      
    </Wrapper>
  )
}

export default DetailsSection

