import {checkStatus, httpUsersCall, parseJson, sortByNameDescending} from '../api/user.api';
import {GET_USERS_SUCCESS} from './action.constants';

const shouldFetchUsers = (state) => {
  if (!state.fetched) {
    return true
  }
  return false
};

const receivedUsers = users => ({
  type: GET_USERS_SUCCESS,
  users,
  fetched: true
});

export function getUsers() {
  return dispatch => {
    return httpUsersCall()
      .then(checkStatus)
      .then(parseJson)
      .then(sortByNameDescending)
      .then(users => dispatch(receivedUsers(users)));
  }
}

export const fetchUsers = (dispatch, getState) => {
  if (shouldFetchUsers(getState())) {
    return dispatch(getUsers(getState()));
  }
};
