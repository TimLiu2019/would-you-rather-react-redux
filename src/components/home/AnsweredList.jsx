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
  console.log("authedUser", authedUser);
  console.log("user", user);
  let answered = [];
  if (user !== null && user !== undefined) {
    console.log("questions", user.answers);
    Object.keys(user.answers).forEach(key => {
      answered.push({ id: key, option: user.answers[key] });
    });
  }

  return {
    answeredArray: answered
  };
}

export default connect(mapStateToProps)(AnsweredList);
