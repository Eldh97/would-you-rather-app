import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import MenuStyles from "./styles/MenuStyles";
import NavStyles from "./styles/NavStyles";
import authedUser from "../actions/authedUser";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "home"
    };
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleLogout() {
    this.props.dispatch(authedUser(null));
  }

  render() {
    return (
      <NavStyles>
        <MenuStyles>
          <li>
            <NavLink activeClassName="active" exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/create-question">
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to="/board">Loader Board</NavLink>
          </li>
          {this.props.authedUser && (
            <>
              <li>Hello {this.props.authedUser}</li>
              <li style={{ cursor: "pointer" }} onClick={this.handleLogout}>
                Logout
              </li>
            </>
          )}
        </MenuStyles>
      </NavStyles>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}
export default connect(mapStateToProps)(Nav);
