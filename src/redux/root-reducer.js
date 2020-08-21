//actual base reducer that represents all the state in our application

import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

export default combineReducers({
	user: userReducer
});
