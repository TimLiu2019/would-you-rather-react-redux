import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import ProgressBar from "react-bootstrap/ProgressBar";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { handleAnswerQuestion } from "../actions/questions";

const QuestionPage = props => {
  useEffect(() => {
    console.log("Question", props.question);
  });
  const [checkedOptionValue, setCheckedOptionValue] = useState("optionOne");
  const history = useHistory();
  const { question, option, users, options } = props;
  if (question === null) {
    return <p> This question doesn't existed </p>;
  }
  const selectedStyle = {
    backgroundColor: "#add8e6"
  };
  const handleSubmit = e => {
    e.preventDefault();
    const { dispatch, id, authedUser } = props;
    dispatch(
      handleAnswerQuestion({
        authedUser: authedUser,
        qid: id,
        answer: checkedOptionValue
      })
    );

    history.push(`/questions/${id}`);
  };

  const handleRadioChange = e => {
    setCheckedOptionValue(e.target.value);
    console.log("checkedValue", e.target.value);
  };

  if (option === null) {
    return (
      <div className="question">
        <p>{question.author} asks: </p>
        <div className="card-container">
          <div className="avatar-div">
            <img
              src={users[question.author].avatarURL}
              alt={`Avatar of ${question.author}`}
              className="avatar"
            />
          </div>
          <div className="card-text">
            <p className="new-question-title"> Would You Rather...</p>
            <form onSubmit={handleSubmit}>
              {options.map(option => (
                <div key={option.value} className="radio">
                  <label>
                    <input
                      type="radio"
                      name="radio"
                      className="radio-btn"
                      value={option.value}
                      checked={checkedOptionValue === option.value}
                      onChange={handleRadioChange}
                    />
                    {option.label}
                  </label>
                </div>
              ))}
              <Button variant="outline-primary" type="submit">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  const now = 60;
  return (
    <div className="question">
      <p>Asked by {question.author} </p>
      <div className="card-container">
        <div className="avatar-div">
          <img
            src={users[question.author].avatarURL}
            alt={`Avatar of ${question.author}`}
            className="avatar"
          />
        </div>
        <div className="card-text">
          <p className="new-question-title"> Result:</p>
          <div
            className="option-card"
            style={option === "optionOne" ? selectedStyle : null}
          >
            {option === "optionOne" && (
              <Badge pill variant="success" className="badge-position">
                Your Vote
              </Badge>
            )}
            <p>{question.optionOne.text}</p>
            <div className="option">
              <ProgressBar now={now} label={`${now}%`} />
            </div>
          </div>
          <div
            className="option-card"
            style={option === "optionTwo" ? selectedStyle : null}
          >
            {option === "optionTwo" && (
              <Badge pill variant="success" className="badge-position">
                Your Vote
              </Badge>
            )}
            <p>{question.optionTwo.text}</p>
            <div className="option">
              <ProgressBar now={now} label={`${now}%`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
function mapStateToProps({ authedUser, questions, users }, props) {
  const { id } = props.match.params;
  const user = users[authedUser];
  let option = null;
  // if (user !== null && user !== undefined) {
  //   console.log("answer", user.answers);
  //   Object.keys(user.answers).forEach(key => {
  //     //  answered.push({ id: key, option: user.answers[key] });
  //     if (key === id) {
  //       option = user.answers[key];
  //     }
  //   });
  // }
  const question = questions[id];
  if (option === null && question) {
    const optionO = question.optionOne;
    const optionT = question.optionTwo;
    if (optionO.votes.includes(authedUser)) {
      option = "optionOne";
    } else if (optionT.votes.includes(authedUser)) {
      option = "optionTwo";
    }
  }

  return {
    id,
    question: questions[id],
    option,
    users,
    options: [
      { label: questions[id].optionOne.text, value: "optionOne" },
      { label: questions[id].optionTwo.text, value: "optionTwo" }
    ],
    authedUser
  };
}

export default connect(mapStateToProps)(QuestionPage);
