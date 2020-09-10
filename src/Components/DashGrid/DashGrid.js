import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import { useStyles } from './styles'

export const DashGrid = ({ dashItems }) => {
  const classes = useStyles()

  return (
    <Grid container spacing={3}>
      {dashItems.map((item) => (
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <div className={classes.dashCard}>
            <img className={classes.dashImage} src={item.image} />
            <Typography className={classes.dashTitle} gutterBottom>
              {item.name}
            </Typography>
          </div>
        </Grid>
      ))}
    </Grid>
  )
}
