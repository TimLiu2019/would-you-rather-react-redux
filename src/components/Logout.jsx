import { useEffect } from "react";

const Logout = () => {
  useEffect(() => {
    window.location = "/signin";
  });
  return null;
};

export default Logout;
