import React, { useContext } from 'react'
import styled from 'styled-components'
import RCTooltip from 'rc-tooltip'

import {
  Box,
  Text,
  ThemeContext
} from 'grommet'

const CSSBox = styled(Box)`
  ${({ css }) => css}
`

export const Tooltip = ({ className, children, title, content, boxConfig = {}, textConfig = {}, ...props }) => {
  const theme = useContext(ThemeContext)

  const options = {
    placement: 'left',
    trigger: 'click',
    mouseEnterDelay: 0,
    mouseLeaveDelay: 0.3,
    ...props
  }

  const composeContent = () =>
    <CSSBox
      className={className}
      direction='column'
      pad='none'
      gap='xsmall'
      width='small'
      {...boxConfig}
      css={`font-family: ${theme.global.font.family};`}
    >
      {title && <Box><Text {...textConfig} weight='bold'>{title}</Text></Box>}
      <Box><Text {...textConfig} weight='normal'>{content}</Text></Box>
    </CSSBox>

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
