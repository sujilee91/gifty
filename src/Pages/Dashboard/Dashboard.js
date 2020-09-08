import React, { useEffect, useState } from 'react'
import {
  addItemToWishlist,
  wishlistListner,
} from '../../FirebaseFunctions/wishlist'
import { ItemTable } from '../../Components/ItemTable'
import { PageTitle } from '../../Components/PageTitle'
import { SectionTitle } from '../../Components/SectionTitle'
import { useStyles } from '../styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import recieve from './recieve.png'
import sent from './sent.png'
import spent from './spent.png'

const fakeAccountKey = '6969696'

export const Dashboard = () => {
  const [wishlist, setWishlist] = useState({})

  useEffect(() => {
    wishlistListner(fakeAccountKey, setWishlist)
  }, [])

  const classes = useStyles()

  console.log('$$$ - Dahsboard - wishlist', wishlist)
  return (
    <>
      <PageTitle title="Dashboard" />
      <div className={classes.dashWrapper}>
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
      </div>

      <SectionTitle title="Items" />
      <ItemTable />
      <span>Wishlist</span>
      <button onClick={() => addItemToWishlist(fakeAccountKey)}>
        Add Wishlist Item
      </button>
    </>
  )
}
