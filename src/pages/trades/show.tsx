import * as React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { Trade, Trades } from '../../store/trades/types'
import { fetchRequest } from '../../store/trades/actions'
import Page from '../../components/layout/Page'
import { ApplicationState } from '../../store'
import LoadingSpinner from '../../components/spinner/Spinner'
import { TopNavigation } from '../../components/layout/top_navigation/TopNavigation'
import { linksTopNavigation } from '../../data/linksTopNavigation'
import { ActionNavigation } from '../../components/layout/action_navigation/ActionNavigation'
import { actionsNavigation } from '../../data/actionsNavigation'

interface PropsFromState {
  loading: boolean
  data: Trade[]
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

type AllProps = PropsFromState&PropsFromDispatch&RouteComponentProps<RouteParams>

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
    const selectedTrade = data.find(trades => trades.hash === match.params.hash)
    const isData: boolean = this.props.data.length > 0

    return (
      <Page>
        {loading && data.length === 0 && (
          <LoadingSpinner/>
        )}
        <TopNavigation title={'Paxful'} links={linksTopNavigation}
                       logoImage={`${process.env.PUBLIC_URL}/assets/images/project-logo.png`} imageSize={'137px'}/>
        <ActionNavigation links={actionsNavigation}/>

        <div>
          <pre>{JSON.stringify(selectedTrade, null, 2)}</pre>
        </div>
      </Page>
    )
  }
}

const mapStateToProps = ({ trades }: ApplicationState) => ( {
  loading: trades.loading,
  errors: trades.errors,
  data: trades.data.trades,
} )

const mapDispatchToProps = {
  fetchTrades: fetchRequest,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowTradesPage)
