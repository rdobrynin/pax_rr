import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { TradesActionTypes } from './types'
import { fetchError, fetchSuccess } from './actions'
import { callApi } from '../../utils/api'

const API_ENDPOINT = 'http://localhost:5555'

function* handleFetch() {
  try {
    const res = yield call(callApi, 'get', API_ENDPOINT, 'trades.json')
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
  yield takeEvery(TradesActionTypes.FETCH_REQUEST, handleFetch)
}

function* tradesSaga() {
  yield all([fork(watchFetchRequest)])
}

export default tradesSaga
