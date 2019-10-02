import React, { Component } from "react";
import { Form, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleAddQuestion } from "../actions/questions";

class CreateQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionOne: "",
      optionTwo: "",
      isSubmit: false,
      answer: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e, { name, value }) {
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { optionOne, optionTwo } = this.state;

    this.props.dispatch(
      handleAddQuestion({
        author: this.props.authedUser,
        optionOneText: optionOne,
        optionTwoText: optionTwo
      })
    );
    this.setState(currState => ({
      isSubmit: true
    }));
  }
  render() {
    if (this.state.isSubmit && this.props.authedUser) {
      return <Redirect to="/" />;
    }
    return (
      <div style={{ margin: "35px" }}>
        <Grid centered columns={2}>
          <Grid.Column textAlign="center">
            <h1>Create New Question</h1>
            <span>Complete the question:</span>
            {this.props.authedUser ? (
              <Form>
                <Form.Group>
                  <Form.Input
                    required
                    placeholder="Enter Option One Text "
                    name="optionOne"
                    value={this.state.optionOne}
                    onChange={this.handleChange}
                  />
                  <div>Or</div>
                  <Form.Input
                    required
                    placeholder="Enter Option Two Text "
                    name="optionTwo"
                    value={this.state.optionTwo}
                    onChange={this.handleChange}
                  />
                  <button type="submit" onClick={this.handleSubmit}>
                    Submit
                  </button>
                </Form.Group>
              </Form>
            ) : (
              <Redirect to="/login" />
            )}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}
export default connect(mapStateToProps)(CreateQuestion);
