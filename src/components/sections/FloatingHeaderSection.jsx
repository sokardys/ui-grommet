import React from 'react'

import { Floating } from '../Floating'
import { Header } from '../Header'

export const FloatingHeaderSection = ({
  gap,
  ...props
}) =>
  <Floating gap={gap}>
    <Header {...props} />
  </Floating>
