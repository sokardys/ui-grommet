import React from 'react'
import PropTypes from 'prop-types'
import { Layer } from 'grommet'
import { useModalContext } from './Modal'

const ModalContent = ({ id, children, onEsc, onClickOutside, ...props }) => {
  const { state: { on, key }, actions, dispatch } = useModalContext()
  const isOn = key === id && on
  const myToggle = () => {
    dispatch(actions.toggle(id))
    return true
  }

  const myToggleWrapper = fn => () => {
    console.log('myToggleWrapper', isOn, key)
    myToggle() && fn && fn()
  }

  if (isOn) {
    return (
      <Layer
        onEsc={myToggleWrapper(onEsc)}
        onClickOutside={myToggleWrapper(onClickOutside)}
        {...props}
      >
        {
          typeof (children) === 'function'
            ? children({ on, toggle: myToggle })
            : children
        }
      </Layer>
    )
  }
  return null
}

ModalContent.displayName = 'Modal.Content'
ModalContent.propTypes = {
  id: PropTypes.string.isRequired,
  onEsc: PropTypes.func,
  onClickOutside: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func
  ])
}

export default ModalContent
