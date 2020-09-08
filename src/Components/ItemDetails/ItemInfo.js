import React from 'react'
import { useStyles } from './styles'
import Typography from '@material-ui/core/Typography'
import LinkIcon from '@material-ui/icons/Link'
import IconButton from '@material-ui/core/IconButton'

export const ItemInfo = ({ item }) => {
  const classes = useStyles()
  return (
    <div>
      <div className={classes.itemInfoTitle}>
        <Typography variant="h6">{item.title}</Typography>
        <IconButton className={classes.linkIcon}>
          <LinkIcon />
        </IconButton>
      </div>
      <div className={classes.itemInfoBody}>
        <div>
          <div className={classes.itemParam}>
            <Typography variant="caption">Price</Typography>
            <span>{item?.price ? `$${item.price.toFixed(2)}` : 'N/A'}</span>
          </div>
          <div className={classes.itemParam}>
            <Typography variant="caption">Details</Typography>
            <span>{item.description}</span>
          </div>
          {item.hasPicked && (
            <div className={classes.twoColumn}>
              <div className={classes.extraItemParam}>
                <Typography variant="caption">Item Picked By</Typography>
                <span>{item.pickedBy ? item.pickedBy : 'N/A'}</span>
              </div>
              <div className={classes.extraItemParam}>
                <Typography variant="caption">Date Picked</Typography>
                <span>{item.pickedAt ? item.picked : 'N/A'}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
