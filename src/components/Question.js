import React, { Component } from "react";
import { connect } from "react-redux";
import { Item, Button } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import selectedQuestion from "../actions/selectedQuestion";
class Question extends Component {
  render() {
    const { question, avatar } = this.props;
    console.log("♉", this.props);

    const { id, author, timestamp, optionOne, optionTwo } = question;
    return (
      <Item>
        <Item.Image size="tiny" src={avatar} />
        <Item.Content>
          <Item.Header>Would you rather...</Item.Header>
          <Item.Description> {optionOne.text}</Item.Description>
          <Button
            onClick={() => this.props.dispatch(selectedQuestion(question))}
          >
            <Link to={`/questions/${id}`}>View Pool</Link>
          </Button>
        </Item.Content>
      </Item>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }, { id }) {
  const question = questions[id];
  const avatar = users[question.auther];
  return {
    authedUser,
    question,
    users,
    avatar
  };
}

export default withRouter(connect(mapStateToProps)(Question));
