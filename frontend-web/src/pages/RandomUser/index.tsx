import { useSearchParams } from 'react-router-dom'
import { useQuery } from 'react-query'

import { Card, ListingTool, Pagination } from '../../shared/components'
import { IGetRandomUsersResponse } from '../../shared/interfaces'
import { apiClient } from '../../shared/services/api'
import { BasicLayout } from '../../shared/layout'

import './RandomUser.css'

export const RandomUser = () => {
  const [search, setSearch] = useSearchParams({
    page: '1',
    limit: '9'
  })

  const getRandomUsers = useQuery<IGetRandomUsersResponse>(
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

  const randomUsers = getRandomUsers.data?.randomUsers ?? []
  const total = getRandomUsers.data?.total ?? 0

  const onChange = (changePage: number) => {
    // eslint-disable-next-line no-console
    console.log(changePage)
    search.set('page', changePage.toString())
    setSearch(search, {
      replace: true
    })
  }

  return (
    <BasicLayout
      toolbar={<ListingTool />}
      pagination={
        <Pagination
          page={Number(search.get('page'))}
          limit={Number(search.get('limit'))}
          length={total}
          onChangePage={onChange}
        />
      }
    >
      <div className="grid">
        {randomUsers.map(randomUser => (
          <Card key={randomUser.login.uuid} randomUser={randomUser} />
        ))}
      </div>
    </BasicLayout>
  )
}
