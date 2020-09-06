import React from "react";
import { logout } from "../../FirebaseFunctions/auth";
import { UserContext } from "../../Context/UserContext";
import { Menu } from "../../Components/Menu";

const AuthController = () => {
  return (
    <UserContext.Consumer>
      {({ displayName }) => {
        return <Menu />;
      }}
    </UserContext.Consumer>
  );
};

export { AuthController };
