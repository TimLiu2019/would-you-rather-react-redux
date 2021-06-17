import { getInitialData } from "../utils/api";
import { receiveUsers } from "../actions/users";
import { reveiveQuestions } from "../actions/questions";
import { showLoading, hideLoading } from "react-redux-loading";

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(reveiveQuestions(questions));
      dispatch(hideLoading());
    });
  };
}
