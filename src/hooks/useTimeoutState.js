import { useState } from 'react'

export const useTimeoutState = (defaultState, timeout = 5000) => {
  const [state, setState] = useState(defaultState)

  const changed = state !== defaultState

  const setTemporalState = state => {
    setState(state)
    setTimeout(() => {
      setState(defaultState)
    }, timeout)
  }

  return [state, setTemporalState, changed]
}
