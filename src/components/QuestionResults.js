import React, { Component } from "react";
import { connect } from "react-redux";

class QuestionResults extends Component {
  render() {
    const { question } = this.props;
    const { optionOne, optionTwo } = question;
    const optionOneScore = optionOne.votes.length;
    const optionTwoScore = optionTwo.votes.length;
    const totalScore = optionOne.votes.length + optionTwo.votes.length;

    const userAnswer =
      this.props.authedUser &&
      this.props.users[this.props.authedUser].answers[question.id];

    return (
      <div style={{ marginTop: "20px" }}>
        <h2>Askeed by: {question.author}</h2>
        <ul>
          {userAnswer === "optionOne" ? (
            <li style={{ fontSize: "22px" }}>
              <span>
                {optionOne.text} : {optionOneScore} of {totalScore} (Your Vote)
                (
                {totalScore > 0 &&
                  Math.floor((optionOneScore / totalScore) * 100)}
                %)
              </span>
            </li>
          ) : (
            <li style={{ fontSize: "22px" }}>
              {optionOne.text} : {optionOneScore} of {totalScore} (
              {totalScore > 0 &&
                Math.floor((optionOneScore / totalScore) * 100)}
              %)
            </li>
          )}
          {userAnswer === "optionTwo" ? (
            <li style={{ fontSize: "22px" }}>
              {optionTwo.text} : {optionTwoScore} of {totalScore} (Your vote) (
              {totalScore > 0 &&
                Math.floor((optionTwoScore / totalScore) * 100)}
              %)
            </li>
          ) : (
            <li style={{ fontSize: "22px" }}>
              {optionTwo.text} : {optionTwoScore} of {totalScore} (
              {totalScore > 0 &&
                Math.floor((optionTwoScore / totalScore) * 100)}
              %)
            </li>
          )}
        </ul>
      </div>
    );
  }
}
function mapStateToProps({ questions, authedUser, users }, { id }) {
  const question = questions[id];
  return {
    question,
    authedUser,
    users
  };
}

export default connect(mapStateToProps)(QuestionResults);
