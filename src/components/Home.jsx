import React, { useEffect } from "react";
import HomeTabs from './home/HomeTabs'
import { connect } from "react-redux";


const Home = props => {
  useEffect(() => {
   
  });

  return <div><HomeTabs /></div>;
};


export default connect()(Home);