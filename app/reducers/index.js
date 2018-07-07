import { combineReducers } from 'redux-immutable';

// reducers
import form from './form';
import rootReducer from './root';
import user from './user';
import session from './session';

export default rootReducer(combineReducers({
  form,
  user,
  session,
}));
