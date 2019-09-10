
export interface Trade extends ApiResponse {
  hash: string
  amount: number
  currency: string
  tradeStatus: string
  paymentMethod: string
}

export type ApiResponse = Record<string, any>

export enum TradesActionTypes {
  FETCH_REQUEST = '@@trades/FETCH_REQUEST',
  FETCH_SUCCESS = '@@trades/FETCH_SUCCESS',
  FETCH_ERROR = '@@trades/FETCH_ERROR',
  SELECT_TRADE = '@@trades/SELECT_TRADE',
  SELECTED = '@@trades/SELECTED',
}

export interface TradesState {
  readonly loading: boolean
  data: Trade[]
  readonly errors?: string
}
