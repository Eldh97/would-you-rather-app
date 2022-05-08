import React, { Component } from "react";
import { Container, Menu } from "semantic-ui-react";
import { connect } from "react-redux";
import { recieveQuestions } from "../actions/questions";
import Question from "./Question";
import { Redirect } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import Main from "./Main";
import FooterDashboard from "./FooterDashboard";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isQuestionsOpen: false,
      isAnswersOpen: true
    };
    this.handleOpenAnswers = this.handleOpenAnswers.bind(this);
    this.handleOpenQuestions = this.handleOpenQuestions.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(recieveQuestions());
  }
  handleOpenQuestions() {
    this.setState(currState => ({
      isQuestionsOpen: true,
      isAnswersOpen: false
    }));
  }
  handleOpenAnswers() {
    this.setState(currState => ({
      isAnswersOpen: true,
      isQuestionsOpen: false
    }));
  }
  componentDidUpdate() { }

  render() {
    const { authedUser, questionsIds, questions } = this.props;

    return (
      <div>

        <Sidebar />
        <Main>
          {authedUser ? (
            <>
              <hgroup className="flex text-left mb-10  items-center  justify-center  text-gray-900 font-bold">
                <div className="w-1/2">
                  <h2 className="text-base mb-2">Welcome Back 👋</h2>
                  <h1 className="text-6xl font-extrabold mb-10 ">{authedUser}</h1>
                </div>
              </hgroup>
              <Container textAlign="center">
                <Menu fluid widths={2} style={{ width: "50%" }}>
                  <Menu.Item
                    active={this.state.isAnswersOpen}
                    name="Answered Questions "
                    onClick={this.handleOpenAnswers}
                  />
                  <Menu.Item
                    active={this.state.isQuestionsOpen}
                    name="Unanswered Questions"
                    onClick={this.handleOpenQuestions}
                  />
                </Menu>
              </Container>
              <Container>
                {this.state.isAnswersOpen
                  ? questionsIds.map(q => {
                    const question = questions[q];
                    if (
                      question.optionOne.votes.includes(authedUser) ||
                      question.optionTwo.votes.includes(authedUser)
                    ) {
                      return <Question key={question.id} question={question} />;
                    }
                    return "";
                  })
                  : questionsIds.map(q => {
                    const question = questions[q];
                    if (
                      !(
                        question.optionOne.votes.includes(authedUser) ||
                        question.optionTwo.votes.includes(authedUser)
                      )
                    ) {
                      return <Question key={question.id} question={question} />;
                    }
                    return "";
                  })}
              </Container>
            </>
          ) : (
            <Redirect to="/login" />
          )}
          <FooterDashboard />
        </Main>
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser }) {
  return {
    questionsIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
    questions,
    authedUser
  };
}

export default connect(mapStateToProps)(Dashboard);
