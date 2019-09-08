import * as React from 'react'
import './tradeReputation.scss'

export const TradeReputation = () => (
  <div>
    <div className={'trade-reputation__avatar'}>
      <img src="./assets/images/avatar_m.png" alt="name"/>
    </div>
    <div className={'trade-reputation_stats'}>
      <span>+37</span> / <span>-1</span>
    </div>
  </div>
)
