import React, { useEffect } from "react";
import { connect } from "react-redux";
import QuestionCard from "./QuestionCard";

const UnansweredList = props => {
  useEffect(() => {
    console.log("unanswered id list", props);
  });
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

function mapStateToProps({ questions, users, authedUser }) {
  const user = users[authedUser];
  let answered = [];
  if (user !== null && user !== undefined) {
    Object.keys(user.answers).forEach(key => {
      answered.push(key);
    });
  }
  const questionIds = Object.keys(questions);
  let unanswered = questionIds;
  if (answered !== null) {
    unanswered = questionIds.filter(
      questionId => !answered.includes(questionId)
    );
  }
  return {
    questionIds: unanswered.sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    )
  };
}
export default connect(mapStateToProps)(UnansweredList);
