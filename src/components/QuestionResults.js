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
        <h1>Asked by: {question.author}</h1>
        <h2>Results:</h2>
        <ul>
          {userAnswer === "optionOne" ? (
            <li style={{ fontSize: "22px" }}>
              <span>
                Would you rather {optionOne.text} ? : {optionOneScore} of {totalScore} votes (Your Vote)
                (
                {totalScore > 0 &&
                  Math.floor((optionOneScore / totalScore) * 100)}
                %)
              </span>
            </li>
          ) : (
            <li style={{ fontSize: "22px" }}>
              Would you rather {optionOne.text} ? : {optionOneScore} of {totalScore} votes (
              {totalScore > 0 &&
                Math.floor((optionOneScore / totalScore) * 100)}
              %)
            </li>
          )}
          {userAnswer === "optionTwo" ? (
            <li style={{ fontSize: "22px" }}>
             Would you rather {optionTwo.text} ? : {optionTwoScore} of {totalScore} votes (Your vote) (
              {totalScore > 0 &&
                Math.floor((optionTwoScore / totalScore) * 100)}
              %)
            </li>
          ) : (
            <li style={{ fontSize: "22px" }}>
              Would you rather {optionTwo.text} ? : {optionTwoScore} of {totalScore} votes (
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
