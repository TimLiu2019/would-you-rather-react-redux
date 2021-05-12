import React, { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Home from './Home'
import '../App.css'

const App = props => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  });

  return <div><Home/></div>;
};


export default connect()(App);
