import * as React from 'react'
import './tradeReleaseBtc.scss'
import { Constants } from '../../../utils/constants'

export class TradeReleaseBtc extends React.Component {
  static releaseBtc() {
    alert(Constants.alert.notInScopeProject);
  }

  render() {
    return (
      <button onClick={TradeReleaseBtc.releaseBtc} className={'large-btn'}>{Constants.trade.releaseBtnTitle}</button>
    )
  }
}
