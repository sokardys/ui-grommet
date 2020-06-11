import React, { useReducer, useContext } from 'react'
import PropTypes from 'prop-types'
import { useDebounce } from 'use-debounce'
import { useEffectAfterMount } from '../hooks'
import Button from './Button'
import Content from './Content'

const ModalContext = React.createContext()

const defaultState = {
  on: false,
  key: undefined
}

const actions = {
  toggle: key => ({
    type: 'toggle',
    payload: {
      key
    }
  })
}

const mainReducer = (state, action) => {
  switch (action.type) {
    case 'toggle':
      return toggle(state, action.payload)
    default:
      console.log('ModalProvider - mainReducer', action)
      return state
  }
}

const toggle = (state, { key }) => {
  if (state.key === key) {
    return {
      ...state,
      on: false,
      key: undefined
    }
  }
  return {
    ...state,
    on: true,
    key: key
  }
}

export const Modal = ({ active = false, onToggle, children }) => {
  const [state, dispatch] = useReducer(mainReducer, { ...defaultState, on: active })

  const [debounceOn] = useDebounce(state.on, 200)

  useEffectAfterMount(() => {
    onToggle && onToggle(debounceOn, state.key)
  }, [debounceOn, state.key])

  return (
    <ModalContext.Provider value={{
      state,
      dispatch,
      actions
    }}
    >
      {children}
    </ModalContext.Provider>
  )
}

Modal.propTypes = {
  active: PropTypes.bool,
  onToggle: PropTypes.func,
  children: PropTypes.node.isRequired
}

Modal.Button = Button
Modal.Content = Content

export const useModalContext = () => {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error('useModalContext must be used within a <ModalProvider />')
  }
  return context
}
