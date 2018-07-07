import { Map } from 'immutable';

// constants
import { CURRENT_USER_FETCH } from '../constants/userTypes';

// lib
import httpReducer from '../lib/httpReducer';

export default function (state = Map(), action) {
  switch (action.type) {
    case CURRENT_USER_FETCH: return httpReducer(state, action);
    default: return state;
  }
}
