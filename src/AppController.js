import React, { useEffect, useState } from "react";
import { authListener } from "./FirebaseFunctions/auth";
import { Signup } from "./Pages/Signup/Signup";
import { Login } from "./Pages/Login/Login";
import { AuthController } from "./Pages/AuthController/AuthController";
import { UserContext } from "./Context/UserContext";
import { Route } from "react-router-dom";

const AppController = () => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    authListener(setUser);
  }, []);

  // the undefined check is for when the initial auth check is being done
  // that way there isnt a flash to Login -> Authcontroller when a user
  // has already authed on a new visit
  return (
    <UserContext.Provider value={user}>
      {user === undefined ? null : user === null ? (
        <>
          <Route exact path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </>
      ) : (
        <AuthController />
      )}
    </UserContext.Provider>
  );
};

export { AppController };
