import React from 'react'

import {
  Heading
} from 'grommet'

export const Title = ({
  children,
  title,
  ...props
}) =>
  <Heading
    level='2'
    margin='small'
    alignSelf='center'
    {...props}
  >
    {children || title}
  </Heading>
