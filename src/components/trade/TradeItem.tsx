import * as React from 'react'
import './tradeItem.scss'
import { IBuyer } from '../../models/trade/buyer'

export const TradeItem: React.FunctionComponent<IBuyer> =
  ({ name, image, amount, reputationPositive, reputationNegative, trades }) => (
    <div className={'trade-item__container'}>
      {trades.map((trade, i) => (
        <div key={i} className={'trade-item__wrapper'}>
          <div>
            <div className="trade-item__action">{name} <span>is buying</span></div>
            <div className={'trade-item__payment'}>{trade.paymentMethod}</div>
            <div className={'trade-item__value'}>
              {trade.amount} {trade.currency} (0.0025893 BTC)
            </div>
          </div>
         <div className={'trade-item__buyer_wrapper'}>
           <div className={'trade-item__buyer'}>
             <img src={image} alt={name}/>
           </div>
           <div className={'trade-item__status'}>
             {trade.tradeStatus}
           </div>
         </div>
        </div>
      ))}
    </div>
  )
