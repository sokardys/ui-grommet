import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'grommet'
import { useModalContext } from './useModalContext'

const ModalAction = ({ onClick, Component = Button, forId, ...props }) => {
  const { actions, dispatch } = useModalContext()

  const toggle = key => {
    dispatch(actions.toggle(key))
  }

  return (
    <Component
      onClick={() => {
        toggle(forId)
        onClick && onClick()
      }}
      {...props}
    />
  )
}

ModalAction.displayName = 'Modal.Action'
ModalAction.propTypes = {
  forId: PropTypes.string,
  onClick: PropTypes.func
}

export default ModalAction
