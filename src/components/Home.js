import React, { Component } from "react";
import { Container, Menu, Button, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import recieveQuestions from "../actions/questions";
import Question from "./Question";
import { Redirect } from "react-router-dom";

class Home extends Component {
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
  componentDidUpdate() {}

  render() {
    const { authedUser, users } = this.props;
    // const user = this.props.users[authedUser];
    // let mappedAnswers = [];
    // console.log('qq', user && user.answers);

    // // for (let [key, value] of Object.entries(user)) {
    // //   mappedAnswers.push({
    // //     key,
    // //     ...value
    // //   });
    // // }
    // // console.log(mappedAnswers);

    return (
      <>
        {this.props.authedUser ? (
          <>
            {" "}
            <Container textAlign="center">
              <Menu fluid widths={2} style={{ width: "50%" }}>
                <Menu.Item
                  active={this.state.isAnswersOpen}
                  name="Answered Questuions"
                  onClick={this.handleOpenAnswers}
                />
                <Menu.Item
                  active={this.state.isQuestionsOpen}
                  name="Unansewred Questions"
                  onClick={this.handleOpenQuestions}
                />
              </Menu>
            </Container>
            <Container>
              {this.state.isAnswersOpen
                ? this.props.questions.map((q, i, array) => {
                    console.log(q);
                    if (
                      q.optionOne.votes.includes(this.props.authedUser) ||
                      q.optionTwo.votes.includes(this.props.authedUser)
                    ) {
                      return <Question data={q}></Question>;
                    }
                  })
                : this.props.questions.map((q, i, array) => {
                    console.log(q);
                    if (
                      !(
                        q.optionOne.votes.includes(this.props.authedUser) ||
                        q.optionTwo.votes.includes(this.props.authedUser)
                      )
                    ) {
                      return <Question data={q}></Question>;
                    }
                  })}
            </Container>
          </>
        ) : (
          <Redirect to="/login" />
        )}
      </>
    );
  }
}
function mapStateToProps({ questions, authedUser, users }) {
  // convert questions objects to an array of objects
  let mappedQuestions = [];

  for (let [key, value] of Object.entries(questions)) {
    mappedQuestions.push({
      key,
      ...value
    });
  }

  console.log(">>", users);
  return {
    authedUser,
    questions: mappedQuestions,
    users
  };
}

export default connect(mapStateToProps)(Home);
