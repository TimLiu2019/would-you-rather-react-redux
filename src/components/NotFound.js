import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="center">
      <h1 className="text404">404</h1>
      <h1 className="text-not-found">OOPS! Page Not Found</h1>
      <p>
        We're sorry. the page you are requested could not be found. Please Sign
        In.
      </p>
      <Link to="/sign-in">
        <Button variant="outline-primary">Back to Sign in</Button>
      </Link>
    </div>
  );
};

export default NotFound;
