import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from 'react-router-dom'
import Button from "react-bootstrap/Button";
import { handleAddQuestion } from "../../actions/questions";

const NewQuestion = props => {
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const history = useHistory();
  useEffect(() => {});

  const handleSubmit = e => {
    e.preventDefault();
    const { dispatch } = props;
    dispatch(handleAddQuestion(optionOne, optionTwo));

    console.log("option one", optionOne);
    console.log("option one", optionTwo);
    setOptionOne("");
    setOptionTwo("");
    history.push('/');
  };

  return (
    <div className="new-question">
      <h4 className="center">Create New Question</h4>
      <p>Complete the question</p>
      <p className="new-question-title">Would you rather...</p>
      <input
        type="text"
        placeholder="Enter Option one text here"
        onChange={e => setOptionOne(e.target.value)}
      />
      <p className="center new-question-title"> Or</p>
      <input
        type="text"
        placeholder="Enter Option two text here"
        onChange={e => setOptionTwo(e.target.value)}
      />
      <Button
        variant="outline-primary"
        onClick={handleSubmit}
        disabled={optionOne === "" || optionTwo === ""}
      >
        Submit
      </Button>
    </div>
  );
};

export default connect()(NewQuestion);
