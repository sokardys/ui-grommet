import React from 'react'
import styled from 'styled-components'

import { Box } from 'grommet'

import { getIcon } from '../icons/Icons'
import { Tooltip } from '../tooltip/Tooltip'

const RelativeBox = styled(Box)`
  position: relative;
`
const Pulse = styled(getIcon('Pulse'))`
  position: absolute;
  top: ${({ top = '' }) => top};
  left: ${({ left = '' }) => left};
  cursor: pointer;
`

const composePulse = ({ index, top, left, size = 'large', color = 'brand', ...props }) =>
  <Tooltip
    key={`pulse-${index}`}
    boxConfig={{ width: 'medium' }}
    {...props}
  >
    <Pulse top={top} left={left} size={size} color={color} />
  </Tooltip>

export const PopoverBox = ({ tips = [], children, ...props }) => {
  return (
    <RelativeBox fill {...props}>
      {children}
      {tips.map((tip, index) => composePulse({ ...tip, index }))}
    </RelativeBox>
  )
}
