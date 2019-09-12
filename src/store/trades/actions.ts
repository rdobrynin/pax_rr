import { action } from 'typesafe-actions'
import { TradesActionTypes, Trades } from './types'

export const fetchRequest = () => action(TradesActionTypes.FETCH_REQUEST)

export const fetchSuccess = (data: Trades) => action(TradesActionTypes.FETCH_SUCCESS, data)
export const fetchError = (message: string) => action(TradesActionTypes.FETCH_ERROR, message)
