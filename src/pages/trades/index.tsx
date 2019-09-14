import * as React from 'react'
import Page from '../../components/layout/Page'
import { RouteComponentProps } from 'react-router'
import Container from '../../components/layout/Container'
import { TopNavigation } from '../../components/layout/top_navigation/TopNavigation'
import { linksTopNavigation } from '../../data/linksTopNavigation'
import { actionsNavigation } from '../../data/actionsNavigation'
import { ActionNavigation } from '../../components/layout/action_navigation/ActionNavigation'
import TradePageWrapper from '../../components/layout/trade/TradePageWrapper'
import TradeWrapper from '../../components/layout/trade/TradeWrapper'
import TradeChatWrapper from '../../components/layout/trade/TradeChatWrapper'
import TradeInformationWrapper from '../../components/layout/trade/TradeInformationWrapper'
import { TradeInformation } from '../../components/trade_information/TradeInformation'
import { TradeReleaseBtc } from '../../components/trade_information/trade_release_btc/TradeReleaseBtc'
import TradeInformationStatisticsWrapper from '../../components/layout/trade/trade_information_statistcis/TradeInformationStatisticsWrapper'
import TradeInformationReputationContainer from '../../components/layout/trade/trade_information_statistcis/TradeInformationReputationContainer'
import TradeInformationTradeCounterContainer from '../../components/layout/trade/trade_information_statistcis/TradeInformationTradeCounterContainer'
import TradeInformationTradeStatusContainer from '../../components/layout/trade/trade_information_statistcis/TradeInformationTradeStatusContainer'
import TradeInformationTradeHashContainer from '../../components/layout/trade/trade_information_statistcis/TradeInformationTradeHashContainer'
import TradeInformationTradeAmountContainer from '../../components/layout/trade/trade_information_statistcis/TradeInformationTradeAmountContainer'
import TradeInformationTradeRateContainer from '../../components/layout/trade/trade_information_statistcis/TradeInformationTradeRateContainer'
import { TradeReputation } from '../../components/trade_information/trade_reputation/TradeReputation'
import { TradeCounter } from '../../components/trade_information/trade_counter/TradeCounter'
import { TradeStatus } from '../../components/trade_information/trade_status/TradeStatus'
import { TradeHash } from '../../components/trade_information/trade_hash/TradeHash'
import { TradeAmount } from '../../components/trade_information/trade_amount/TradeAmount'
import { TradeRate } from '../../components/trade_information/trade_rate/TradeRate'
import { TradeItem } from '../../components/trade/TradeItem'
import TradeChatContainer from '../../components/layout/trade/TradeChatContainer'
import { ChatInput } from '../../components/chat/chat-input/ChatInput'
import { ChatHistory } from '../../components/chat/chat-history/ChatHistory'
import { ChatHeaderContainer } from '../../components/chat/chat-header/ChatHeaderContainer'
import { fetchRequest, deleteTrade } from '../../store/trades/actions'
import { ITrade, ITrades } from '../../store/trades/types'
import { ApplicationState } from '../../store'
import { connect } from 'react-redux'
import LoadingSpinner from '../../components/spinner/Spinner'
import Alert from '../../components/layout/Alert'
import TradeItemContainer from '../../components/layout/trade/TradeItemContainer'

interface PropsFromTradesState {
  loading: boolean,
  data: ITrades
  errors?: string
}

interface PropsFromDispatch {
  fetchRequest: typeof fetchRequest
  deleteTrade: typeof deleteTrade
}

interface RouteParams {
  hash: string
}

interface State {
  selected?: ITrade
}

type TradeProps = PropsFromTradesState&PropsFromDispatch&RouteComponentProps<RouteParams>

class TradesIndexPage extends React.Component<TradeProps, State> {

  constructor(props: TradeProps) {
    super(props)

    this.state = {}
  }

  public componentDidMount() {
    const { fetchRequest: fr } = this.props
    fr()
  }

  sendMessage = (message: string) => {
    // this.props.sendMessage({
    //   user: this.props.system.userName,
    //   message: message,
    //   timestamp: new Date().getTime(),
    // });
    // this.setState({ message: '' });
  }

