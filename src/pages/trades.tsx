import * as React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps, Route, Switch } from 'react-router-dom'
import { ITrades } from '../store/trades/types'
import TradesIndexPage from './trades/index'
import { ApplicationState } from '../store'

interface PropsFromState {
  loading: boolean
  data: ITrades
  errors?: string
}

type AllProps = PropsFromState & RouteComponentProps
const TradesPage: React.FC<AllProps> = ({ match }) => {

  return (
    <Switch>
      <Route exact path={`${match.path}/`} component={TradesIndexPage} />
      <Route exact path={`${match.path}/disputes`} component={TradesIndexPage} />
      <Route exact path={`${match.path}/offers`} component={TradesIndexPage} />
      <Route exact path={`${match.path}/team`} component={TradesIndexPage} />
      <Route exact path={`${match.path}/trades`} component={TradesIndexPage} />
      <Route exact path={`${match.path}/history`} component={TradesIndexPage} />
      <Route path={`${match.path}/:hash`} component={TradesIndexPage} />
    </Switch>
  )

}

const mapStateToProps = ({ trades }: ApplicationState) => ({
  loading: trades.loading,
  errors: trades.errors,
  data: trades.data,
})

export default connect(mapStateToProps)(TradesPage)
