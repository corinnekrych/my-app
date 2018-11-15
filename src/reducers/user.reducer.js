import {GET_USERS_SUCCESS} from '../actions/action.constants';

const userReducer = function(state = {users: [], fetched: false}, action) {
  switch(action.type) {

    case GET_USERS_SUCCESS:
      return {...state, users: action.users, fetched: true};
    default:
      return state;
  }
};

export default userReducer;
