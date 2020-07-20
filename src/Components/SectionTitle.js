import React from 'react'
import { useStyles } from '../useStyles'
import Typography from '@material-ui/core/Typography'

export const SectionTitle = ({ title }) => {
  const classes = useStyles()
  return (
    <div className={classes.pageTitle}>
      <Typography variant="h6">{title}</Typography>
    </div>
  )
}
