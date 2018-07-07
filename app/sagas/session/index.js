import { all } from 'redux-saga/effects';

// sagas
import sessionCreateRoot from './sessionCreate';
import sessionVerifyRoot from './sessionVerify';

const userSaga = function* rootSaga() {
  yield all([
    sessionCreateRoot(),
    sessionVerifyRoot(),
  ]);
};

export default userSaga;
