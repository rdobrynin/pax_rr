import { action } from 'typesafe-actions'
import { RateActionTypes, IRate } from './types'

export const fetchRateRequest = () => action(RateActionTypes.FETCH_REQUEST)

export const fetchRateSuccess = (rate: IRate) => action(RateActionTypes.FETCH_SUCCESS, rate)
export const fetchRateError = (message: string) => action(RateActionTypes.FETCH_ERROR, message)
