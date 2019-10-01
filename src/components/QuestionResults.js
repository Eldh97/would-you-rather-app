import React, { Component } from "react";
import { connect } from "react-redux";

class QuestionResults extends Component {
  render() {
    const { question } = this.props;
    console.log("🍺", question);
    const { optionOne, optionTwo } = question;
    const optionOneScore = optionOne.votes.length
    const optionTwoScore = optionTwo.votes.length

    return <ul>

        <li>{optionOne.text}  : {optionOneScore}</li>
        <li>{optionTwo.text}  : {optionTwoScore}</li>

    </ul>;
  }
}
function mapStateToProps({ questions, authedUser }, { id }) {
  const question = questions[id];
  return {
    question,
    authedUser
  };
}

export default connect(mapStateToProps)(QuestionResults);
