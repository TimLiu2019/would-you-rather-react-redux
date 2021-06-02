import { getInitialData } from "../utils/api";
import { receiveUsers } from "../actions/users";
import { reveiveQuestions } from "../actions/questions";
//import { setAuthedUser } from "../actions/authedUser";


export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(reveiveQuestions(questions));
    //  dispatch(setAuthedUser(AUTHED_ID));
    });
  };
}