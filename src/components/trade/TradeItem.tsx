import * as React from 'react'
import './tradeItem.scss'
import { Trade, Trades } from '../../store/trades/types'

export const TradeItem: React.FunctionComponent<Trade&Trades> =
  ({trades, amount, name, image, reputationPositive, reputationNegative}) => (
    <div className={'trade-item__container'}>
      {trades.map((item, i) => (
        <div key={i} className={'trade-item__wrapper'}>
          <div>
            <div className="trade-item__action">12 <span>is buying</span></div>
            <div className={'trade-item__payment'}>{item.paymentMethod}</div>
            <div className={'trade-item__value'}>
              {item.currency} (0.0025893 BTC)
            </div>
          </div>
         <div className={'trade-item__buyer_wrapper'}>
           <div className={'trade-item__buyer'}>
             <img src={image} alt={name}/>
           </div>
           <div className={'trade-item__status'}>
             {item.tradeStatus}
           </div>
         </div>
        </div>
      ))}
    </div>
  )
