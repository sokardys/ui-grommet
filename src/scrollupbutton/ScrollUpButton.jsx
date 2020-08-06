import React from 'react'
import {
  Box,
  Anchor
} from 'grommet'
import { Up } from 'grommet-icons'
import { Floating } from '../floating/Floating'

export const ScrollUpButton = () => {
  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  return (
    <Floating position='bottom'>
      <Box
        background='accent-1'
        margin={{ left: 'medium' }}
        round={{ corner: 'top', size: 'small' }}
        hoverIndicator
        onClick={toTop}
      >
        <Anchor color='brand' icon={<Up />} />
      </Box>
    </Floating>
  )
}
