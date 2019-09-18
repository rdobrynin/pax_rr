export interface IRate extends ApiResponse {
  time?: ITime
  disclaimer?: string
  bpi: IBpiData
}

export interface IBpiData {
  USD: IUSD
}

export interface IUSD {
  code: string
  description?: string
  rate?: string
  rate_float: number
}

export interface ITime {
  updated: Date,
  updatedISO: Date,
  updateduk: Date,
}

export type ApiResponse = Record<string, any>

export enum RateActionTypes {
  FETCH_REQUEST = '@@rate/FETCH_REQUEST',
  FETCH_SUCCESS = '@@rate/FETCH_SUCCESS',
  FETCH_ERROR = '@@rate/FETCH_ERROR',
}

export interface RateState {
  readonly loading: boolean
  data: IRate
  readonly errors?: string
}
