import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Radio, Container, Button, Divider } from "semantic-ui-react";
import { _saveQuestionAnswer } from "../utils/_DATA";
import { handleInitialData } from "../actions/shared";
import { Redirect } from "react-router-dom";
import QuestionResults from "./QuestionResults";

class QuestionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: "",
      isSubmit: false
    };
    this.handleVote = this.handleVote.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleVote(e) {
    e.preventDefault();
    _saveQuestionAnswer({
      authedUser: this.props.authedUser,
      qid: this.props.selectedQuestion.id,
      answer: this.state.option
    }).then(() => {
      this.props.dispatch(handleInitialData());
      this.setState({ isSubmit: true });
    });
  }
  handleChange(e, { value }) {
    this.setState(currState => {
      if (value === this.props.selectedQuestion.optionOne.text) {
        return {
          option: "optionOne"
        };
      }
      return {
        option: "optionTwo"
      };
    });
  }
  render() {
    console.log(
      "@",
      this.props.selectedQuestion.id in
        this.props.users[this.props.authedUser].answers
    );

    if (this.state.isSubmit) {
      return <QuestionResults id={this.props.selectedQuestion.id} />;
    }
    if (
      this.props.selectedQuestion.id in
      this.props.users[this.props.authedUser].answers
    ) {
      return <QuestionResults id={this.props.selectedQuestion.id} />;
    }
    return (
      <div>
        {this.props.authedUser ? (
          <Container>
            <Form onSubmit={this.handleVote}>
              <Form.Field>
                Would you rather: <b>{this.state.value}</b>
              </Form.Field>
              <Form.Field>
                <Radio
                  label={this.props.selectedQuestion.optionOne.text}
                  name="radioGroup"
                  value={this.props.selectedQuestion.optionOne.text}
                  checked={
                    this.state.value ===
                    this.props.selectedQuestion.optionOne.text
                  }
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Radio
                  label={this.props.selectedQuestion.optionTwo.text}
                  name="radioGroup"
                  value={this.props.selectedQuestion.optionTwo.text}
                  checked={
                    this.state.value ===
                    this.props.selectedQuestion.optionTwo.text
                  }
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Button>Vote</Button>
            </Form>
          </Container>
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
