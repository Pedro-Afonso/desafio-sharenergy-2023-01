import { useSearchParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useMemo } from 'react'

import { Card, ListingTool, Pagination } from '../../shared/components'
import { apiClient } from '../../shared/services/api'
import { IRandomUser } from '../../shared/interfaces'
import { BasicLayout } from '../../shared/layout'

export const RandomUser = () => {
  const [search] = useSearchParams()

  const getRandomUsers = useQuery<IRandomUser[]>(
    ['random-user', search.toString()],
    () =>
      apiClient
        .get('random-user', {
          params: search
        })
        .then(res => res.data),
    {
      staleTime: 120000
    }
  )

  const randomUsers = useMemo(
    () => getRandomUsers.data ?? [],
    [getRandomUsers.data]
  )

  const onChange = (changePage: number) => {
    // eslint-disable-next-line no-console
    console.log(changePage)
  }

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
