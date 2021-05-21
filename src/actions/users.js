export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_ANSWER_USERS = "ADD_ANSWER_USERS";
export const REMOVE_ANSWER_USERS = "REMOVE_ANSWER_USERS";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  };
}

export function addAnswerToUsers({ users, qid, answer, authedUser }) {
  return {
    type: ADD_ANSWER_USERS,
    users,
    qid,
    answer,
    authedUser
  };
}

export function removeAnswerFromUsers({ users, qid, answer, authedUser }) {
  return {
    type: REMOVE_ANSWER_USERS,
    users,
    qid,
    answer,
    authedUser
  };
}
