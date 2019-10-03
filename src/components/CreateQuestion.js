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
      <div>
        <div
          style={{
            marginTop: "35px",
            marginLeft: "50%",
            transform: "translateX(-50%)"
          }}
        >
          <h1>Create New Question</h1>
          <span>Complete the question:</span>
          {this.props.authedUser ? (
            <div style={{ textAlign: "center" }}>
              <form>
                <Form.Group>
                  <input
                    type="text"
                    required
                    placeholder="Enter Option One Text "
                    name="optionOne"
                    value={this.state.optionOne}
                    onChange={this.handleChange}
                  />
                  <div>Or</div>
                  <input
                    type="text"
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
              </form>
            </div>
          ) : (
            <Redirect to="/login" />
          )}
        </div>
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
