import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles";
import EditIcon from "@material-ui/icons/Edit";
import { UserContext } from "../Context/UserContext";

export const UserCard = () => {
  return (
    <UserContext.Consumer>
      {(user) => {
        return <UserCardContent user={user} />;
      }}
    </UserContext.Consumer>
  );
};

const UserCardContent = ({ user }) => {
  const classes = useStyles();
  return (
    <Card className={classes.userCard}>
      <div className={classes.userDetailsCard}>
        <div className={classes.userProfileImageWrapper}>
          <img
            className={classes.userProfileImage}
            alt=""
            src={user.photoURL}
          />
        </div>
        <CardContent className={classes.userCardContent}>
          <Typography component="h5" variant="h5">
            {user.displayName || "No Display Name Set"}
          </Typography>
          <div className={classes.userDetail}>
            <Typography variant="caption" color="textSecondary">
              email
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {user.email}
            </Typography>
          </div>
          <div className={classes.userAction}>
            <IconButton aria-label="previous">
              <EditIcon />
            </IconButton>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};
