import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import rootReducer from './reducers'
import { devEnv } from './utils/env'

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware()
    if (devEnv) {
      return middlewares.concat(logger)
    }

    return middlewares
  },
  devTools: devEnv,
})

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>

export default store
