import React from "react";
import { connect } from "react-redux";
import QuestionCard from "./QuestionCard";

const AnsweredList = props => {
  return (
    <div>
      {props.answeredArray.map(answer => (
        <li key={answer.id}>
          <QuestionCard id={answer.id} option={answer.option} />
        </li>
      ))}
    </div>
  );
};

function mapStateToProps({ questions, authedUser, users }) {
  const user = users[authedUser];
  let answered = [];
  if (user !== null && user !== undefined) {
    Object.keys(user.answers).forEach(key => {
      answered.push({ id: key, option: user.answers[key] });
    });
  }

  return {
    answeredArray: answered.sort(
      (a, b) => questions[b.id].timestamp - questions[a.id].timestamp
    )
  };
}

export default connect(mapStateToProps)(AnsweredList);
