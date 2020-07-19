import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'

import {
  Button,
  Text
} from 'grommet'

import { Update } from 'grommet-icons'

import {
  getIcon
} from '../icons/Icons'

const spin = keyframes`
  100% {
    transform:rotate(360deg)
  }
`

const RotateUpdate = styled(Update)`
  animation: ${spin} 4s linear infinite;
`

const TIMEOUT_DEFAULT = 30000

export const TimedButton = ({
  disabled,
  timeout = TIMEOUT_DEFAULT,
  onClick,
  icon,
  label,
  labelDisabled,
  labelConfig = {},
  iconConfig = {},
  ...props
}) => {
  const [timeoutDisabled, setTimeoutDisabled] = useState(false)
  const Icon = icon ? getIcon(icon) : undefined

  const isDisabled = disabled || timeoutDisabled

  const clickFn = async () => {
    if (isDisabled) return
    setTimeoutDisabled(true)
    onClick()
    setTimeout(() => {
      setTimeoutDisabled(false)
    }, timeout)
  }

  return (
    <Button
      {...props}
      disabled={isDisabled}
      onClick={clickFn}
      icon={timeoutDisabled ? <RotateUpdate {...iconConfig} /> : Icon ? <Icon {...iconConfig} /> : Icon}
      label={<Text {...labelConfig}>{timeoutDisabled ? labelDisabled || label : label}</Text>}
    />
  )
}

TimedButton.displayName = 'TimedButton'
TimedButton.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  timeout: PropTypes.number,
  label: PropTypes.string.isRequired,
  labelDisabled: PropTypes.string
}
