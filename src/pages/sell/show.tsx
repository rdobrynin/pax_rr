import * as React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { Trade, Trades } from '../../store/trades/types'
import { fetchRequest } from '../../store/trades/actions'
import Page from '../../components/layout/Page'
import { ApplicationState } from '../../store'

interface PropsFromState {
  loading: boolean
  data: Trades
  errors?: string
}

interface PropsFromDispatch {
  fetchTrades: typeof fetchRequest
}

interface RouteParams {
  hash: string
}

interface State {
  selected?: Trade
}

type AllProps = PropsFromState & PropsFromDispatch & RouteComponentProps<RouteParams>

class ShowTradesPage extends React.Component<AllProps, State> {

  constructor(props: AllProps) {
    super(props)

    this.state = {}
  }

  public componentDidMount() {
    const { data, fetchTrades } = this.props

    if (!data || data.length === 0) {
      fetchTrades()
    }
  }

  public render() {
    const { data, loading, match } = this.props
    const selected = data.trades.find(trade => trade.hash === match.params.hash)

    return (
      <Page>
      </Page>
    )
  }
}
const mapStateToProps = ({ trades }: ApplicationState) => ({
  loading: trades.loading,
  errors: trades.errors,
  data: trades.data,
})

const mapDispatchToProps = {
  fetchTrades: fetchRequest,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowTradesPage)
