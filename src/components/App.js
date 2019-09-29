import React from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Nav from "./Nav";
import Login from "./Login";
import Home from "./Home";
import Board from './Board'
import QuestionPage from "./QuestionPage";
import CreateQuestion from './CreateQuestion'
const Protected = props => <div>Protected</div>;

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      this.props.authedUser === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {


    return (
      <>
        <Router>
          <Nav />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/create-question" component ={CreateQuestion}/>
          <Route path="/board" component={Board} />
          <Route exact path={`/questions/${this.props.question.id}`} component={QuestionPage} />
          {/* <PrivateRoute path="/" component={Protected} /> */}
          
        </Router>
      </>
    );
  }
}

function mapStateToProps({ users, authedUser, selectedQuestion }) {
  console.log('⏰', selectedQuestion);
  
  return {
    users: users,
    authedUser,
    question: selectedQuestion
  };
}
export default connect(mapStateToProps)(App);
