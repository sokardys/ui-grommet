import React from 'react'
import RCTooltip from 'rc-tooltip'
import 'rc-tooltip/assets/bootstrap_white.css'

import {
  Box,
  Text
} from 'grommet'

export const Tooltip = ({ children, title, content, boxConfig = {}, ...props }) => {
  const options = {
    placement: 'left',
    trigger: 'click',
    mouseEnterDelay: 0,
    mouseLeaveDelay: 0.3,
    ...props
  }

  const composeContent = () =>
    <Box
      direction='column'
      pad='none'
      gap='xsmall'
      width='small'
      {...boxConfig}
    >
      {title && <Box><Text weight='bold'>{title}</Text></Box>}
      <Box><Text>{content}</Text></Box>
    </Box>

  return (
    <RCTooltip
      {...options}
      arrowContent={<div className='rc-tooltip-arrow-inner' />}
      overlay={composeContent()}
    >
      {children}
    </RCTooltip>
  )
}
