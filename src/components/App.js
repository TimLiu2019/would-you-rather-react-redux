import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import Home from "./Home";
import Nav from "./Nav";
import NewQuestion from "./newQuestion/NewQuestion";
import Question from "./Question";
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
          <Route path="/" exact component={Home} />
          <Route path="/add" component={NewQuestion} />
          <Route path="/questions/:id" component={Question} />
        </div>
      </Fragment>
    </Router>
  );
};

export default connect()(App);
