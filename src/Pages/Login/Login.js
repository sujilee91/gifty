import React, { useState } from "react";
import { loginWithGoogle, login } from "../../FirebaseFunctions/auth";
import { useStyles } from "../styles";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import { GoogleIcon } from "./GoogleIcon";
import TextField from "@material-ui/core/TextField";
import "./Login.scss";
import smallLogo from "../../Components/Menu/smallLogo.png";
//This page is trying to look like - https://cdn.dribbble.com/users/369527/screenshots/13947179/media/30a76ca2bc03d5b09f59299ee631234b.png
import { Formik } from "formik";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  return (
    <div className="login">
      <div className="login__lhs">
        <div className="login__lhs__topRow">
          <img src={smallLogo} />
          <Button
            onClick={() => history.push("/signup")}
            variant="outlined"
            color="primary"
          >
            Sign Up
          </Button>
        </div>
        <div className="login__lhs__middle">
          <span className="login__smallText">Get Gifting!</span>
          <span className="login__largeText" style={{ marginBottom: "12px" }}>
            Welcome back!
          </span>
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            style={{ width: "100%", margin: "8px 0px" }}
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
          />
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            style={{ width: "100%", margin: "8px 0px" }}
            id="outlined-basic"
            label="Password"
            type="password"
            variant="outlined"
          />
          <Button
            onClick={() => login(email, password)}
            variant="contained"
            color="primary"
            style={{
              marginTop: "20px",
              marginBottom: "8px",
              width: "100%",
              padding: "12px 6px",
            }}
          >
            Sign In
          </Button>
          <Button
            onClick={loginWithGoogle}
            variant="outlined"
            startIcon={<GoogleIcon style={{ height: "24px", width: "24px" }} />}
            style={{
              marginTop: "8px",
              marginBottom: "8px",
              width: "100%",
              padding: "12px 6px",
            }}
          >
            Sign in with Google
          </Button>
          <div className="login__lhs__middle--row">
            <span>Don't have an account?</span>
            <a href="/signup">Sign Up</a>
          </div>
        </div>
        <div className="login__lhs__bottom">
          <a href="www.google.ca">Privacy Policy</a>
          <span>and</span>
          <a href="www.google.ca">Terms of Service</a>
        </div>
      </div>
      <div className="login__rhs">
        <img
          style={{ height: "50%" }}
          src="https://cdn.dribbble.com/users/5702106/screenshots/14311867/image.png"
        />
        <div className="login__rhs__textWrapper">
          <h3 className="login--smallText">appreciation app</h3>
          <h2>
            Start for free and improve your speaker career just in one click.
          </h2>
        </div>
      </div>
    </div>
  );
};

export { Login };
