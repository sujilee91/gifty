import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom'
import { useStyles } from '../../useStyles'
import logo from '../../gifty.png'
import { Groups } from '../../Pages/Groups/Groups'
import { User } from '../../Pages/User/User'
import { Dashboard } from '../../Pages/Dashboard'

export const Menu = () => {
  const classes = useStyles()
  return (
    <div>
      <Router>
        <div className={classes.routerWrapper}>
          <div className={classes.sideMenuWrapper}>
            <img
              className={classes.appLogo}
              src={logo}
              alt="logo"
              onClick={() => window.location.assign('/')}
            />
            <NavLink
              to="/dashboard"
              className={classes.link}
              activeClassName={classes.selected}
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/groups"
              className={classes.link}
              activeClassName={classes.selected}
            >
              Groups
            </NavLink>
            <NavLink
              to="/user"
              className={classes.link}
              activeClassName={classes.selected}
            >
              Profile
            </NavLink>
          </div>
        </div>
        <Switch>
          <Route exact path="/"></Route>
          <Route exact path="/dashboard">
            <div className="Body">
              <div className={classes.bodyWrapper}>
                <Dashboard />
              </div>
            </div>
          </Route>
          <Route exact path="/groups">
            <div className="Body">
              <div className={classes.bodyWrapper}>
                <Groups />
              </div>
            </div>
          </Route>
          <Route path="/user">
            <div className="Body">
              <div className={classes.bodyWrapper}>
                <User />
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
