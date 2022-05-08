import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import selectedQuestion from "../actions/selectedQuestion";
import QuestionStyles from "./styles/QuestionStyles";
import { RiExternalLinkFill } from "react-icons/ri"
class Question extends Component {
  render() {
    const { question, avatar } = this.props;
    const { id, author, optionOne } = question;
    return (
      <div className="rounded-md text-gray-900 mt-4 p-10 shadow-md bg-white">
        <div className="content flex rounded-full">
          <div className="mr-4" >
            <img src={avatar} alt="user" className="w-32 h-32 object-cover rounded-full" />
          </div>
          <div className="description text-xl">
            <h4 className="font-semibold mb-2">{author} Asks:</h4>

            <h3 className="font-medium">Would you rather</h3>
            <p className="font-bold">{optionOne.text} ?</p>
            <div className="mt-10">
              <Link
                to={`/questions/${id}`}
                onClick={() => {
                  this.props.dispatch(selectedQuestion(question));
                }}
                className="p-2 pr-4 pl-4  items-center hover:text-gray-200 cursor-pointer
                 bg-green-600 inline-flex font-semibold text-white mt-4 rounded-md"
              >
                <RiExternalLinkFill className="text-xl mr-2"/>
                <span>View Pool</span>

              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users }, { question }) {
  const avatar = users[question.author].avatarURL;
  return {
    authedUser,
    users,
    avatar,
    question
  };
}

export default withRouter(connect(mapStateToProps)(Question));
