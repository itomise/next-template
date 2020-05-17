import { combineReducers } from '@reduxjs/toolkit'
// サンプルを追加するのであれば読み込む
import sampleModule, { SampleState } from './sampleModule'

export interface RootState {
  // サンプルを追加するのであれば記述
  sample: SampleState
}

export const rootReducer = combineReducers({
  // サンプルを追加するのであれば記述
  sample: sampleModule.reducer
})
