import { Reducer } from 'redux'
import { RateState, RateActionTypes } from './types'

export const initialState: RateState = {
  data: {
    time: {
      updated: new Date(),
      updatedISO: new Date(),
      updateduk: new Date()
    },
    disclaimer: '',
    bpi: {
      USD: {
        code: '',
        rate: '',
        description: '',
        rate_float: 0
      }
    }
  },
  errors: undefined,
  loading: false
}

const reducer: Reducer<RateState> = (state = initialState, action) => {
  switch (action.type) {
    case RateActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true }
    }
    case RateActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload }
    }
    case RateActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload }
    }
    default: {
      return state
    }
  }
}

export { reducer as rateReducer }
