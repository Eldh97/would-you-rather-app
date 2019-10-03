import React, { Component } from "react";
import { connect } from "react-redux";
import { Dropdown } from "semantic-ui-react";
import LoginStyles from "./styles/LoginStyles";
import { Button } from "semantic-ui-react";
import authedUser from "../actions/authedUser";
import { Redirect } from "react-router-dom";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      toHome: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e, data) {
    this.setState(currState => ({ currentUser: data.value }));
  }
  handleSubmit(e, data) {
    e.preventDefault();

    this.setState(currState => {
      this.props.dispatch(authedUser(this.state.currentUser));
      return {
        currentUser: null,
        toHome: true
      };
    });
  }
  render() {
    const { usersIds, users } = this.props;
    const usersList = usersIds.map(id => ({
      id: users[id],
      name: users[id].name,
      answers: users[id].questions,
      questions: users[id].answers,
      text: users[id].name,
      value: users[id].id,
      image: { avatar: true, src: users[id].avatarURL }
    }));

    if (this.state.toHome) {
      return <Redirect to="/" />;
    }

    return (
      <LoginStyles>
        <div>
          <h1>Welocme to the Would Rather App!</h1>
          <span>Please sign in to continue</span>
        </div>
        <div>
          <img
            src="https://miro.medium.com/max/4800/1*K-4RqDC6zFrpAG31ayDDOg.png"
            alt="A logo"
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
          <div>
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
