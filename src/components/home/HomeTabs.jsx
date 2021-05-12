import React, { useEffect } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import AnsweredList from "./AnsweredList";
import UnansweredList from "./UnansweredList";
const HomeTabs = props => {
  useEffect(() => {});

  return (
    <div className="tab-container">
      <Tabs defaultActiveKey="unanswered"  id="noanim-tab-example">
        <Tab eventKey="unanswered" title="unanswered">
          <UnansweredList />
        </Tab>
        <Tab eventKey="answered" title="answered">
          <AnsweredList />
        </Tab>
      </Tabs>
    </div>
  );
};
export default HomeTabs;
