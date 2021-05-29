import React from "react";
import { connect } from "react-redux";

const LeaderBoardItem = ({ avatar, name, answeredNum, questionNum, score }) => {
  return (
    <div className="score-container">
      <div>
        <div className="score-avatar">
          <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
        </div>
        <div className="score-info">
          <p> {answeredNum}</p>
          <p >{questionNum}</p>
        </div>
        <div className="score">
          <p >{score}</p>
          <p >{score}</p>
        </div>
      </div>
    </div>
  );
};
function mapStateToProps({ users }, { id }) {
  const user = users[id];
  const avatar = user.avatarURL;
  const name = user.name;
  const answeredNum = Object.keys(user.answers).length;
  const questionNum = user.questions.length;

  return {
    name,
    avatar,
    answeredNum,
    questionNum,
    score: answeredNum + questionNum
  };
}

export default connect(mapStateToProps)(LeaderBoardItem);
