import React from 'react'
import {
  Box,
  Anchor
} from 'grommet'
import { Up } from 'grommet-icons'
import { Floating } from '../Floating'

export const ScrollUpButton = ({ gap = 500, Icon = Up }) => {
  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  return (
    <Floating position='bottom' gap={gap}>
      <Box
        background='accent-1'
        margin={{ left: 'medium' }}
        round={{ corner: 'top', size: 'small' }}
        hoverIndicator
        onClick={toTop}
      >
        <Anchor color='brand' icon={<Icon />} />
      </Box>
    </Floating>
  )
}
