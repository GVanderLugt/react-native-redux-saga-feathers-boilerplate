import { USER_CREATE, USER_FETCH_ALL_INIT, USER_CLEAR_ALL } from '../constants/userTypes';

export function userCreate(params) {
  return {
    type:    USER_CREATE,
    payload: params,
  };
}

export function userFetchAll(params) {
  return {
    type:    USER_FETCH_ALL_INIT,
    payload: params,
  };
}

export function userClearAll() {
  return {
    type: USER_CLEAR_ALL,
  };
}
