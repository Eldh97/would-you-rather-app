import React, { Component } from "react";
import { Container, Menu, Button, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import recieveQuestions from "../actions/questions";
import Question from './Question'

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
    return (
      <>
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
          {/* {this.props.authedUser && (

          )} */}

          {true && (
            this.props.questions.map((q, i, array) => {
              console.log(q);                
              if(q.optionOne.votes.includes(this.props.authedUser) || q.optionTwo.votes.includes(this.props.authedUser)){
                return <Question>{q.optionOne.text}</Question>
              }
            })
          )}
        </Container>
      </>
    );
  }
}
function mapStateToProps({ questions, authedUser }) {
  // convert questions objects to an array of objects
  let mappedQuestions = [];

  for (let [key, value] of Object.entries(questions)) {
    mappedQuestions.push({
      key,
      ...value
    });
  }
  console.log(">>", mappedQuestions);
  return {
    questions: mappedQuestions,
    authedUser
  };
}

export default connect(mapStateToProps)(Home);
