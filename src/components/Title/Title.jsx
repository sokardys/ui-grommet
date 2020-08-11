import React from 'react'

import {
  Box,
  Heading
} from 'grommet'

export const Title = ({
  children,
  title,
  boxConfig,
  ...props
}) => {
  const composeHeading = () =>
    <Heading
      level='2'
      margin='small'
      alignSelf='center'
      {...props}
    >
      {children || title}
    </Heading>

  if (boxConfig) {
    return (
      <Box alignSelf='center' {...boxConfig}>
        {composeHeading()}
      </Box>
    )
  }

  return composeHeading()
}
