/* eslint-disable react/jsx-fragments */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Layer } from 'grommet'
import { useModalContext } from './useModalContext'

import {
  getIcon,
  circleIcon
} from '../Icons'

const MyLayer = styled(Layer)`
  background: transparent;
  overflow: hidden;
`

const CloseIcon = styled(({ className, closeFn }) =>
  circleIcon({
    className,
    Icon: getIcon('Close'),
    height: '3rem',
    width: '3rem',
    onClick: closeFn,
    hoverIndicator: true,
    margin: 'small'
  })
)`
  position: fixed;
  right: 0;
  top: 0;
  z-index: 20;
`

const ModalContent = ({
  id,
  children,
  onEsc,
  onClickOutside,
  disableEsc,
  disableClickOutside,
  showCloseIcon = true,
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

  const isRenderProps = typeof (children) === 'function'

  if (isOn) {
    return (
      <React.Fragment>
        {showCloseIcon && <CloseIcon closeFn={myToggle} />}
        <MyLayer
          onEsc={myToggleWrapper(onEsc, disableEsc)}
          onClickOutside={myToggleWrapper(onClickOutside, disableClickOutside)}
          {...props}
        >

          {
            isRenderProps
              ? children({ on, toggle: myToggle })
              : children
          }
        </MyLayer>
      </React.Fragment>
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
