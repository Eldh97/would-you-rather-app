import { combineReducers } from "redux";
import authedUser from "./authedUser";
import users from "./users";
import questions from "./questions";
import selectedQuestion from "./selectedQuestion";

export default combineReducers({
  authedUser,
  users,
  questions,
  selectedQuestion
});
