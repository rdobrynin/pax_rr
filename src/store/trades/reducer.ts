import { Reducer } from 'redux'
import { TradesState, TradesActionTypes } from './types'

export const initialState: TradesState = {
  data: { name: '', image: '', amount: 0, reputationPositive: 0, reputationNegative: 0, trades: [] },
  errors: undefined,
  loading: false
}

const reducer: Reducer<TradesState> = (state = initialState, action) => {
  switch (action.type) {
    case TradesActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true }
    }
    case TradesActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload }
    }
    case TradesActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload }
    }
    case TradesActionTypes.ADD_MESSAGE_TRADE_CHAT: {
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          trades: [...state.data.trades].map((trade) => {
            if (trade.hash === action.payload.hash) {
              trade.chat.items.push(action.payload)
            }
            return trade;
          })
        }
      }
    }
    case TradesActionTypes.DELETE_TRADE: {
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          trades: [...state.data.trades].filter(item => item !== action.payload)
        }
      }
    }
    default: {
      return state
    }
  }
}

export { reducer as tradesReducer }
