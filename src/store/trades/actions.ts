import { action } from 'typesafe-actions'
import { TradesActionTypes, ITrades } from './types'

export const fetchRequest = () => action(TradesActionTypes.FETCH_REQUEST)

export const fetchSuccess = (data: ITrades) => action(TradesActionTypes.FETCH_SUCCESS, data)
export const deleteTrade = (data: ITrades) => action(TradesActionTypes.DELETE_TRADE, data)
export const fetchError = (message: string) => action(TradesActionTypes.FETCH_ERROR, message)
