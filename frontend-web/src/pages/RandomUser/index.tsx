import { useEffect, useState } from 'react'

import { apiClient } from '../../shared/services/api'
import { IRandomUser } from '../../shared/interfaces'
import { BasicLayout } from '../../shared/layout'
import { Card, ListingTool, Pagination } from '../../shared/components'

export const RandomUser = () => {
  const [randomUsers, setRandomUsers] = useState<IRandomUser[]>([])

  useEffect(() => {
    apiClient
      .get('/random-user')
      .then(res => setRandomUsers(res.data))
      // eslint-disable-next-line no-console
      .catch(err => console.log(err))
    // eslint-disable-next-line no-console
  }, [])

  const onChange = (changePage: number) => {}

  return (
    <BasicLayout
      toolbar={<ListingTool />}
      pagination={
        <Pagination page={1} limit={10} length={100} onChangePage={onChange} />
      }
    >
      {randomUsers.map(randomUser => (
        <Card key={randomUser.login.uuid} randomUser={randomUser} />
      ))}
    </BasicLayout>
  )
}
