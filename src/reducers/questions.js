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
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat([
              action.authedUser
            ])
          }

          // below can work, but not efficient
          // optionOne: {
          //   text: state[action.qid].optionOne.text,
          //   votes:
          //     action.answer === "optionOne"
          //       ? state[action.qid].optionOne.votes.concat([action.authedUser])
          //       : state[action.qid].optionOne.votes
          // },

          // optionTwo: {
          //   text: state[action.qid].optionTwo.text,
          //   votes:
          //     action.answer === "optionTwo"
          //       ? state[action.qid].optionTwo.votes.concat([action.authedUser])
          //       : state[action.qid].optionTwo.votes
          // }
        }
      };
    default:
      return state;
  }
}
