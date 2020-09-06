import React, { useEffect, useState } from 'react'
import {
  addItemToWishlist,
  wishlistListner,
} from '../../FirebaseFunctions/wishlist'
import { ItemTable } from '../../Components/ItemTable'
const fakeAccountKey = '6969696'

export const Dashboard = () => {
  const [wishlist, setWishlist] = useState({})

  useEffect(() => {
    wishlistListner(fakeAccountKey, setWishlist)
  }, [])

  console.log('$$$ - Dahsboard - wishlist', wishlist)
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <ItemTable />
      <span>Wishlist</span>
      <button onClick={() => addItemToWishlist(fakeAccountKey)}>
        Add Wishlist Item
      </button>
    </div>
  )
}
