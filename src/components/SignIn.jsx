import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";

const SignIn = ({ signInOptions,dispatch }) => {
  useEffect(() => {
    console.log("sign in", signInOptions);
  });
  const history = useHistory();
  const handleSignIn = event => {
    dispatch(setAuthedUser(event.target.value));
    history.push('/');

  };

  return (
    <div className="sign-in">
      <div className="signin-title">
        <p className="title">Welcome to Would You Rather App!</p>
        <p>Please sign in to continue</p>
      </div>
      <div className="redux-logo">
        <img src="/Services.jpg" alt="react-reduz" width="128" height="128" />
      </div>
      <h4>Sign in</h4>
      <select onChange={handleSignIn}>
        <option hidden={true}> Select User</option>
        {signInOptions.map(option => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
function mapStateToProps({ users,dispatch }) {
  let signInOptions = [];
  Object.keys(users).forEach(key => {
    signInOptions.push({ value: key, label: key });
  });

  return {
    signInOptions,
    dispatch
  };
}

export default connect(mapStateToProps)(SignIn);
