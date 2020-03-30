import React from 'react'

import {
  Floating,
  Header
} from '..'

export const FloatingHeaderSection = ({
  gap,
  ...props
}) =>
  <Floating gap={gap}>
    <Header {...props} />
  </Floating>
