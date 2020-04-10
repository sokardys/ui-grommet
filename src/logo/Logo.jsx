import React from 'react'
import {
  Image
} from 'ui-grommet'

import {
  Box
} from 'grommet'

export const Logo = ({ src, ...props }) =>
  <Box
    pad='small'
    {...props}
  >
    <Image
      lazy={false}
      fill
      fit='contain'
      src={src}
    />
  </Box>
