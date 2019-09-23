import { action } from 'typesafe-actions'
import { TradesActionTypes, ITrades, ITrade } from './types'

export const fetchRequest = () => action(TradesActionTypes.FETCH_REQUEST)

export const fetchSuccess = (data: ITrades) => action(TradesActionTypes.FETCH_SUCCESS, data)
export const deleteTrade = (data: ITrade) => action(TradesActionTypes.DELETE_TRADE, data)
export const fetchError = (message: string) => action(TradesActionTypes.FETCH_ERROR, message)
export const addMessageTradeChat = (data: ITrade) =>
  action(TradesActionTypes.ADD_MESSAGE_TRADE_CHAT, data)
