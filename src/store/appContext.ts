import { createContext, Dispatch, useReducer } from 'react'

type State = {
  launch: boolean
  loading: boolean
  count: number
}

const initialState: State = {
  launch: false,
  loading: false,
  count: 0,
}

type Action =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'LAUNCH' }
  | { type: 'SET_LOADING'; value: boolean }

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'LAUNCH':
      return {
        ...state,
        launch: true,
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.value,
      }
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      }
    default:
      return state
  }
}

export const AppContext = createContext(
  {} as {
    appState: State
    appDispatch: Dispatch<Action>
  },
)

export const useAppReducer = (): [State, Dispatch<Action>] =>
  useReducer(reducer, initialState)
