import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import AvatarGroup from '@material-ui/lab/AvatarGroup'
import Typography from '@material-ui/core/Typography'
import { useStyles } from './styles'
export const GroupTitle = ({ group }) => {
  const classes = useStyles()
  return (
    <div className={classes.groupTitle}>
      <Typography variant="h5">
        {group.name ? group.name : 'No Group name'}
      </Typography>
      <AvatarGroup max={4}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
      </AvatarGroup>
    </div>
  )
}
