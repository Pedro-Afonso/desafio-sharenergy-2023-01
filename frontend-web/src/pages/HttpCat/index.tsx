import { useEffect, useState } from 'react'

import { apiClient } from '../../shared/services/api'
import { BasicLayout } from '../../shared/layout'
import { ListingTool, Select } from '../../shared/components'

import './HttpCat.css'
import { useDebounce } from '../../shared/hooks'

export const HttpCat = () => {
  const [statusCode, setStatusCode] = useState('402')
  const [image, setImage] = useState<string | null>(null)
  const debouncedStatusCode = useDebounce(statusCode)

  useEffect(() => {
    apiClient
      .get(`http-cat/${debouncedStatusCode}`)
      .then(res => setImage(res.data))
      // eslint-disable-next-line no-console
      .catch(err => console.log(err))
  }, [debouncedStatusCode])

  const options = Array.from({ length: 500 }, (_, index) => index + 100)

  return (
    <BasicLayout
      title="Http Cat"
      toolbar={
        <ListingTool
          hasSearch={false}
          hasNewButton={false}
          select={
            <Select
              options={options}
              value={statusCode}
              onChange={setStatusCode}
            />
          }
        />
      }
    >
      <div className="cat-wrapper">
        <img className="cat-image" src={image ?? undefined} alt="Status code" />
      </div>
    </BasicLayout>
  )
}
