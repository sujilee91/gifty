import React from 'react'
import { useStyles } from './styles'
import Typography from '@material-ui/core/Typography'

export const PageTitle = ({ title }) => {
  const classes = useStyles()
  return (
    <div className={classes.pageTitle}>
      <Typography variant="h4" classes={{ h4: classes.title }}>
        {title}
      </Typography>
    </div>
  )
}
