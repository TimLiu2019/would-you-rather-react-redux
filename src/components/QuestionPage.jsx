import React, { useEffect } from "react";
import { connect } from "react-redux";
import ProgressBar from "react-bootstrap/ProgressBar";
import Badge from "react-bootstrap/Badge";

const QuestionPage = props => {
  useEffect(() => {
    console.log("Question", props.question);
  });
  const { question, id, option, users } = props;
  if (question === null) {
    return <p> This question doesn't existed </p>;
  }
  const selectedStyle = {
    backgroundColor: "#add8e6"
  };
  if (option === null) {
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
            <div className="option-card">
              <p>{question.optionOne.text}</p>
            </div>
            <div className="option-card">
              <p>{question.optionTwo.text}</p>
            </div>
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
  if (user !== null && user !== undefined) {
    console.log("questions", user.answers);
    Object.keys(user.answers).forEach(key => {
      //  answered.push({ id: key, option: user.answers[key] });
      if (key === id) {
        option = user.answers[key];
      }
    });
  }
  // const question = questions[props.match.params];
  return {
    id,
    question: questions[id],
    option,
    users
  };
}

export default connect(mapStateToProps)(QuestionPage);
