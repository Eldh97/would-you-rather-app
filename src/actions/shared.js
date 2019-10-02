import { receiveUsers } from "../actions/users";

export function handleInitialData() {
  return dispatch => {
    dispatch(receiveUsers());
  };
}
