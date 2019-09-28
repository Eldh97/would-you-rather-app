import React from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Nav from "./Nav";
import Login from "./Login";
import Home from './Home'
const Protected = props => <div>Protected</div>;
class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {

    const PrivateRoute = ({ component: Component, ...rest }) => (
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

    return (
      <>
        <Router>
          <Nav />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home}/>
          {/* <Route path="/board" component={Protected} /> */}
          <PrivateRoute path="/" component={Protected} />
        </Router>
      </>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    users: users,
    authedUser
  };
}
export default connect(mapStateToProps)(App);
