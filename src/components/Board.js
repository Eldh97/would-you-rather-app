import React, { Component } from "react";
import { connect } from "react-redux";
import { List, Image, Container } from "semantic-ui-react";
import { Redirect } from "react-router-dom";

class Board extends Component {
  render() {
    const { users } = this.props;
    // console.log("©", users);

    return (
      <Container>
        {this.props.authedUser ? (
          users.map(user => {
            return (
              <List verticalAlign="middle" key={user.id}>
                <Image src={user.avatarURL} size="small" />
                <List.Item>{user.name}</List.Item>
                <List.Item>Answered questions:{user.answers.length}</List.Item>
                <List.Item>Questions Asked: {user.questions.length}</List.Item>
                <List.Item>
                  Score: {user.questions.length + user.answers.length}
                </List.Item>
              </List>
            );
          })
        ) : (
          <Redirect to="/login" />
        )}
      </Container>
    );
  }
}
function mapStateToProps({ authedUser, users }) {
  // convert questions objects to an array of objects
  let mappedUsers = [];
  for (let [key, value] of Object.entries(users)) {
    console.log("☝", value);

    mappedUsers.push({
      ...value,
      answers: Object.values(value.answers)
    });
  }

  console.log("↔", users);

  return {
    users: mappedUsers,
    authedUser
  };
}
export default connect(mapStateToProps)(Board);
