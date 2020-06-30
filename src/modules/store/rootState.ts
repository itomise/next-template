import { combineReducers } from '@reduxjs/toolkit'
import { AppState, AppModule } from './appModule'

export interface RootState {
  app: AppState
}

export const rootReducer = combineReducers({
  app: AppModule.reducer
})
