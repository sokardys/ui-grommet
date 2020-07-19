import React from 'react'
import { Box } from 'grommet'
import { Image } from '../image/Image'

export const Logo = ({ src, ...props }) =>
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
