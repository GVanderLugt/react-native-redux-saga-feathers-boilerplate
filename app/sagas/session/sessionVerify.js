import { Map } from 'immutable';
import { AsyncStorage } from 'react-native';
import { all, call, fork, put, select, takeEvery } from 'redux-saga/effects';

// action creators
import { doneIndicator, error } from '../../actions/httpActions';
import { storeClear } from '../../actions/storeActions';
import { sessionValidate, sessionInvalidate } from '../../actions/sessionActions';

// api
import client, { get } from '../../sources/api/client';
import userService from '../../sources/api/userService';

// constants
import { SESSION_VERIFY } from '../../constants/sessionTypes';
import { CURRENT_USER_FETCH } from '../../constants/userTypes';

// lib
import httpSaga from '../../lib/httpSaga';
import authenticateClient from '../../lib/authenticateClient';

export function* sessionVerify(action) {
  if (action['@@redux-saga/SAGA_ACTION']) return;

  let userId;

  try {
    yield* authenticateClient();

    const accessToken = yield AsyncStorage.getItem('feathers-jwt');
    const decodedToken = yield client.passport.verifyJWT(accessToken);
    const currentUser = yield select(state => state.get('currentUser') || Map());

    userId = decodedToken && !currentUser.get('data') && decodedToken.userId;

    if (userId) {
      yield* httpSaga(CURRENT_USER_FETCH, call(get, userService, userId));
    }

    yield put(sessionValidate());
  } catch (err) {
    yield put(error(SESSION_VERIFY, err));
    yield put(sessionInvalidate());
    yield client.logout();
    yield put(storeClear());
  } finally {
    yield put(doneIndicator(SESSION_VERIFY));
  }
}

export function* watchSessionVerify() {
  yield takeEvery(SESSION_VERIFY, sessionVerify);
}

export default function* sessionVerifyRoot() {
  yield all([
    fork(watchSessionVerify),
  ]);
}
