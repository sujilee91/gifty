import React, { useState } from 'react'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { useStyles } from '../../useStyles'
import { GiftyList } from './GiftyList'
import Avatar from '@material-ui/core/Avatar'
import ImageIcon from '@material-ui/icons/Image'

export const GiftyAccordion = ({ user, expanded, setExpanded }) => {
  const classes = useStyles()
  const getNameAvatar = (userName) => {
    const nameArray = userName?.split(' ')
    return `${nameArray[0]?.charAt(0)}${nameArray[1]?.charAt(0)}`
  }

  return (
    <Accordion
      expanded={expanded === user.name}
      onChange={() =>
        expanded === user.name ? setExpanded('') : setExpanded(user.name)
      }
      square
      className={classes.accordion}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        className={classes.summary}
      >
        {user.thumbnail ? (
          <Avatar>
            <ImageIcon />
          </Avatar>
        ) : (
          <Avatar>{getNameAvatar(user.name)}</Avatar>
        )}
        <Typography fontFamily="Roboto" className={classes.heading}>
          {user.name}
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>
        <GiftyList items={user.items} />
      </AccordionDetails>
    </Accordion>
  )
}
