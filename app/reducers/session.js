import { Map } from 'immutable';

// constants
import { SESSION_VALIDATE, SESSION_INVALIDATE } from '../constants/sessionTypes';

export default function (state = Map(), action) {
  switch (action.type) {
    case SESSION_VALIDATE: return state.set('valid', true);
    case SESSION_INVALIDATE: return state.set('valid', false);
    default: return state;
  }
}
