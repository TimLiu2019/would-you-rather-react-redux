import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const ProtectedRoute = ({
  path,
  component: Component,
  render,
  authedUser,
  ...rest
}) => {
  return (
    <Route
      path={path}
      {...rest}
      render={props => {
        if (!authedUser)
          return (
            <Redirect
              to={{
                pathname: "/sign-in",
                state: { location: props.location.pathname }
              }}
            />
          );
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(ProtectedRoute);
