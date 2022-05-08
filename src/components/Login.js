import React, { Component } from "react";
import { connect } from "react-redux";
import { Dropdown } from "semantic-ui-react";
import LoginStyles from "./styles/LoginStyles";
import { Button } from "semantic-ui-react";
import authedUser from "../actions/authedUser";
import { Redirect } from "react-router-dom";
import Illustration from "./Ilustration";
// import loginBackground from "../../assets/images/login.svg";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      toHome: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e, data) {
    this.setState(currState => ({ currentUser: data.value }));
  }
  handleSubmit(e, data) {
    e.preventDefault();

    this.setState(currState => {
      this.props.dispatch(authedUser(this.state.currentUser));
      return {
        currentUser: null,
        toHome: true
      };
    });
  }
  render() {
    const { usersIds, users } = this.props;
    const usersList = usersIds.map(id => ({
      id: users[id],
      name: users[id].name,
      answers: users[id].questions,
      questions: users[id].answers,
      text: users[id].name,
      value: users[id].id,
      image: { avatar: true, src: users[id].avatarURL }
    }));

    if (this.state.toHome) {
      return <Redirect to="/" />;
    }

    return (

      <div>
        <div
          className="flex flex-col xl:flex-row 
            xl:pl-44  p-10 pt-16 xl:pr-36  justify-start xl:justify-between min-h-screen  
             items-center xl:items-start  from-green-600 to-green-500 bg-gradient-to-l
                
            "
        >
          <div className="flex flex-col lg:block  justify-center items-center w-full lg:w-auto">
            <h2 className="text-base mb-2">Welcome Back 👋</h2>
            <h1 className="text-6xl font-semibold mb-10 ">Login</h1>
            {/* <Form /> */}
            <LoginStyles>

              <div>

              </div>
              <form onSubmit={this.handleSubmit} className="text-2xl">
                <Dropdown
                  value={this.state.currentUser ? this.state.currentUser : ""}
                  onChange={this.handleChange}
                  placeholder="Select Friend"
                  clearable
                  selection
                  options={usersList}
                />
                <div >
                  <button className="bg-white mt-4 pr-4 pl-4 p-2 
                  text-gray-900 rounded-md w-full cursor-pointer font-semibold">Sign in</button>
                </div>
              </form>
            </LoginStyles>
          </div>
          <div className=" mt-20 xl:mt-0 text-center flex justify-center ">
            {/* <Illustration src={loginBackground} /> */}
          </div>
        </div>

        {/* <Footer /> */}
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    usersIds: Object.keys(users),
    users
  };
}
export default connect(mapStateToProps)(Login);
