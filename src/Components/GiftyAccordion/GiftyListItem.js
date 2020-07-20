import React, { useState } from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ImageIcon from '@material-ui/icons/Image'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import DoneIcon from '@material-ui/icons/Done'
import Drawer from '@material-ui/core/Drawer'
import { ItemDetails } from './ItemDetails/ItemDetails'
import { Typography } from '@material-ui/core'
import { useStyles } from '../../useStyles'
//show dialog OR sidebar of item details on click
export const GiftyListItem = ({ item }) => {
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

  const itemPickStatus = (hasPicked, pickedBy, price) => {
    if (hasPicked) {
      if (pickedBy === '0001') {
        return <DoneIcon color="primary" />
      }
      return <DoneIcon color="disabled" />
    } else {
      return (
        <Typography variant="caption">
          {price ? `$ ${price.toFixed(2)}` : 'No price'}
        </Typography>
      )
    }
  }
  return (
    <ListItem
      className={classes.listItem}
      button
      onClick={() => setOpenDrawer(!openDrawer)}
    >
      <ListItemAvatar>
        {item.image ? (
          <Avatar
            className={classes.itemAvatar}
            alt={item.title}
            src={item.image}
          />
        ) : (
          <Avatar className={classes.itemAvatar}>
            <ImageIcon />
          </Avatar>
        )}
      </ListItemAvatar>
      <ListItemText primary={item.title} secondary={item.description} />
      <ListItemSecondaryAction>
        {itemPickStatus(item.hasPicked, item.pickedBy, item.price)}
      </ListItemSecondaryAction>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={toggleDrawer('right', false)}
      >
        <ItemDetails item={item} />
      </Drawer>
    </ListItem>
  )
}
