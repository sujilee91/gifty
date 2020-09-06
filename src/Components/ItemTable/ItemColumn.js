import React, { useState } from 'react'
import { useStyles } from './styles'
import Drawer from '@material-ui/core/Drawer'
import { ItemDetails } from '../ItemDetails'

export const ItemColumn = ({ item }) => {
  const classes = useStyles()
  const [openDrawer, setOpenDrawer] = useState(false)

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setOpenDrawer(open)
  }

  console.log(item, 'item')
  return (
    <div
      className={classes.itemWrapper}
      onClick={() => setOpenDrawer(!openDrawer)}
    >
      <div className={classes.itemImg}>
        <img
          className={classes.image}
          src="http://wmb.me/img-gen/40x40/eeeeee.png"
        />
      </div>
      <div className={classes.itemDescription}>
        <div className={classes.itemTitle}>{item.name}</div>
        <div className={classes.itemConfig}>{item.name}</div>
      </div>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={toggleDrawer('right', false)}
      >
        <ItemDetails item={item} />
      </Drawer>
    </div>
  )
}