  public render() {
    const { loading, data, match } = this.props
    const selectedTrade: any = data.trades.find(trades => trades.hash === match.params.hash)
    const isData: boolean = this.props.data.trades.length > 0
    return (
      <Page>
        {loading && data.length === 0 && (
          <LoadingSpinner/>
        )}
        <TopNavigation title={'Paxful'} links={linksTopNavigation}
                       logoImage={`${process.env.PUBLIC_URL}/assets/images/project-logo.png`} imageSize={'137px'}/>
        <ActionNavigation
          history={this.props.history}
          location={this.props.location}
          match={this.props.match}
          links={actionsNavigation}/>
        {isData ? (
          <Container>
              {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
            <TradePageWrapper className={'trade-wrapper'}>
              <div className={'row'}>
                <TradeWrapper>
                  <TradeItemContainer>
                    {data.trades.map((trade, i) => (
                      <TradeItem key={i}
                                 history={this.props.history}
                                 location={this.props.location}
                                 match={this.props.match}
                                 isActive={trade.hash === match.params.hash}
                                 trades={data.trades}
                                 name={data.name}
                                 image={data.image}
                                 reputationNegative={data.reputationNegative}
                                 reputationPositive={data.reputationPositive}
                                 hash={trade.hash}
                                 amount={trade.amount}
                                 currency={trade.currency}
                                 tradeStatus={trade.tradeStatus}
                                 paymentMethod={trade.paymentMethod}
                      />
                    ))}
                  </TradeItemContainer>
                </TradeWrapper>
                <TradeChatWrapper>
                  <TradeChatContainer>
                    {selectedTrade ? (
                    <ChatHeaderContainer onClick={console.log(1)} trades={data.trades} name={data.name}
                      paymentMethod={selectedTrade.paymentMethod}
                      reputationNegative={data.reputationNegative}
                      reputationPositive={data.reputationPositive}
                    />
                    ) : ('')}
                    <div>
                      <ChatHistory messages={[]}/>
                    </div>
                    {selectedTrade ? (
                    <ChatInput
                      userImage={'../'}
                      message={'todo'}
                      sendMessage={this.sendMessage}
                    />
                    ) : ('')}
                  </TradeChatContainer>
                </TradeChatWrapper>
                <TradeInformationWrapper>
                  <TradeInformation isTrade={selectedTrade} name={data.name}/>
                  <TradeReleaseBtc/>
                  {selectedTrade ? (
                  <TradeInformationStatisticsWrapper className={'grid'}>
                    <TradeInformationReputationContainer>
                      <TradeReputation
                        reputationNegative={data.reputationNegative}
                        reputationPositive={data.reputationPositive}
                      />
                    </TradeInformationReputationContainer>
                    <TradeInformationTradeCounterContainer>
                      <TradeCounter total={data.trades.length}/>
                    </TradeInformationTradeCounterContainer>
                    <TradeInformationTradeStatusContainer>
                      <TradeStatus status={selectedTrade.tradeStatus}/>
                    </TradeInformationTradeStatusContainer>
                    <TradeInformationTradeHashContainer>
                      <TradeHash hash={selectedTrade.hash} />
                    </TradeInformationTradeHashContainer>
                    <TradeInformationTradeAmountContainer>
                      <TradeAmount amount={selectedTrade.amount}/>
                    </TradeInformationTradeAmountContainer>
                    <TradeInformationTradeRateContainer>
                      <TradeRate/>
                    </TradeInformationTradeRateContainer>
                  </TradeInformationStatisticsWrapper>
                    ) : ('')}
                </TradeInformationWrapper>
              </div>
            </TradePageWrapper>
          </Container>
        ) : ( <Alert>You haven't any Trades</Alert> )}
      </Page>
    )
  }
}

const mapStateToTradesProps = ({ trades }: ApplicationState) => ( {
  loading: trades.loading,
  errors: trades.errors,
  data: trades.data,
} )

const mapDispatchToProps = {
  fetchRequest: fetchRequest,
}

export default connect(
  mapStateToTradesProps,
  mapDispatchToProps
)(TradesIndexPage)
