import * as React from 'react'
import Page from '../../components/layout/Page'
import Container from '../../components/layout/Container'
import { linksTopNavigation } from '../../data/linksTopNavigation'
import { TopNavigation } from '../../components/layout/top_navigation/TopNavigation'
import { NavLink } from 'react-router-dom'
import styled from '../../utils/styled'
import './index.scss'

const TempLink = styled(NavLink)`
`

export default function BuyPage() {
  return (
    <Page>
      <TopNavigation title={'Paxful'} links={linksTopNavigation}
                     logoImage={'./assets/images/project-logo.png'} imageSize={'137px'}/>
      <Container>
        <div className={'temp'}>
          <TempLink key={0} exact to={'/sell_btc'}>
            Go to Sell Bitcoins Page or Navigate from top navigation bar
          </TempLink>
        </div>
      </Container>
    </Page>
  )
}
