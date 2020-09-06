import React, { useState } from 'react'
import { useStyles } from '../../useStyles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import ImageIcon from '@material-ui/icons/Image'
import { ItemInfo } from './ItemInfo'

export const ItemDetails = ({ item, onClick }) => {
  const classes = useStyles()
  const isPickedItem = item.hasPicked && item.pickedBy !== '0001'
  const isItemPickedByUser = item.hasPicked && item.pickedBy === '0001'
  return (
    <div className={classes.list}>
      <div className={classes.listHeader}>
        <h3>Item Information</h3>
      </div>
      <div className={classes.listBody}>
        <div className={classes.itemImageWrapper}>
          {item.image ? (
            <img
              className={classes.itemImage}
              src={item.image}
              alt={item.name}
            />
          ) : (
            <Avatar variant="square" className={classes.squareAvatar}>
              <ImageIcon />
            </Avatar>
          )}
        </div>
        <div>
          <ItemInfo item={item} />
        </div>
      </div>
      <div className={classes.listFooter}>
        <Button
          className={classes.listFooterButton}
          variant="contained"
          color={
            isPickedItem
              ? 'disabled'
              : isItemPickedByUser
              ? 'secondary'
              : 'primary'
          }
          disableElevation
          containedSizeLarge
          fullWidth
          disabled={isPickedItem}
          onClick={onClick}
        >
          {isPickedItem
            ? 'Item has already picked'
            : isItemPickedByUser
            ? 'Undo this gifty!'
            : 'Make it my Gifty!'}
        </Button>
      </div>
    </div>
  )
}
