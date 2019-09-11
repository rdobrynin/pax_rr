import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { RateActionTypes } from './types'
import { fetchError, fetchSuccess } from './actions'
import { callApi } from '../../utils/api'

const API_ENDPOINT = 'https://api.coindesk.com'

function* handleFetch() {
  try {
    const res = yield call(callApi, 'get', API_ENDPOINT, '/v1/bpi/currentprice/USD.json')
    if (res.error) {
      yield put(fetchError(res.error))
    } else {
      yield put(fetchSuccess(res))
    }
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(fetchError(err.stack))
    } else {
      yield put(fetchError('An unknown error occured.'))
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
