import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { useStyles } from "./styles";
import { Groups } from "../../Pages/Groups/Groups";
import { User } from "../../Pages/User/User";
import { Dashboard } from "../../Pages/Dashboard";
import { logout } from "../../FirebaseFunctions/auth";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import FaceIcon from "@material-ui/icons/Face";
import { useHistory } from "react-router-dom";

export const Menu = () => {
  const history = useHistory();
  const classes = useStyles();
  const handleLogout = () => {
    logout();
    history.push("/login");
  };
  return (
    <div>
      <Router>
        <div className={classes.routerWrapper}>
          <aside className={classes.sideMenuWrapper}>
            <section
              className={classes.appLogo}
              onClick={() => window.location.assign("/")}
            />

            <NavLink
              to="/dashboard"
              className={classes.link}
              activeClassName={classes.selected}
            >
              <div>
                <EqualizerIcon />
                <span>Dashboard</span>
              </div>
            </NavLink>
            <NavLink
              to="/groups"
              className={classes.link}
              activeClassName={classes.selected}
            >
              <div>
                <PeopleOutlineIcon />
                <span>Groups</span>
              </div>
            </NavLink>
            <NavLink
              to="/user"
              className={classes.link}
              activeClassName={classes.selected}
            >
              <div>
                <FaceIcon />
                <span>Profile</span>
              </div>
            </NavLink>
            <a className={classes.logout} onClick={handleLogout}>
              <div>
                <span>Logout</span>
                <ExitToAppIcon />
              </div>
            </a>
          </aside>
        </div>
        <Switch>
          <Route exact path="/"></Route>
          <Route exact path="/dashboard">
            <div className={classes.Body}>
              <div className={classes.bodyWrapper}>
                <Dashboard />
              </div>
            </div>
          </Route>
          <Route exact path="/groups">
            <div className={classes.Body}>
              <div className={classes.bodyWrapper}>
                <Groups />
              </div>
            </div>
          </Route>
          <Route path="/user">
            <div className={classes.Body}>
              <div className={classes.bodyWrapper}>
                <User />
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
