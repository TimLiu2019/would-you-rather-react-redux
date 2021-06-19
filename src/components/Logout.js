import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

const Logout = props => {
  const history = useHistory();
  useEffect(() => {
    props.logOutAuthedUser();
    history.push("/sign-in");
  });

  return null;
};

const mapDispatchToProps = dispatch => {
  return {
    logOutAuthedUser: () => {
      dispatch(setAuthedUser(null));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Logout);
