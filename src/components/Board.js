import React, { Component } from "react";
import { connect } from "react-redux";
import { List, Image, Container } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import User from "./User";
class Board extends Component {
  render() {
    const { usersIds } = this.props;

    return (
      <Container>
        {this.props.authedUser ? (
          usersIds.map(id => {
            console.log(<User id={id} key={id} />);

            return <User id={id} key={id} />;
          })
        ) : (
          <Redirect to="/login" />
        )}
      </Container>
    );
  }
}
function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    usersIds: Object.keys(users)
  };
}
export default connect(mapStateToProps)(Board);
