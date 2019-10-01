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
      currentUser: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {}
  handleChange(e, data) {
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
  }
  render() {
    const { usersIds, users } = this.props;
    const usersList = usersIds.map(id => ({
      ...users[id],
      text: users[id].name,
      value: users[id].id,
      image: { avatar: true, src: users[id].avatarURL }
    }));
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
            options={usersList}
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
  return {
    usersIds: Object.keys(users),
    users
  };
}
export default connect(mapStateToProps)(Login);
