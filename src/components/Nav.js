import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import MenuStyles from "./styles/MenuStyles";
import NavStyles from "./styles/NavStyles";
import authedUser from "../actions/authedUser";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin() {
    
  }
  
  handleLogout() {
    this.props.dispatch(authedUser(null));
  }
  render() {
    const { user } = this.props;
    return (
      <NavStyles>
        <MenuStyles>
          <li>
            <NavLink activeClassName="active" exact to="/">Home</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/new-question">New Question</NavLink>
          </li>
          <li>
            <NavLink to="/board">Loader Board</NavLink>
          </li>
          <li>Hello {this.props.user}</li>
          {user ? (
            <li onClick={this.handleLogout}>Logout</li>
          ): (
            <li onClick={this.handleLogin}>Login</li>
          )}
        </MenuStyles>
      </NavStyles>
    );
  }
}
function mapStateToProps({ authedUser }) {
  console.log("Ⓜ", authedUser);

  return {
    user: authedUser
  };
}
export default connect(mapStateToProps)(Nav);
