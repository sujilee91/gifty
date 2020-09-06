import React, { useState, useEffect } from 'react'
import { useStyles } from './styles'
import {
  addItemToWishlist,
  wishlistListner,
} from '../../FirebaseFunctions/wishlist'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

const fakeAccountKey = '6969696'

export const ItemList = () => {
  const classes = useStyles()
  const [wishlist, setWishlist] = useState({})

  useEffect(() => {
    wishlistListner(fakeAccountKey, setWishlist)
  }, [])

  return (
    <div className={classes.itemsWrapper}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <div className={classes.addButtonWrapper}>
            <AddIcon
              style={{ color: '#1b9773', height: '45px', width: '45px' }}
            />
          </div>
        </Grid>
        {Object.keys(wishlist).map((wishListItemId) => {
          const wishListItem = wishlist[wishListItemId]
          const {
            name,
            price,
            link,
            id,
            description,
            created_by,
          } = wishListItem
          return (
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Paper className={classes.paper}>
                <img
                  className={classes.image}
                  src="http://wmb.me/img-gen/60x60/eeeeee.png"
                />
                <div className={classes.itemDescription}>
                  <div className={classes.title}>{name}</div>
                  <div> $ {price.toFixed(2)}</div>
                  <div className={classes.itemConfig}> {description}</div>
                </div>
              </Paper>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}
