import React, { useEffect } from "react";
import "./App.css";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Menu } from "./Components/Menu";
import { authListener, loginWithGoogle } from "./FirebaseFunctions/auth";

function App() {
  useEffect(() => {
    authListener();
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <Menu />
      <div className="App" />
    </MuiThemeProvider>
  );
}

export default App;
