import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type DeviceType = 'pc' | 'tab' | 'sp'
export type Terminal = {
  isLegacy: boolean
  deviceType: DeviceType
}

export type RouteType = {
  isFirst: boolean
  loading: boolean
}

export type AppState = {
  terminal: Terminal
  route: RouteType
}

const AppInitialState: AppState = {
  terminal: {
    isLegacy: undefined,
    deviceType: undefined
  },
  route: {
    isFirst: true,
    loading: true
  }
}

const AppModule = createSlice({
  name: 'app',
  initialState: AppInitialState,
  reducers: {
    updateTerminal: (
      state: AppState,
      action: PayloadAction<Terminal>
    ): AppState => ({
      ...state,
      terminal: action.payload
    })
  }
})

export { AppModule }
