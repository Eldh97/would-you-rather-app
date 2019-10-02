import {_getUsers} from '../utils/_DATA'
export const RECEIVE_USERS = "RECEIVE_USERS";

export function receiveUsers() {
  return dispatch => {
    return _getUsers().then(users => {      
      dispatch({
        type: RECEIVE_USERS,
        users
      });
    });
  };
}
