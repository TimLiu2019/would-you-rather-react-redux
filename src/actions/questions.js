import { _saveQuestion } from "../utils/_DATA";
import { _saveQuestionAnswer } from "../utils/_DATA";
import {
  addQuestionToUers,
  addAnswerToUsers,
  removeAnswerFromUsers
} from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

export function reveiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  };
}

export function answerQuestion({ authedUser, qid, answer }) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser, users } = getState();

    return _saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    }).then(question => {
      dispatch(addQuestion(question));
      dispatch(addQuestionToUers({ users, qid: question.id, authedUser }));
    });
  };
}

export function handleAnswerQuestion(info) {
  return (dispatch, getState) => {
    const { users } = getState();
    const { authedUser, qid, answer } = info;
    dispatch(addAnswerToUsers({ users, authedUser, qid, answer }));
    dispatch(answerQuestion(info));
    return _saveQuestionAnswer(info).catch(e => {
      console.warn("Error in handleAnswerQuestion", e);
      dispatch(removeAnswerFromUsers({ users, authedUser, qid, answer }));
    });
  };
}
