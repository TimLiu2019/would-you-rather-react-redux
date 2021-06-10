import React, { useEffect } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import AnsweredList from "./home/AnsweredList";
import UnansweredList from "./home/UnansweredList";
const DashBoard = props => {
  

  return (
    <div className="tab-container">
      <Tabs defaultActiveKey="unanswered"  id="noanim-tab-example">
        <Tab eventKey="unanswered" title="Unanswered">
          <UnansweredList />
        </Tab>
        <Tab eventKey="answered" title="Answered">
          <AnsweredList />
        </Tab>
      </Tabs>
    </div>
  );
};
export default DashBoard;
