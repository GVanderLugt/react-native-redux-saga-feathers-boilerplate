import { all } from 'redux-saga/effects';

// sagas
import sessionSagas from './session';
import userSagas from './user';

const rootSaga = function* rootSaga() {
  yield all([
    sessionSagas(),
    userSagas(),
  ]);
};

export default rootSaga;
