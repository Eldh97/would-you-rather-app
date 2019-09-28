import React, { Component } from "react";
import { Container, Menu, Button, Card, Image } from "semantic-ui-react";

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
  componentDidUpdate(){
    
  }

  render() {
    return (
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
    );
  }
}
function mapStateToProps({ questions }) {
  return {
    questions
  };
}
export default(Home);
