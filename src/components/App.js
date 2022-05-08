import React from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Leaderboard from "./Leaderboard";
import QuestionPage from "./QuestionPage";
import CreateQuestion from "./CreateQuestion";
import { Grid } from "semantic-ui-react";
import Layout from "./styles/Layout";
import NotFound from "./NotFound";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      < >
        <Router>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/add" component={CreateQuestion} />
            <Route path="/leaderboard" component={Leaderboard} />
            <Route
              path={`/questions/${this.props.questionId}`}
              component={QuestionPage}
            />
            <Route path={`/questions/`} component={QuestionPage} />
            <Route path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
        </Router>

      </>
    );
  }
}

function mapStateToProps({ users, authedUser, selectedQuestion }) {
  return {
    users: users,
    authedUser,
    questionId: selectedQuestion.id
  };
}
export default connect(mapStateToProps)(App);
