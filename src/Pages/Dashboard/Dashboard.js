import React, { useEffect, useState } from 'react'
import {
  addItemToWishlist,
  wishlistListner,
} from '../../FirebaseFunctions/wishlist'
import { ItemTable } from '../../Components/ItemTable'
import { PageTitle } from '../../Components/PageTitle'
import { SectionTitle } from '../../Components/SectionTitle'
import { useStyles } from '../../useStyles'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

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
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Card raised={false} className={classes.dashCard}>
              Word of the Day
              <Typography
                className={classes.dashTitle}
                gutterBottom
              ></Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Card raised={false} className={classes.dashCard}>
              Word of the Day
              <Typography
                className={classes.dashTitle}
                gutterBottom
              ></Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Card raised={false} className={classes.dashCard}>
              Word of the Day
              <Typography
                className={classes.dashTitle}
                gutterBottom
              ></Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Card raised={false} className={classes.dashCard}>
              Word of the Day
              <Typography
                className={classes.dashTitle}
                gutterBottom
              ></Typography>
            </Card>
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
