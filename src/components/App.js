import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import DashBoard from "./DashBoard";
import Nav from "./Nav";
import NewQuestion from "./newQuestion/NewQuestion";
import QuestionPage from "./QuestionPage";
import LeaderBoard from "./LeaderBoard";
import SignIn from "./SignIn";
import Logout from "./Logout";
import NotFound from './NotFound'
import ProtectedRoute from "./protectedRoute/ProtectedRoute";
import LoadingBar from "react-redux-loading";
import "../App.css";

const App = props => {
  useEffect(() => {
    props.handleInitialData();
  });

  return (
    <Router>
      <Fragment>
        <LoadingBar className="loading" />
        <div className="container">
          <Nav />
          <Route path="/" exact component={SignIn} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/logout" component={Logout} />
          <Route path="/not-found" component={NotFound}></Route>
          <ProtectedRoute path="/dashboard" component={DashBoard} />
          <ProtectedRoute path="/add" component={NewQuestion} />
          <ProtectedRoute path="/questions/:id" component={QuestionPage} />
          <ProtectedRoute path="/leaderboard" component={LeaderBoard} />
        </div>
      </Fragment>
    </Router>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    handleInitialData: () => {
      dispatch(handleInitialData());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
