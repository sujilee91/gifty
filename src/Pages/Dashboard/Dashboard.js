import React, { useState } from 'react'
import { GiftyAccordion } from '../../Components/GiftyAccordion/GiftyAccordion'
import { GroupTitle } from '../../Components/GroupTitle'
import Card from '@material-ui/core/Card'
import { useStyles } from '../../useStyles'
import { PageTitle } from '../../Components/PageTitle'
import Divider from '@material-ui/core/Divider'
import AccordionActions from '@material-ui/core/AccordionActions'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

export const Dashboard = ({}) => {
  const classes = useStyles()
  const [expanded, setExpanded] = useState('')

  return (
    <>
      <PageTitle title="Dashboard" />
      <div className={classes.dashWrapper}>
        <Card raised={false} className={classes.dashCard}>
          Word of the Day
          <Typography className={classes.dashTitle} gutterBottom></Typography>
        </Card>
        <Card raised={false} className={classes.dashCard}>
          B
        </Card>
        <Card raised={false} className={classes.dashCard}>
          C
        </Card>
        <Card raised={false} className={classes.dashCard}>
          D
        </Card>
      </div>
    </>
  )
}
