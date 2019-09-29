import React, { Component } from "react";
import { Form, Button, Container } from "semantic-ui-react";
import { connect } from "react-redux";
import { _saveQuestion } from "../utils/_DATA";
import {handleInitialData} from '../actions/shared'
import { Redirect } from "react-router-dom";

class CreateQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionOne: "",
      optionTwo: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(e, { name, value }) {
    //   console.log(value);
      
    this.setState({ [name]: value });
  }
  //   optionOneText, optionTwoText, author
  handleSubmit(e) {
    e.preventDefault();
    const { optionOne, optionTwo } = this.state;
    _saveQuestion({
      author: this.props.authedUser,
      optionOneText: optionOne,
      optionTwoText: optionTwo
    }).then(question => {
      this.props.dispatch(handleInitialData())
    });
  }
  render() {
    return (
      <div>
      {this.props.authedUser ? (  <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              placeholder="Option two"
              name="optionOne"
              value={this.state.optionOne}
              onChange={this.handleChange}
            />
            <Form.Input
              placeholder="Option two"
              name="optionTwo"
              value={this.state.optionTwo}
              onChange={this.handleChange}
            />
            <Form.Button content="Submit" onSubmit={this.handleSubmit} />
          </Form.Group>
        </Form>):(
          <Redirect to="/login"/>
        )}
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
    console.log('☂', authedUser);
    
  return {
    authedUser
  };
}
export default connect(mapStateToProps)(CreateQuestion);
