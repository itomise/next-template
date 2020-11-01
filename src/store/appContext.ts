import { createContext, Dispatch, useReducer } from 'react'

type State = {
  count: number
}

type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' }

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}
const initialState: State = {
  count: 0
}

export const AppContext = createContext(
  {} as {
    appState: State
    appDispatch: Dispatch<Action>
  }
)

export const useAppReducer = (): [State, Dispatch<Action>] =>
  useReducer(reducer, initialState)
