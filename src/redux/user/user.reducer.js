import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
	currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserActionTypes.SET_CURRENT_USER:
			return {
				...state, //we spread everything because we only modify state we care about ergo our currentUser
				currentUser: action.payload // can be an object which we save in state our some value that we use to transform state
			};
		default:
			return state;
	}
};

export default userReducer;
