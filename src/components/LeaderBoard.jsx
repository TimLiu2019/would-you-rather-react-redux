import React from "react";
import { connect } from "react-redux";
import LeaderBoardItem from "./leaderBoard/LeaderBoardItem";

// const { useEffect } = React;
const LeaderBoard = ({ userIds }) => {
  // useEffect(() => {
  //   console.log("props in leader board",userIds);
  // });
  return (
    <div>
      {userIds.map(id => (
        <li key={id}>
          <LeaderBoardItem id={id} />
        </li>
      ))}
    </div>
  );
};

function mapStateToProps({ users }) {
  const userIds = Object.keys(users);
  return {
    userIds: userIds.sort(
      (a, b) =>
        Object.keys(users[b].answers).length +
        users[b].questions.length -
        (Object.keys(users[a].answers).length + users[a].questions.length)
    )
  };
}

export default connect(mapStateToProps)(LeaderBoard);
