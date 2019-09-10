import { action } from 'typesafe-actions'
import { RateActionTypes, Rate } from './types'

export const fetchRequest = () => action(RateActionTypes.FETCH_REQUEST)

export const fetchSuccess = (data: Rate) => action(RateActionTypes.FETCH_SUCCESS, data)
export const fetchError = (message: string) => action(RateActionTypes.FETCH_ERROR, message)
