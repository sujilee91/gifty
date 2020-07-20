import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { useStyles } from '../useStyles'
import EditIcon from '@material-ui/icons/Edit'

export const UserCard = ({ user }) => {
  const classes = useStyles()
  return (
    <Card className={classes.userCard}>
      <div className={classes.userDetailsCard}>
        <div className={classes.userProfileImageWrapper}>
          <img
            className={classes.userProfileImage}
            alt=""
            src="https://media-exp1.licdn.com/dms/image/C5603AQHc0S73xjBtww/profile-displayphoto-shrink_400_400/0?e=1600905600&v=beta&t=dEkRikvhyavdwIJhLIvDRtXpPybEziUbuoqchmjXO_s"
          />
        </div>
        <CardContent className={classes.userCardContent}>
          <Typography component="h5" variant="h5">
            Connor Anderson
          </Typography>
          <div className={classes.userDetail}>
            <Typography variant="caption" color="textSecondary">
              email
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              connorbanderson@gmail.com
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
  )
}
