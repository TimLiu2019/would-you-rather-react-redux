import React, { useEffect } from "react";
import { connect } from "react-redux";
import ProgressBar from "react-bootstrap/ProgressBar";

const Question = props => {
  useEffect(() => {
    console.log("Question", props.question);
  });
  const { question, users, id, author } = props;
  if (question === null) {
    return <p> This question doesn't existed </p>;
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
          <div className="option">
            <p>{question.optionOne.text}</p>
            <div className="option">
              <ProgressBar now={now} label={`${now}%`} />
            </div>
          </div>
          <div className="option">
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
  // const question = questions[props.match.params];
  return {
    id,
    question: questions[id],
    users
    //   author: question.author,
    // avatar: users[questions[id].author].avatarURL
  };
}

export default connect(mapStateToProps)(Question);
