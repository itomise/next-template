import {
  configureStore,
  getDefaultMiddleware,
  EnhancedStore
} from '@reduxjs/toolkit'
import { rootReducer } from './modules/rootState'
import logger from 'redux-logger'

export const setupStore = (): EnhancedStore => {
  const middlewares = [...getDefaultMiddleware()]

  // only development
  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
  }

  return configureStore({
    reducer: rootReducer,
    middleware: middlewares,
    devTools: true
  })
}
