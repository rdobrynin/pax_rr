import { Reducer } from 'redux'
import { TradesState, TradesActionTypes } from './types'

export const initialState: TradesState = {
  data: {name: '', image: '', amount: 0, reputationPositive: 0, reputationNegative: 0, trades: [] },
  errors: undefined,
  loading: false,
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
    case TradesActionTypes.UPDATE_TRADE: {
      // @todo
      return { ...state, loading: false, data: action.payload }
    }
    case TradesActionTypes.DELETE_TRADE: {
      return { ...state, loading: false, data: state.data.trades.filter(item => item !== action.payload)}
    }
    default: {
      return state
    }
  }
}

export { reducer as tradesReducer }
