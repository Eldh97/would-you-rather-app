import React, { Component } from "react";
import { connect } from "react-redux";
import { List, Image, Container } from "semantic-ui-react";

class User extends Component {
  render() {
    const { user } = this.props;
    const {id, name, avatarURL, answers, questions } = user;
    const questionsScore = Object.keys(questions).length;
    const answersScore = Object.keys(answers).length;
    const totalScore = questionsScore + answersScore;

    return (
      <div>
        <List verticalAlign="middle" key={id} totalScore={totalScore}>
          <Image src={avatarURL} size="small" />
          <List.Item>{name}</List.Item>
          <List.Item>Answered questions:{answersScore}</List.Item>
          <List.Item>Questions Asked: {questionsScore}</List.Item>
          <List.Item>Score: {totalScore}</List.Item>
        </List>
      </div>
    );
  }
}

function mapStateToProps({ users }, { id }) {
  console.log("🏃", id);

  const user = users[id];
  return {
    user
  };
}
export default connect(mapStateToProps)(User);
