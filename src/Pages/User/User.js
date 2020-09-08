import React, { useState } from 'react'
import { GiftyAccordion } from '../../Components/GiftyAccordion/GiftyAccordion'
import { GroupTitle } from '../../Components/GroupTitle'
import { PageTitle } from '../../Components/PageTitle'
import { UserCard } from '../../Components/UserCard'
import { SectionTitle } from '../../Components/SectionTitle'
import { ItemList } from '../../Components/ItemList'
export const User = ({}) => {
  return (
    <>
      <PageTitle title="User" />
      <SectionTitle title="Profile" />
      <UserCard />
      <SectionTitle title="Items" />
      <ItemList />
      <div></div>
    </>
  )
}
