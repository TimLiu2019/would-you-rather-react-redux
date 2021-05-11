

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";


export function reveiveQuestions(questions) {
    return {
      type: RECEIVE_QUESTIONS,
      questions
    };
  }

