import React, { Component } from "react";
import { connect } from "react-redux";
import { Item, Button} from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";

class Question extends Component {
  render() {
    return (
      <Item>
        <Item.Image size="tiny" src="/images/wireframe/image.png" />
        <Item.Content>
          <Item.Header>Would you rather...</Item.Header>
          <Item.Description> {this.props.children}</Item.Description>
          {/* <Item.Extra>More</Item.Extra> */}
          <Button><Link to={`/questions/${this.props.authedUser}`}>View Pool</Link></Button>
        </Item.Content>
      </Item>
    );
  }
}

function mapStateToProps({ questions, authedUser}) {
  return {
    questions,
    authedUser
  }
}

export default withRouter(connect(mapStateToProps)(Question));
