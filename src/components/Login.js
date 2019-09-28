import React, { Component } from "react";
import { connect } from "react-redux";
import { MdArrowDropDown } from "react-icons/md";
import { Dropdown, Container } from "semantic-ui-react";
import LoginStyles from "./styles/LoginStyles";
import { Button } from "semantic-ui-react";
import authedUser from "../actions/authedUser";
import { ninvoke } from "q";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      isDropdown: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {}
  handleChange(e, data) {
    console.log("⏱", data.value);
    this.setState(currState => ({ currentUser: data.value }));
  }
  handleSubmit(e, data) {
    e.preventDefault();
    this.setState(currState => {
      this.props.dispatch(authedUser(this.state.currentUser));
      return {
        currentUser: null
      };
    });
    console.log(this.state.currentUser);
  }
  render() {
    const { users } = this.props;
    return (
      <LoginStyles>
        <div>
          <h1>Welocme to the Would Rather App!</h1>
          <span>Please sign in to continue</span>
        </div>
        <div>
          <img
            src="https://miro.medium.com/max/4800/1*K-4RqDC6zFrpAG31ayDDOg.png"
            alt="A logo image"
            style={{ widht: "200px", height: "100px" }}
          />
        </div>
        <form onSubmit={this.handleSubmit}>
          <Dropdown
            value={this.state.currentUser ? this.state.currentUser : ""}
            onChange={this.handleChange}
            placeholder="Select Friend"
            clearable
            selection
            options={this.props.users}
          />
          <div className="ui container">
            <Button>login</Button>
          </div>
        </form>
      </LoginStyles>
    );
  }
}

function mapStateToProps({ users }) {
  // convert users objects to an array of objects
  let mappedUsers = [];

  for (let [key, value] of Object.entries(users)) {
    mappedUsers.push({
      key,
      ...value,
      text: value.name,
      value: value.id,
      image: { avatar: true, src: value.avatarURL }
    });
  }

  return {
    users: mappedUsers
  };
}
export default connect(mapStateToProps)(Login);
