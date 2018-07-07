import { all, fork, takeEvery, put, call } from 'redux-saga/effects';
import Toast from 'react-native-simple-toast';

// action creators
import { doneIndicator, error } from '../../actions/httpActions';
import { destroy, startSubmit, setSubmitFailed, setSubmitSucceeded } from 'redux-form';
import { NavigationActions } from 'react-navigation';

// api
import { create } from '../../sources/api/client';
import userService from '../../sources/api/userService';

// constants
import { USER_CREATE } from '../../constants/userTypes';

// lib
import httpSaga from '../../lib/httpSaga';
import Navigator from '../../lib/navigator';

export function* userCreate(action) {
  if (action['@@redux-saga/SAGA_ACTION']) return;

  const { payload } = action;
  const { back } = NavigationActions;

  const FORM = 'register';

  yield put(startSubmit(FORM));

  try {
    yield* httpSaga(USER_CREATE, call(create, userService, payload));

    yield put(setSubmitSucceeded(FORM));

    Toast.show('Account Created');

    yield Navigator.dispatch(back());

    yield put(destroy(FORM));
  } catch (err) {
    yield put(error(USER_CREATE, err));
    yield put(setSubmitFailed(FORM));
  } finally {
    yield put(doneIndicator(USER_CREATE));
  }
}

export function* watchUserCreate() {
  yield takeEvery(USER_CREATE, userCreate);
}

export default function* userCreateRoot() {
  yield all([
    fork(watchUserCreate),
  ]);
}
