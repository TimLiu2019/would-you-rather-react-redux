import React from "react";
import { connect } from "react-redux";
import QuestionCard from "./QuestionCard";

const AnsweredList = props => {
  return (
    <div>
      {props.questionIds.map(id => (
        <li key={id}>
          <QuestionCard id={id} />
        </li>
      ))}
    </div>
  );
};

function mapStateToProps({ questions, authedUser, users }) {
  const user = users[authedUser];
  console.log("authedUser", authedUser);
  console.log("user", user);
  let answered = [];
  if (user !== null && user !== undefined) {
    console.log("questions", user.answers);
    Object.keys(user.answers).forEach(key => {
      answered.push(key);
    });
  }

  return {
    questionIds: answered
      ? answered.sort((a, b) => questions[b].timestamp - questions[a].timestamp)
      : []
  };
}

export default connect(mapStateToProps)(AnsweredList);
