import * as React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps, Route, Switch } from 'react-router-dom'
import { Trades } from '../store/trades/types'
// import { TradesIndexPage } from './sell/index'
import ShowTradesPage from './sell/show'
import { ApplicationState } from '../store'

interface PropsFromState {
  loading: boolean
  data: Trades
  errors?: string
}

type AllProps = PropsFromState & RouteComponentProps
const TradesPage: React.FC<AllProps> = ({ match }) => {

  return (
    <Switch>
      {/*<Route exact path={`${match.path}/`} component={TradesIndexPage} />*/}
      <Route path={`${match.path}/:hash`} component={ShowTradesPage} />
    </Switch>
  )

}

const mapStateToProps = ({ trades }: ApplicationState) => ({
  loading: trades.loading,
  errors: trades.errors,
  data: trades.data,
})

export default connect(mapStateToProps)(TradesPage)
