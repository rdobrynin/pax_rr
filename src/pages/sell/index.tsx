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

export default function SellPage() {
  return (
    <Page>
      <TopNavigation title={'Paxful'} links={linksTopNavigation}
                     logoImage={'./assets/images/project-logo.png'} imageSize={'137px'}/>
      <ActionNavigation items={actionsNavigation}/>
      <Container>
        <TradePageWrapper className={'trade-wrapper'}>
          <div className={'row'}>
            <TradeWrapper>
              Some Text in Column One
            </TradeWrapper>
            <TradeChatWrapper>
              Some Text in Column Two
              <div className={'column row-bottom'}>
                <input type="text"/>
              </div>
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
