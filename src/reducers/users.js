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
    case REMOVE_ANSWER_USERS:
      let before_answers = state[action.authedUser].answers;
      // user underling to replace content
      const { [action.qid]: _, ...answers } = before_answers;

      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers
        }
      };
    default:
      return state;
  }
}
