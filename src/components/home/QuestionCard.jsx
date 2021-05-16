import React, { useEffect } from "react";
import { connect } from "react-redux";
import Button from 'react-bootstrap/Button'

const QuestionCard = props => {
  useEffect(() => {
    console.log("question list props", props);
  });
  return (
    <div className="question">
      <p >{props.author} asks:</p>
      <div>
        <div className="avatar-div">
          <img src={props.avatar} alt={`Avatar of ${props.author}`} className="avatar" />
        </div>
        <div className="card-text">
          <p > Would you rather</p>
          <p className='question-text'>{props.text}</p>
          <Button variant="outline-primary">View Poll</Button>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];

  return {
    authedUser,
    author: question.author,
    text: question.optionOne.text,
    avatar: users[question.author].avatarURL
  };
}

export default connect(mapStateToProps)(QuestionCard);
