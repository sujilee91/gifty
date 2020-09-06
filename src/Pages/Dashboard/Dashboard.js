import React, { useEffect, useState } from 'react'
import {
  addItemToWishlist,
  wishlistListner,
} from '../../FirebaseFunctions/wishlist'
import { ItemTable } from '../../Components/ItemTable'
import { PageTitle } from '../../Components/PageTitle'
import { SectionTitle } from '../../Components/SectionTitle'
const fakeAccountKey = '6969696'

export const Dashboard = () => {
  const [wishlist, setWishlist] = useState({})

  useEffect(() => {
    wishlistListner(fakeAccountKey, setWishlist)
  }, [])

  console.log('$$$ - Dahsboard - wishlist', wishlist)
  return (
    <>
      <PageTitle title="Dashboard" />
      <SectionTitle title="Items" />
      <ItemTable />
      <span>Wishlist</span>
      <button onClick={() => addItemToWishlist(fakeAccountKey)}>
        Add Wishlist Item
      </button>
    </>
  )
}
