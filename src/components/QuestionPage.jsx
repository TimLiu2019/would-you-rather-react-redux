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
  const {
    question,
    authedUserOption,
    users,
    options,
    voteOneNum,
    voteTwoNum
  } = props;
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

  if (authedUserOption === null) {
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
            style={authedUserOption === "optionOne" ? selectedStyle : null}
          >
            {authedUserOption === "optionOne" && (
              <Badge pill variant="success" className="badge-position">
                Your Vote
              </Badge>
            )}

            <div className="option">
              <p>Would you rather {question.optionOne.text}?</p>
              <ProgressBar
                now={(voteOneNum / (voteOneNum + voteTwoNum)) * 100}
                label={`${(voteOneNum / (voteOneNum + voteTwoNum)) * 100}%`}
              />
              <p className="center">
                {voteOneNum} of {voteOneNum + voteTwoNum} votes
              </p>
            </div>
          </div>
          <div
            className="option-card"
            style={authedUserOption === "optionTwo" ? selectedStyle : null}
          >
            {authedUserOption === "optionTwo" && (
              <Badge pill variant="success" className="badge-position">
                Your Vote
              </Badge>
            )}

            <div className="option">
              <p>Would you rather {question.optionTwo.text}?</p>
              <ProgressBar
                now={(voteTwoNum / (voteOneNum + voteTwoNum)) * 100}
                label={`${(voteTwoNum / (voteOneNum + voteTwoNum)) * 100}%`}
              />
              <p className="center">
                {voteTwoNum} of {voteOneNum + voteTwoNum} votes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
function mapStateToProps({ authedUser, questions, users }, props) {
  const { id } = props.match.params;
  //  const user = users[authedUser];
  let authedUserOption = null;
  let voteOneNum = 0;
  let voteTwoNum = 0;
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
  if (authedUserOption === null && question) {
    const optionO = question.optionOne;
    const optionT = question.optionTwo;
    voteOneNum = optionO.votes.length;
    voteTwoNum = optionT.votes.length;
    if (optionO.votes.includes(authedUser)) {
      authedUserOption = "optionOne";
    } else if (optionT.votes.includes(authedUser)) {
      authedUserOption = "optionTwo";
    }
  }

  return {
    id,
    question: questions[id],
    authedUserOption,
    users,
    options: [
      { label: questions[id].optionOne.text, value: "optionOne" },
      { label: questions[id].optionTwo.text, value: "optionTwo" }
    ],
    voteOneNum,
    voteTwoNum,
    authedUser
  };
}

export default connect(mapStateToProps)(QuestionPage);
