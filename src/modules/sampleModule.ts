import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type SampleState = {
  value: string
}

export const sampleInitialState: SampleState = {
  value: ''
}

const sampleModule = createSlice({
  name: 'sample',
  initialState: sampleInitialState,
  reducers: {
    update: (state: SampleState, action: PayloadAction<string>) => {
      return { value: action.payload }
    }
  }
})

export default sampleModule
