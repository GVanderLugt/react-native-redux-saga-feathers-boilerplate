import { Map } from 'immutable';

// constants
import { USER_CREATE, USER_FETCH_ALL, USER_CLEAR_ALL } from '../constants/userTypes';

// lib
import httpReducer from '../lib/httpReducer';

export default function (state = Map(), action) {
  switch (action.type) {
    case USER_CREATE: return httpReducer(state, action);
    case USER_FETCH_ALL: return httpReducer(state, action, 'user');
    case USER_CLEAR_ALL: return Map();
    default: return state;
  }
}
