import React, { useState, useEffect } from 'react'
import { useStyles } from './styles'
import {
  addItemToWishlist,
  wishlistListner,
} from '../../FirebaseFunctions/wishlist'
import { ItemColumn } from './ItemColumn'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { ActionButton } from './ActionButton'
import Drawer from '@material-ui/core/Drawer'

const fakeAccountKey = '6969696'

export const ItemTable = () => {
  const classes = useStyles()
  const [wishlist, setWishlist] = useState({})

  useEffect(() => {
    wishlistListner(fakeAccountKey, setWishlist)
  }, [])

  return (
    <table className={classes.table}>
      <thead>
        <tr className={classes.thead}>
          <th className={classes.th}>Item</th>
          <th className={classes.th}>Status</th>
          <th className={classes.th}>Price</th>
          <th className={classes.th}>Description</th>
          <th className={classes.th}>Date</th>
          <th className={classes.actionTh} />
        </tr>
      </thead>
      <tbody className={classes.tbody}>
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
            <tr className={classes.tr}>
              <td className={classes.itemTd}>
                <ItemColumn item={{ title: name, ...wishListItem }} />
              </td>
              <td className={classes.td}>√</td>
              <td className={classes.priceTd}>$ {price.toFixed(2)}</td>
              <td className={classes.descriptionTd}>{description}</td>
              <td className={classes.td}>d</td>
              <td className={classes.td}>
                <ActionButton url={link} />
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
