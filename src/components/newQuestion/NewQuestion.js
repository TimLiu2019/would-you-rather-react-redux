import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { handleAddQuestion } from "../../actions/questions";

const NewQuestion = props => {
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    props.handleAddQuestion(optionOne, optionTwo);

    setOptionOne("");
    setOptionTwo("");
    history.push("/dashboard");
  };

  return (
    <div className="new-question">
      <h4 className="center">Create New Question</h4>
      <p>Complete the question</p>
      <p className="new-question-title">Would you rather...</p>
      <input
        type="text"
        placeholder="Enter Option one text here"
        onChange={e => setOptionOne(e.target.value.trim())}
      />
      <p className="center new-question-title"> Or</p>
      <input
        type="text"
        placeholder="Enter Option two text here"
        onChange={e => setOptionTwo(e.target.value.trim())}
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
//  use mapDispatchToProps to get a function in props
//  that can dispatch a specific action
const mapDispatchToProps = dispatch => {
  return {
    handleAddQuestion: (textOne, textTwo) => {
      dispatch(handleAddQuestion(textOne, textTwo));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewQuestion);
