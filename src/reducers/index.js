import { combineReducers } from "redux";
import authedUser from "./authedUser";
import users from "./users";
export default combineReducers({
  authedUser,
  users
});
// {this.state.isDropdown && (
//     <ul
//       style={{
//         position: "relative",
//         bottom: "1px",
//         left: "0px",
//         height: "100px",
//         backgroundColor: "pink"
//       }}
//     >
//       {Object.keys(this.props.users).map(function(key, index) {
//         return <li key={key}>{key}</li>;
//       })}
//     </ul>
//   )}