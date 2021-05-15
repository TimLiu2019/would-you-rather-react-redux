import React,{useEffect} from "react";
import { connect } from "react-redux";

const QuestionCard = props => {
    useEffect(() => {
        console.log('question list props',props)
    });
  return (
    <div>
      <h2>{props.author}</h2>
      <div className="avatar"></div>
      <div className="card-text">
        <h4> Would you rather</h4>
        <p>{props.text}</p>
        <button>View Poll</button>
      </div>
    </div>
  );
};

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];

  return {
    authedUser,
    author:question.author,
    text:question.text
  };
}

export default connect(mapStateToProps)(QuestionCard);
