import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import Home from "./Home";
import NewQuestion from "./newQuestion/NewQuestion";
import "../App.css";

const App = props => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  });

  return (
    <Router>
      <Fragment>
        <div className="container">
          <Route path="/" exact component={Home} />
          <Route path="/new" component={NewQuestion} />
        </div>
      </Fragment>
    </Router>
  );
};

export default connect()(App);
