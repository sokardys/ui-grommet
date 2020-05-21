import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Layer } from 'grommet'
import { useModalContext } from './Modal'

const MyLayer = styled(Layer)`
  background: transparent;
  padding: 2em 0.5em;
`

const ModalContent = ({
  id,
  children,
  onEsc,
  onClickOutside,
  disableEsc,
  disableClickOutside,
  ...props
}) => {
  const { state: { on, key }, actions, dispatch } = useModalContext()
  const isOn = key === id && on
  const myToggle = () => {
    dispatch(actions.toggle(id))
    return true
  }

  const myToggleWrapper = (fn, disable = false) => () => {
    !disable && myToggle() && fn && fn()
  }

  if (isOn) {
    return (
      <MyLayer
        onEsc={myToggleWrapper(onEsc, disableEsc)}
        onClickOutside={myToggleWrapper(onClickOutside, disableClickOutside)}
        {...props}
      >
        {
          typeof (children) === 'function'
            ? children({ on, toggle: myToggle })
            : children
        }
      </MyLayer>
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
