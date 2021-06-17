import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Logout = () => {
  const history = useHistory();
  useEffect(() => {
    history.push("/sign-in");
  });

  return null;
};

export default Logout;
