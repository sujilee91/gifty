import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import recieve from './recieve.png'
import sent from './sent.png'
import spent from './spent.png'
import { useStyles } from './styles'

export const DashGrid = () => {
  const classes = useStyles()

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={6} lg={3}>
        <div className={classes.dashCard}>
          <img className={classes.dashImage} src={recieve} />
          <Typography className={classes.dashTitle} gutterBottom>
            Recieved items
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={3}>
        <div className={classes.dashCard}>
          <img className={classes.dashImage} src={sent} />
          <Typography className={classes.dashTitle} gutterBottom>
            Recieved items
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={3}>
        <div className={classes.dashCard}>
          <img className={classes.dashImage} src={spent} />
          <Typography className={classes.dashTitle} gutterBottom>
            Recieved items
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={3}>
        <div className={classes.dashCard}>
          <img className={classes.dashImage} src={recieve} />
          <Typography className={classes.dashTitle} gutterBottom>
            Recieved items
          </Typography>
        </div>
      </Grid>
    </Grid>
  )
}
