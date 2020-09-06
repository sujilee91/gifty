import React from "react";
import { loginWithGoogle } from "../../FirebaseFunctions/auth";

const Login = () => {
  return (
    <div
      style={{
        height: "100vh",
        with: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={loginWithGoogle}>Log in With Google SON</button>
    </div>
  );
};

export { Login };
