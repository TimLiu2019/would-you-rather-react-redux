import React from "react";

const AnsweredList = props => {
  return <div>AnsweredList</div>;
};

function mapStateToProps({ questions, users, authedUser }) {
  const user = users[authedUser];
  
  return {
    questionIds: user.questions.sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    )
  };
}

export default AnsweredList;
