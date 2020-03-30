import React from 'react'

import {
  Text
} from 'grommet'

export const Description = ({
  children,
  description,
  ...props
}) =>
  <Text
    textAlign='center'
    {...props}
  >
    {children || description}
  </Text>
