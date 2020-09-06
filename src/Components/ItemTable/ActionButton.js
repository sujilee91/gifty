import React from 'react'

import LinkIcon from '@material-ui/icons/Link'
import IconButton from '@material-ui/core/IconButton'

export const ActionButton = ({ url }) => {
  return (
    <IconButton
      onClick={() => {
        window.open(url)
      }}
    >
      <LinkIcon />
    </IconButton>
  )
}
