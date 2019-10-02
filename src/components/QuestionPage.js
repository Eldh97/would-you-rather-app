import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import QuestionResults from "./QuestionResults";
import { handleAddAnswer, recieveQuestions } from "../actions/questions";

class QuestionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      option: "",
      isSubmit: false
    };
    this.handleVote = this.handleVote.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleVote(e) {
    e.preventDefault();
    this.props.dispatch(
      handleAddAnswer({
        authedUser: this.props.authedUser,
        qid: this.props.selectedQuestion.id,
        answer: this.state.option
      })
    );
    this.props.dispatch(recieveQuestions());
    this.setState({ isSubmit: true });
  }
  handleChange(e) {
    const value = e.target.value;
    this.setState(currState => {
      if (this.state.option === "optionOne") {
        return {
          option: "optionOne",
          value: value
        };
      }
      return {
        option: "optionTwo",
        value: value
      };
    });
  }
  render() {
    const userAvatar = this.props.users[this.props.selectedQuestion.author]
      .avatarURL;

    if (this.state.isSubmit) {
      return <QuestionResults id={this.props.selectedQuestion.id} />;
    }
    if (
      this.props.authedUser &&
      this.props.selectedQuestion.id in
        this.props.users[this.props.authedUser].answers
    ) {
      return <QuestionResults id={this.props.selectedQuestion.id} />;
    }

    return (
      <div style={{ marginTop: "20px" }}>
        {this.props.authedUser ? (
          <div>
            <img
              src={userAvatar}
              alt="user"
              style={{ width: "80px", height: "80px" }}
            />
            <form onSubmit={this.handleVote}>
              <h2>Would you rather:</h2>

              <div>
                <label
                  htmlFor={this.props.selectedQuestion.optionOne.text}
                  style={{ marginRight: "9px" }}
                >
                  {this.props.selectedQuestion.optionOne.text}
                </label>
                <input
                  type="radio"
                  name={this.props.selectedQuestion.optionOne.text}
                  onChange={this.handleChange}
                  value={this.props.selectedQuestion.optionOne.text}
                  checked={
                    this.props.selectedQuestion.optionOne.text ===
                    this.state.value
                  }
                />
              </div>

              <div>
                <label
                  htmlFor={this.props.selectedQuestion.optionTwo.text}
                  style={{ marginRight: "9px" }}
                >
                  {this.props.selectedQuestion.optionTwo.text}
                </label>
                <input
                  type="radio"
                  name={this.props.selectedQuestion.optionTwo.text}
                  onChange={this.handleChange}
                  value={this.props.selectedQuestion.optionTwo.text}
                  checked={
                    this.props.selectedQuestion.optionTwo.text ===
                    this.state.value
                  }
                />
              </div>
              <div style={{ textAlign: "center" }}>
                <button>Submit</button>
              </div>
            </form>
          </div>
        ) : (
          <Redirect to="/login" />
        )}
      </div>
    );
  }
}
function mapStateToProps({ selectedQuestion, authedUser, questions, users }) {
  return {
    selectedQuestion,
    authedUser,
    questions,
    users
  };
}
export default connect(mapStateToProps)(QuestionPage);
