import produce from "immer";
import {
  RECEIVE_USERS,
  ADD_QUESTION_TO_USERS,
  ADD_ANSWER_USERS,
  REMOVE_ANSWER_USERS
} from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
    case ADD_QUESTION_TO_USERS:
      return produce(state, draft => {
        draft[action.authedUser].questions.push(action.qid);
      });

    case ADD_ANSWER_USERS:
      return produce(state, draft => {
        draft[action.authedUser].answers[action.qid] = action.answer;
      });

    // when add answer to user but failed to server side, remove it from store
    // use delete
    case REMOVE_ANSWER_USERS:
      return produce(state, draft => {
        delete draft[action.authedUser].answers[action.qid];
      });
    default:
      return state;
  }
}
