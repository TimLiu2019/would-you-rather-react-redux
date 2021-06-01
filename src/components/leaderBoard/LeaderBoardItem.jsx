import React from "react";
import { connect } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const LeaderBoardItem = ({ avatar, name, answeredNum, questionNum, score }) => {
  return (
    <div className="score-container">
      <div>
        <div className="score-avatar">
          <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
        </div>
        <div className="score-info">
          <h4>{name}</h4>
          <Row>
            <Col xs={10}>Answered Questions</Col>
            <Col>{answeredNum}</Col>
          </Row>
          <Row>
            <Col xs={10}>Created Questions</Col>
            <Col>{questionNum}</Col>
          </Row>
        </div>
        <div className="score">
          <div className='score-card'>
            <p className="score-title">Score</p>
            <p>{score}</p>
          </div>
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
