import React from 'react'
import styled from 'styled-components'

import { Box } from 'grommet'
import { useParallax } from '../useParallax'

export const Boxx = styled(({ className, children, parallax, parallaxConfig = {}, ...props }) => {
  const [isActive, composeContainer] = useParallax({
    type: parallax,
    config: parallaxConfig
  })

  return (
    <Box className={className} pad='none' {...props}>
      {isActive && composeContainer()}
      {children}
    </Box>
  )
})`
  position: relative;
  & *:not(.jarallax){
    z-index: 1;
  }
`
