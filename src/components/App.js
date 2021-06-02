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
import "../App.css";

const App = props => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  });

  return (
    <Router>
      <Fragment>
        <div className="container">
          <Nav />
          <Route path="/" exact component={DashBoard} />
          <Route path="/signin" component={SignIn} />
          <Route path="/logout" component={Logout} />
          <Route path="/add" component={NewQuestion} />
          <Route path="/questions/:id" component={QuestionPage} />
          <Route path="/leaderboard" component={LeaderBoard} />
        </div>
      </Fragment>
    </Router>
  );
};

export default connect()(App);
