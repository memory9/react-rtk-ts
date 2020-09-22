import React, { lazy, Suspense, useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import { useDispatch } from 'react-redux'
import { getUserInformation } from './utils/requests'
// import http from './utils/fetch'
import { modifyUserInfo } from './slices/mine'

const Home = lazy(() => import('./App'))

const Routes: React.FC = () => {
  const [shouldRender, setRender] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    const getUserInfo = () => {
      getUserInformation()
        .then((res) => {
          dispatch(modifyUserInfo(res))
        })
        .catch(() => {
          dispatch(modifyUserInfo(null))
        })
        .finally(() => {
          setRender(true)
        })
    }

    // http.instance.interceptors.response.use((response) => response)
    // setTokens(tokens.concat([PubSub.subscribe()]))
    getUserInfo()
  }, [dispatch])

  if (!shouldRender) {
    return null
  }

  return (
    <Suspense fallback={<div>Loading</div>}>
      <Route path="/" component={Home} exact strict />
    </Suspense>
  )
}

export default hot(Routes)
