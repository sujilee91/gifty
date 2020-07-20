import React, { useState } from 'react'
import { GiftyAccordion } from '../../Components/GiftyAccordion/GiftyAccordion'
import { GroupTitle } from '../../Components/GroupTitle'
import Card from '@material-ui/core/Card'
import { useStyles } from '../../useStyles'
import { mockGroup } from './mocks'
import { PageTitle } from '../../Components/PageTitle'

export const Groups = ({}) => {
  const classes = useStyles()
  const [expanded, setExpanded] = useState('')

  return (
    <>
      <PageTitle title="Groups" />
      {mockGroup.map((group) => {
        const users = group.users
        return (
          <Card raised={false} className={classes.card}>
            <GroupTitle group={group} />
            {users.map((user) => (
              <GiftyAccordion
                user={user}
                expanded={expanded}
                setExpanded={setExpanded}
              />
            ))}
          </Card>
        )
      })}
    </>
  )
}
