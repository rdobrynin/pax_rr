import { combineReducers } from 'redux'
import { all, fork } from 'redux-saga/effects'
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'

import { LayoutState, layoutReducer } from './layout'

import tradesSaga from './trades/sagas'
import { tradesReducer } from './trades/reducer'
import { TradesState } from './trades/types'

import rateSaga from './rate/sagas'
import { rateReducer } from './rate/reducer'
import { RateState } from './rate/types'

export interface ApplicationState {
  layout: LayoutState
  trades: TradesState
  rate: RateState
  router: RouterState
}

export const createRootReducer = (history: History) =>
  combineReducers({
    layout: layoutReducer,
    trades: tradesReducer,
    rate: rateReducer,
    router: connectRouter(history),
  })

export function* rootSaga() {
  yield all([fork(tradesSaga), fork(rateSaga)])
}
