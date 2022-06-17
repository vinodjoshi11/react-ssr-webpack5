import { combineReducers } from 'redux';
import user from './features/user-list/reducer';

const rootReducer = combineReducers({
  user,
});

export default rootReducer;
