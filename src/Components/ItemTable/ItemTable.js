import React, { useState, useEffect } from 'react'
import { useStyles } from './styles'
import {
  addItemToWishlist,
  wishlistListner,
} from '../../FirebaseFunctions/wishlist'
import { ItemColumn } from './ItemColumn'
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
          <th className={classes.th}>Price</th>
          <th className={classes.th}>Description</th>
          <th className={classes.th}>Date</th>
          <th width={6} />
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
                <ItemColumn item={{ name: name, link: link }} />
              </td>
              <td>{price}</td>
              <td>{description}</td>
              <td>d</td>
              <td></td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

{
  /* <div
style={{
  height: 'auto',
  width: '200px',
  border: '1px solid grey',
}}
>
<a target="_blank" href={link}>
  <h1>Name: {name}</h1>
</a>
<code>price: {price}</code>
<p>description: {description} </p>
</div> */
}
