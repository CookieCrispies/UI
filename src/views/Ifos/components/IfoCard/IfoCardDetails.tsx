import React from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { Text, LinkExternal, Link } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'

export interface IfoCardDetailsProps {
  launchDate: string
  launchTime: string
  saleAmount: string
  raiseAmount: string
  projectSiteUrl: string
  raisingAmount: BigNumber
  totalAmount: BigNumber
}

const StyledIfoCardDetails = styled.div`
  margin-bottom: 24px;
`

const Item = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
`

const Display = styled(Text)`
  flex: 1;
`

const IfoCardDetails: React.FC<IfoCardDetailsProps> = ({
  launchDate,
  launchTime,
  saleAmount,
  raiseAmount,
  projectSiteUrl,
  raisingAmount,
  totalAmount,
}) => {
  const TranslateString = useI18n()

  return (
    <>
      <StyledIfoCardDetails>
        <Item>
          <Display>{TranslateString(582, 'Launch Time')}</Display>
          <Text>
            {launchDate},
            <Link
              href="https://www.timeanddate.com/worldclock/uk/london"
              target="blank"
              rel="noopener noreferrer"
              ml="4px"
              style={{ display: 'inline' }}
            >
              {launchTime}
            </Link>
          </Text>
        </Item>
        <Item>
          <Display>{TranslateString(584, 'For Sale')}</Display>
          <Text>{saleAmount}</Text>
        </Item>
        <Item>
          <Display>{TranslateString(999, 'To raise (USD)')}</Display>
          <Text>{raiseAmount}</Text>
        </Item>
        {/* <Item>
          <Display>{TranslateString(586, 'Cookie to burn (USD)')}</Display>
          <Text>{cakeToBurn}</Text>
        </Item> */}
        <Item>
          <Display>{TranslateString(999, 'Total raised (% of target)')}</Display>
          <Text>{`${totalAmount.div(raisingAmount).times(100).toFixed(2)}%`}</Text>
        </Item>
      </StyledIfoCardDetails>
      {/* <LinkExternal href={projectSiteUrl} style={{ margin: 'auto' }}>
        {TranslateString(412, 'View project site')}
      </LinkExternal> */}
      <LinkExternal href="https://https://www.shibariumscan.io/address/0x5a1df64163ac8e5699697dbf5609c7d228cdb63c#code" style={{ margin: 'auto' }}>
        {TranslateString(412, 'View contract address')}
      </LinkExternal>
    </>
  )
}

export default IfoCardDetails
