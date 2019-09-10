export interface Rate extends ApiResponse {
  time: string
  disclaimer: string
  bpi: USD
}

interface USD {
  code: string
  rate: number
  description: string
  rate_float: number
}

export type ApiResponse = Record<string, any>

export enum RateActionTypes {
  FETCH_REQUEST = '@@rate/FETCH_REQUEST',
  FETCH_SUCCESS = '@@rate/FETCH_SUCCESS',
  FETCH_ERROR = '@@rate/FETCH_ERROR',
  SELECTED = '@@rate/SELECTED',
}

export interface RateState {
  readonly loading: boolean
  readonly data: Rate[]
  readonly errors?: string
}
