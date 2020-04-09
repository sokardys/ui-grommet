import React from 'react'

import {
  Box,
  Text
} from 'grommet'

export const Description = ({
  children,
  description,
  boxConfig,
  ...props
}) => {
  const composeText = () =>
    <Text
      textAlign='center'
      {...props}
    >
      {children || description}
    </Text>

  if (boxConfig) {
    return (
      <Box alignSelf='center' {...boxConfig}>
        {composeText()}
      </Box>
    )
  }

  return composeText()
}
