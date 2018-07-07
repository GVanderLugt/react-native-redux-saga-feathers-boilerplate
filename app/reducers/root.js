import Immutable from 'immutable';

// constants
import { STORE_CLEAR } from '../constants/storeTypes';

export default reducers => (state, action) => {
  let newState = state;

  if (action.type === STORE_CLEAR) {
    newState = Immutable.Map();
  }

  return reducers(newState, action);
};
