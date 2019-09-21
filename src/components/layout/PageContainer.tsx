import * as React from 'react'
import { TopNavigation } from './top_navigation/TopNavigation'
import { Constants } from '../../utils/constants'
import { linksTopNavigation } from '../../data/linksTopNavigation'
import Container from './Container'
import styled from '../../utils/styled'
import { NavLink } from 'react-router-dom'

const TempLink = styled(NavLink)`
`
export class PageContainer extends React.Component {
  render() {
    return(
      <React.Fragment>
        <TopNavigation title={Constants.title} links={linksTopNavigation} isOpen={false}/>
        <Container>
          <div className={'temp'}>
            <TempLink key={0} exact to={'/sell_btc'}>
              {Constants.layoutBodyText}
            </TempLink>
          </div>
        </Container>
      </React.Fragment>
    )
  }
}
