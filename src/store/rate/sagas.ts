import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { RateActionTypes } from './types'
import { fetchRateError, fetchRateSuccess } from './actions'
import { callApi } from '../../utils/api'

function* handleFetch() {
  try {
    const res = yield call(callApi, 'get', `${process.env.REACT_APP_API_RATE_ENDPOINT}`,
      '/v1/bpi/currentprice/USD.json')
    if (res.error) {
      yield put(fetchRateError(res.error))
    } else {
      yield put(fetchRateSuccess(res))
    }
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(fetchRateError(err.stack))
    } else {
      yield put(fetchRateError('An unknown error occured.'))
    }
  }
}

function* watchFetchRequest() {
  yield takeEvery(RateActionTypes.FETCH_REQUEST, handleFetch)
}

function* rateSaga() {
  yield all([fork(watchFetchRequest)])
}

export default rateSaga
