import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import CreateForm from "../../components/CreateForm/CreateForm";
import UpdateForm from "../../components/UpdateForm/UpdateForm";

const Account = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default Account;
