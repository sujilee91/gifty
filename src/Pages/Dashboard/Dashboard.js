import React, { useEffect, useState } from 'react'
import {
  addItemToWishlist,
  wishlistListner,
} from '../../FirebaseFunctions/wishlist'
import { ItemTable } from '../../Components/ItemTable'
import { PageTitle } from '../../Components/PageTitle'
import { SectionTitle } from '../../Components/SectionTitle'
import { DashGrid } from '../../Components/DashGrid'

import { useStyles } from '../styles'
import recieve from './recieve.png'
import sent from './sent.png'
import spent from './spent.png'
const fakeAccountKey = '6969696'
const dashList = [
  { name: 'Recieved Items', image: recieve },
  { name: 'Sent Items', image: sent },
  { name: 'Total Spent Amount', image: spent },
  { name: 'Numb of Groups', image: recieve },
]
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
        <DashGrid dashItems={dashList} />
      </div>

      <SectionTitle title="Items" />
      <ItemTable />
      <ItemTable />

      {/* <span>Wishlist</span>
      <button onClick={() => addItemToWishlist(fakeAccountKey)}>
        Add Wishlist Item
      </button> */}
    </>
  )
}
