import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

// action creators
import { doneIndicator, error } from '../../actions/httpActions';

// api
import { find } from '../../sources/api/client';
import userService from '../../sources/api/userService';

// constants
import { USER_FETCH_ALL, USER_FETCH_ALL_INIT } from '../../constants/userTypes';

// lib
import httpSaga from '../../lib/httpSaga';

// schemas
import { userListSchema } from '../../schemas/user';

export function* userFetchAll(action) {
  if (action['@@redux-saga/SAGA_ACTION']) return;

  const { search } = action.payload || {};

  try {
    const options = {
      query: {
        $search: search,
      },
    };

    yield* httpSaga(USER_FETCH_ALL, call(find, userService, options), {
      schema: userListSchema,
      entity: 'user',
    });
  } catch (err) {
    yield put(error(USER_FETCH_ALL, err));
  } finally {
    yield put(doneIndicator(USER_FETCH_ALL));
  }
}

export function* watchUserFetchAll() {
  yield takeEvery(USER_FETCH_ALL_INIT, userFetchAll);
}

export default function* root() {
  yield all([
    fork(watchUserFetchAll),
  ]);
}
