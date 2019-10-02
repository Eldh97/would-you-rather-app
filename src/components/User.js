import React, { Component } from "react";
import { connect } from "react-redux";
import { Item } from "semantic-ui-react";

class User extends Component {
  render() {
    const { user } = this.props;
    const { name, avatarURL, answers, questions } = user;
    const questionsScore = Object.keys(questions).length;
    const answersScore = Object.keys(answers).length;
    const totalScore = questionsScore + answersScore;

    return (
      <Item.Group>
        <Item>
          <Item.Image size="tiny" src={avatarURL} />
          <Item.Header>{name}</Item.Header>
          <Item.Content>
            <Item.Description>
              <div>Answered questions:{answersScore}</div>
              <div>Questions Asked: {questionsScore}</div>
              <div>Score: {totalScore}</div>
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
    );
  }
}

function mapStateToProps({ users }, { id }) {
  const user = users[id];
  return {
    user
  };
}
export default connect(mapStateToProps)(User);
