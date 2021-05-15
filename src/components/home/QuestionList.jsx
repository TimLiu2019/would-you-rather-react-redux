import React, { useEffect } from "react";
import { connect } from "react-redux";
import QuestionCard from "./QuestionCard";

const QuestionList = props => {
  useEffect(() => {
    console.log("question list props", props);
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

function mapStateToProps({ questions, authedUser, users }) {
  console.log("users", users);
  console.log("authedUser id", authedUser);
  const user = users[authedUser];
  
    console.log("autheduser ", user);
    if(user !== null && user!==undefined) {
        console.log('questions',user.questions)
    }
  
  return {
    questionIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    )
  };
}
export default connect(mapStateToProps)(QuestionList);
