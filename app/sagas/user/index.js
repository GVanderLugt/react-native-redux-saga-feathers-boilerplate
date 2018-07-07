import { all } from 'redux-saga/effects';

// sagas
import userFetchAllRoot from './userFetchAll';
import userCreateRoot from './userCreate';

const userSaga = function* rootSaga() {
  yield all([
    userFetchAllRoot(),
    userCreateRoot(),
  ]);
};

export default userSaga;
