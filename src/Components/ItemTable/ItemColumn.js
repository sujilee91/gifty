import React from 'react'
import { useStyles } from './styles'

export const ItemColumn = ({ item }) => {
  const classes = useStyles()

  return (
    <div
      className={classes.itemWrapper}
      onClick={() => {
        window.open(item.link)
      }}
    >
      {/* <a target="_blank" href={item.link}>
        {item.name}
      </a> */}
      <div className={classes.itemImg}>
        <img
          className={classes.image}
          src="http://wmb.me/img-gen/40x40/eeeeee.png"
        />
      </div>
      <div className={classes.itemDescription}>
        <div>{item.name}</div>
        <div className={classes.itemConfig}>{item.name}</div>
      </div>
    </div>
  )
}
