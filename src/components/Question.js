import React, { Component } from "react";
import { connect } from "react-redux";
import { Item } from "semantic-ui-react";
class Question extends Component {
  render() {
    return (
      <Item>
        <Item.Image size="tiny" src="/images/wireframe/image.png" />
        <Item.Content>
        
        </Item.Content>
        {this.props.question.author}
      </Item>
    );
  }
}

function mapStateToProps({ question }) {}

export default connect(mapStateToProps)(Question);
