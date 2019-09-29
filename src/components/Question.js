import React, { Component } from "react";
import { connect } from "react-redux";
import { Item, Button } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import selectedQuestion from "../actions/selectedQuestion";
class Question extends Component {
  render() {
    const { data, users } = this.props;
    const user = users[data.author];
    console.log("⌛", user);
    return (
      <Item>
        <Item.Image size="tiny" src={user.avatarURL} />
        <Item.Content>
          <Item.Header>Would you rather...</Item.Header>
          <Item.Description> {data.optionOne.text}</Item.Description>
          {/* <Item.Extra>More</Item.Extra> */}
          <Button onClick={() => this.props.dispatch(selectedQuestion(data))}>
            <Link to={`/questions/${data.id}`}>View Pool</Link>
          </Button>
        </Item.Content>
      </Item>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }) {
  return {
    questions,
    authedUser,
    users
  };
}

export default withRouter(connect(mapStateToProps)(Question));
