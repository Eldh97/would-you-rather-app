import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import selectedQuestion from "../actions/selectedQuestion";
import QuestionStyles from "./styles/QuestionStyles";
class Question extends Component {
  render() {
    const { question, avatar } = this.props;
    const { id, author, optionOne } = question;
    return (
      <QuestionStyles>
        <h4>{author} Asks:</h4>
        <div className="content">
          <div className="image__container">
            <img src={avatar} alt="user"/>
          </div>
          <div className="description">
            <h3>Would you rather...</h3>
            <p>...{optionOne.text}...</p>
            <Link
              to={`/questions/${id}`}
              onClick={() => {
                this.props.dispatch(selectedQuestion(question));
              }}
              className="link"
            >
              View Pool
            </Link>
          </div>
        </div>
      </QuestionStyles>
    );
  }
}

function mapStateToProps({ authedUser, users }, { question }) {
  const avatar = users[question.author].avatarURL;
  return {
    authedUser,
    users,
    avatar,
    question
  };
}

export default withRouter(connect(mapStateToProps)(Question));
