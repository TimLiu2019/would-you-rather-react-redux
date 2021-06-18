import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";
import Button from "react-bootstrap/Button";

const SignIn = ({ signInOptions, dispatch, location }) => {
  useEffect(() => {
    setLocation(location.state);
  }, [location.state]);
  const [user, setUser] = useState("");
  const [preLocation, setLocation] = useState("");
  const history = useHistory();

  const handleSelect = event => {
    setUser(event.target.value);
  };
  const handleSignIn = () => {
    dispatch(setAuthedUser(user));
    // if previous page exist, go to the page after sign in
    if (preLocation && preLocation !== "") {
      history.push(preLocation.location);
    } else {
      history.push("/dashboard");
    }
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
      <select onChange={handleSelect}>
        <option hidden={true}> Select User</option>
        {signInOptions.map(option => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <Button
        variant="outline-primary"
        onClick={handleSignIn}
        disabled={user === ""}
      >
        Sign In
      </Button>
    </div>
  );
};
function mapStateToProps({ users, dispatch }) {
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
