import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Logout = () => {
  const history = useHistory();
  useEffect(() => {
    history.push("/signin");
    //    window.location = "/signin";
  });

  return null;
};

export default Logout;
