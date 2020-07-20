import React from 'react'
import List from '@material-ui/core/List'
import { GiftyListItem } from './GiftyListItem'
import { useStyles } from '../../useStyles'

export const GiftyList = ({ items }) => {
  const classes = useStyles()

  return (
    <List className={classes.root}>
      {items.map((item) => (
        <GiftyListItem item={item} />
      ))}
    </List>
  )
}
