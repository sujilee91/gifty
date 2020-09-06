import React from "react";
import { logout } from "../../FirebaseFunctions/auth";
import { UserContext } from "../../Context/UserContext";

const AuthController = () => {
  return (
    <UserContext.Consumer>
      {({ displayName }) => {
        return (
          <div
            style={{
              height: "100vh",
              with: "100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <span>WELCOME {displayName}</span>
            <button onClick={logout}>Logout</button>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
};

export { AuthController };
