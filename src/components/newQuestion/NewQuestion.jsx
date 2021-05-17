import React, { useEffect } from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";

const NewQuestion = props => {
  useEffect(() => {});

  return (
    <div className="new-question">
      <h4 className="center">Create New Question</h4>
      <p>Complete the question</p>
      <p className='new-question-title'>Would you rather...</p>
      <input type="text" placeholder="Enter Option one text here" />
      <p className="center new-question-title"> Or</p>
      <input type="text" placeholder="Enter Option two text here" />
      <Button variant="outline-primary" >
        Submit
      </Button>
    </div>
  );
};

export default connect()(NewQuestion);
