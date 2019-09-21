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
import TradeInformationStatisticsWrapper
  from '../../components/layout/trade/trade_information_statistcis/TradeInformationStatisticsWrapper'
import TradeInformationReputationContainer
  from '../../components/layout/trade/trade_information_statistcis/TradeInformationReputationContainer'
import TradeInformationTradeCounterContainer
  from '../../components/layout/trade/trade_information_statistcis/TradeInformationTradeCounterContainer'
import TradeInformationTradeStatusContainer
  from '../../components/layout/trade/trade_information_statistcis/TradeInformationTradeStatusContainer'
import TradeInformationTradeHashContainer
  from '../../components/layout/trade/trade_information_statistcis/TradeInformationTradeHashContainer'
import TradeInformationTradeAmountContainer
  from '../../components/layout/trade/trade_information_statistcis/TradeInformationTradeAmountContainer'
import TradeInformationTradeRateContainer
  from '../../components/layout/trade/trade_information_statistcis/TradeInformationTradeRateContainer'
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
import { fetchRateRequest } from '../../store/rate/actions'
import { updateSidebar } from '../../store/layout'
import { ITrade, ITrades } from '../../store/trades/types'
import { ApplicationState } from '../../store'
import { connect } from 'react-redux'
import LoadingSpinner from '../../components/spinner/Spinner'
import Alert from '../../components/layout/Alert'
import TradeItemContainer from '../../components/layout/trade/TradeItemContainer'
import { IRate } from '../../store/rate/types'
import { Constants } from '../../utils/constants'

interface PropsFromTradesState {
  loading: boolean,
  data: ITrades
  rate: IRate
  errors?: string
}

interface PropsFromDispatch {
  fetchRequest: typeof fetchRequest
  fetchRateRequest: typeof fetchRateRequest
  deleteTrade: typeof deleteTrade
  updateSidebar: typeof updateSidebar
}

interface RouteParams {
  hash: string
}

type TradeProps = PropsFromTradesState&ITrade&PropsFromDispatch&RouteComponentProps<RouteParams>

interface State {
  selected?: TradeProps
}

class TradesIndexPage extends React.Component<TradeProps, State> {

  constructor(props: TradeProps) {
    super(props)

    this.state = {
      selected: this.props
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps: Readonly<TradeProps>, nextContext: any): void {
    // console.log(nextProps);

  }

  public componentDidMount() {
    const { fetchRequest: ft } = this.props
    ft()
    const { fetchRateRequest: fr } = this.props
    fr()
  }

  sendMessage = (message: string) => {
    // console.log(message);
  }
  deleteTrade = (selectedTrade: ITrade) => {
    const { deleteTrade: dr } = this.props
    dr(selectedTrade)
  }

  public render() {
    const { loading, data, match, rate } = this.props
    const selectedTrades: ITrade[] = data.trades.filter(trade => trade.hash === match.params.hash)
    const selectedTrade: ITrade = selectedTrades[0]
    console.log(selectedTrade);

    const currentRate: IRate = rate
    const isData: boolean = this.props.data.trades.length > 0

    return (
      <Page>
        {loading && data.length === 0 && (
          <LoadingSpinner/>
        )}
        <TopNavigation title={Constants.title} links={linksTopNavigation} isOpen={false}/>
        <ActionNavigation
          history={this.props.history}
          location={this.props.location}
          match={this.props.match}
          links={actionsNavigation}/>
        {isData ? (
          <Container>
            {/*<pre>{JSON.stringify(selectedTrade, null, 2)}</pre>*/}
            <TradePageWrapper className={'trade-wrapper'}>
              <div className={'row'}>
                <TradeWrapper>
                  <TradeItemContainer>
                    {data.trades.map((trade, i) => (
                      <TradeItem key={i}
                                 bpi={currentRate.bpi}
                                 chat={trade.chat}
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
                                 tradeStatus={trade.tradeStatus}
                                 paymentMethod={trade.paymentMethod}>
                      </TradeItem>
                    ))}
                  </TradeItemContainer>
                </TradeWrapper>
                <TradeChatWrapper>
                  <TradeChatContainer>
                    {selectedTrade ? (
                      <ChatHeaderContainer trades={data.trades} trade={selectedTrade} name={data.name}
                                           paymentMethod={selectedTrade.paymentMethod}
                                           reputationNegative={data.reputationNegative}
                                           reputationPositive={data.reputationPositive}>
                        <button onClick={() => this.deleteTrade(selectedTrade)}>
                          <img src={Constants.assetsUrl + '/images/trash-bin.png'} alt="remove"/>
                        </button>
                      </ChatHeaderContainer>
                    ) : ('')}
                    <React.Fragment>
                      {selectedTrade ? (
                      <ChatHistory
                        externalComment={''}
                        messages={selectedTrade.chat.items}/>
                      ) : (
                        <ChatHistory
                          externalComment={selectedTrade ? Constants.chat.chatBuyerBodyText :
                            Constants.chat.chatInfoBodyText}
                          messages={[]}/>
                      )}
                    </React.Fragment>
                    <React.Fragment>
                      {selectedTrade ? (
                      <ChatInput
                        userImage={'../'}
                        message={'todo'}
                        sendMessage={this.sendMessage}
                      />
                      ) : ( '' )}
                    </React.Fragment>
                  </TradeChatContainer>
                </TradeChatWrapper>
                <TradeInformationWrapper>
                  <TradeInformation isTrade={!!selectedTrade} name={data.name}/>
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
                        <TradeHash hash={selectedTrade.hash}/>
                      </TradeInformationTradeHashContainer>
                      <TradeInformationTradeAmountContainer>
                        <TradeAmount
                          bpi={currentRate.bpi}
                          amount={selectedTrade.amount}/>
                      </TradeInformationTradeAmountContainer>
                      <TradeInformationTradeRateContainer>
                        <TradeRate
                          amount={selectedTrade.amount}
                          bpi={currentRate.bpi}
                        />
                      </TradeInformationTradeRateContainer>
                    </TradeInformationStatisticsWrapper>
                  ) : ( '' )}
                </TradeInformationWrapper>
              </div>
            </TradePageWrapper>
          </Container>
        ) : ( <Alert>{Constants.trade.alertNotTradesText}</Alert> )}
      </Page>
    )
  }
}

const mapStateToProps = ({ trades, rate }: ApplicationState) => ( {
  loading: trades.loading,
  errors: trades.errors,
  data: trades.data,
  rate: rate.data
} )

const mapDispatchToProps = {
  fetchRequest: fetchRequest,
  fetchRateRequest: fetchRateRequest,
  deleteTrade: deleteTrade
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TradesIndexPage)
