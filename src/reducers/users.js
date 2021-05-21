import {
  RECEIVE_USERS,
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
    case ADD_ANSWER_USERS:
      return {
        ...state,
        // [action.authedUser]: {
        //   ...state[action.authedUser],
        //   questions: state[action.authedUser].questions.concat(action.qid)
        // },
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer
          }
        }
      };
    // when add answer to user failed to server, remove it from store
    case REMOVE_ANSWER_USERS:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: state[action.authedUser].answers.filter(
            answer => Object.keys(answer) !== action.qid
          )
        }
      };
    default:
      return state;
  }
}
