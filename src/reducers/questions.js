import produce from "immer";
import {
  RECEIVE_QUESTIONS,
  ADD_QUESTION,
  ANSWER_QUESTION
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };

    case ADD_QUESTION:
      const { question } = action;

      return {
        ...state,
        [question.id]: question
      };
    case ANSWER_QUESTION:
      return produce(state, draft => {
        draft[action.qid][action.answer].votes.push(action.authedUser);
      });
    default:
      return state;
  }
}
