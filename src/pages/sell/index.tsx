import * as React from 'react'
import Page from '../../components/layout/Page'
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
import { Buyer } from '../../data/buyer'
import TradeChatContainer from '../../components/layout/trade/TradeChatContainer'
import { ChatInput, ChatProps } from '../../components/chat/chat-input/ChatInput'
import { ChatHistory } from '../../components/chat/chat-history/ChatHistory'
import { ChatState } from '../../store/chat/types'
import { sendMessage } from '../../store/chat/actions'
import { SystemState } from '../../store/system/types'
import { updateSession } from '../../store/system/actions'
import { ChatHeaderContainer } from '../../components/chat/chat-header/ChatHeaderContainer'
import { fetchRequest } from '../../store/trades/actions'
import { Trade, Trades } from '../../store/trades/types'
import { Rate } from '../../store/rate/types'
import { ApplicationState } from '../../store'
import { connect } from 'react-redux'
import LoadingSpinner from '../../components/spinner/Spinner'
import TradeitemContainer from '../../components/layout/trade/TradeItemContainer'

// interface AppProps {
//   sendMessage: typeof sendMessage;
//   updateSession: typeof updateSession;
//   chat: ChatState;
//   system: SystemState;
//   thunkSendMessage: any;
//   chatProps: ChatProps
// }

interface PropsFromTradesState {
  loading: boolean,
  data: Trades
  errors?: string
}

interface PropsFromRateState {
  loading: boolean,
  data: Rate[]
  errors?: string
}

interface PropsFromDispatch {
  fetchRequest: typeof fetchRequest
}

type TradeProps = PropsFromTradesState&PropsFromDispatch
type RateProps = PropsFromRateState&PropsFromDispatch

// export type UpdateMessageParam = React.SyntheticEvent<{ value: string }>

class TradesPage extends React.Component<TradeProps> {

  public componentDidMount() {
    const { fetchRequest: fr } = this.props
    fr()
  }

  // updateMessage = (event: UpdateMessageParam) => {
  //   this.setState({ message: event.currentTarget.value });
  // };

  sendMessage = (message: string) => {
    // this.props.sendMessage({
    //   user: this.props.system.userName,
    //   message: message,
    //   timestamp: new Date().getTime(),
    // });
    // this.setState({ message: '' });
  }

  public render() {
    const { loading, data } = this.props
    return (
      <Page>
        {loading && data.length === 0 && (
          <LoadingSpinner/>
        )}
        <TopNavigation title={'Paxful'} links={linksTopNavigation}
                       logoImage={'./assets/images/project-logo.png'} imageSize={'137px'}/>
        <ActionNavigation items={actionsNavigation}/>
        <Container>
          <TradePageWrapper className={'trade-wrapper'}>
            <div className={'row'}>
              <TradeWrapper>
                <TradeitemContainer>
                  {data.trades.map((trade, i) => (
                    <TradeItem key={i}
                               trades={data.trades}
                               name={data.name}
                               image={data.image}
                               reputationNegative={data.reputationNegative}
                               reputationPositive={data.reputationPositive}
                               hash={trade.hash}
                               amount={trade.amount}
                               isOpened={trade.isOpened}
                               currency={trade.currency}
                               tradeStatus={trade.tradeStatus}
                               paymentMethod={trade.paymentMethod}
                               onClick={trade.hash}
                    />
                  ))}
                </TradeitemContainer>
              </TradeWrapper>
              <TradeChatWrapper>
                <TradeChatContainer>
                  <ChatHeaderContainer/>
                  <div>
                    <ChatHistory messages={[]}/>
                  </div>
                  <ChatInput
                    userImage={'../'}
                    message={'todo'}
                    sendMessage={this.sendMessage}
                  />
                </TradeChatContainer>
              </TradeChatWrapper>
              <TradeInformationWrapper>
                <TradeInformation/>
                <TradeReleaseBtc/>
                <TradeInformationStatisticsWrapper className={'grid'}>
                  <TradeInformationReputationContainer>
                    <TradeReputation/>
                  </TradeInformationReputationContainer>
                  <TradeInformationTradeCounterContainer>
                    <TradeCounter/>
                  </TradeInformationTradeCounterContainer>
                  <TradeInformationTradeStatusContainer>
                    <TradeStatus/>
                  </TradeInformationTradeStatusContainer>
                  <TradeInformationTradeHashContainer>
                    <TradeHash/>
                  </TradeInformationTradeHashContainer>
                  <TradeInformationTradeAmountContainer>
                    <TradeAmount/>
                  </TradeInformationTradeAmountContainer>
                  <TradeInformationTradeRateContainer>
                    <TradeRate/>
                  </TradeInformationTradeRateContainer>
                </TradeInformationStatisticsWrapper>
              </TradeInformationWrapper>
            </div>
          </TradePageWrapper>
        </Container>
      </Page>
    )
  }
}

const mapStateToTradesProps = ({ trades, rate }: ApplicationState) => ( {
  loading: trades.loading,
  errors: trades.errors,
  data: trades.data,
  rate: rate.data,
} )

const mapDispatchToProps = {
  fetchRequest: fetchRequest,
}

// Now let's connect our component!
// With redux v4's improved typings, we can finally omit generics here.
export default connect(
  mapStateToTradesProps,
  mapDispatchToProps
)(TradesPage)
