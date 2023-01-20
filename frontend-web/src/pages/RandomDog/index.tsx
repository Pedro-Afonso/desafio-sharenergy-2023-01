import { useState, useEffect } from 'react'

import { BasicLayout } from '../../shared/layout'

import axios from 'axios'

import './RandomDog.css'

export const RandomDog = () => {
  const [dogUrl, setDogUrl] = useState<string>('')

  const isImage = dogUrl.match(/[/.](gif|png|jpg|jpeg)$/i)
  const isVideo = dogUrl.match(/[/.](mp4)$/i)

  const fetchDog = () => {
    axios
      .get('https://random.dog/woof.json/')
      .then(res => setDogUrl(res.data.url))
      // eslint-disable-next-line no-console
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchDog()
  }, [])

  return (
    <BasicLayout
      toolbar={
        <button className="refresh" onClick={fetchDog}>
          Recarregar
        </button>
      }
    >
      <div className="random-dog">
        {isImage ? (
          <img
            className="image-dog"
            src={dogUrl ?? undefined}
            alt="Status code"
          />
        ) : null}
        {isVideo ? (
          <video className="video-dog" autoPlay loop muted>
            <source src={dogUrl} type="video/mp4" />
          </video>
        ) : null}
      </div>
    </BasicLayout>
  )
}
