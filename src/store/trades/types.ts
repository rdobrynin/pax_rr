export interface ITrades extends ApiResponse {
  readonly name: string
  readonly image?: string
  reputationPositive: number
  reputationNegative: number
  trades: ITrade[],
}

export interface ITrade {
  readonly hash: string
  amount: number
  tradeStatus: string
  paymentMethod: string
  isActive: boolean
  chat: IChat
}

export interface ITotalTrades {
  total: number
}

export interface IChat {
  isRead: boolean,
  items?: IMessage[],
}

export interface IMessage {
  comment: string,
  time: string,
  isBuyer: boolean,
  image: string
}

export interface ITradeStatus {
  status: string
}

export interface ITradeAmount {
  amount: number;
}

export interface ITradeHash {
  readonly hash: any
}

export interface ITradeInformationHeader {
  name: string,
  isTrade: boolean,
}

export interface ITradeHeader {
  readonly name?: string
  reputationPositive: number
  reputationNegative: number
  paymentMethod: string
}

export interface ITradeReputation {
  readonly reputationPositive: number
  readonly reputationNegative: number
}

export type ApiResponse = Record<string, any>

export enum TradesActionTypes {
  FETCH_REQUEST = '@@trades/FETCH_REQUEST',
  FETCH_SUCCESS = '@@trades/FETCH_SUCCESS',
  FETCH_ERROR = '@@trades/FETCH_ERROR',
  DELETE_TRADE = '@@trades/DELETE_TRADE',
  UPDATE_TRADE_CHAT = '@@trades/UPDATE_TRADE_CHAT',
  ADD_MESSAGE_TRADE_CHAT = '@@trades/ADD_MESSAGE_TO_TRADE_CHAT',
}

export interface TradesState {
  readonly loading: boolean
  data: ITrades
  readonly errors?: string
}
