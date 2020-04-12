import React from 'react'
import styled from 'styled-components'
import {
  Image
} from 'ui-grommet'

import {
  Box
} from 'grommet'

export const Logo = styled(({ src, ...props }) =>
  <Box

    {...props}
  >
    <Image
      lazy={false}
      fill
      fit='contain'
      src={src}
    />
  </Box>
)`
  max-width: 75%;
`
