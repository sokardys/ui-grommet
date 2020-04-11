import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Box } from 'grommet'
import { useScrollPosition } from '../hooks'

export const Floating = styled(({ className, children, gap = 200, debug = false, ...props }) => {
  const [show, setShow] = useState(false)

  useScrollPosition(({ prevPos, currPos }) => {
    if (debug) console.log('Floating', currPos)
    const mustShow = Math.abs(currPos.y) > gap
    if (mustShow && !show) {
      setShow(true)
    }
    if (!mustShow && show) {
      setShow(false)
    }
  }, [show])

  return (
    <Box className={`${className} ${show ? 'show' : ''}`} {...props}>
      {children}
    </Box>
  )
})`
  position: fixed;
  transition: all 0.5s;
  left: 0;
  z-index: 10;
  ${({ position = 'top' }) => {
    if (position === 'top') {
      return `
        top: -300px;
        width: 100%;
        &.show {
          top: 0;
        }
      `
    }
    return `
        bottom: -300px;
        width: auto;
        &.show {
          bottom: 0;
        }
      `
  }}
`

Floating.displayName = 'Floating'
Floating.propTypes = {
  className: PropTypes.string,
  gap: PropTypes.number,
  position: PropTypes.string
}
