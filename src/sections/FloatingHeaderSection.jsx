import React from 'react'

import { Floating } from '../floating/Floating'
import { Header } from '../header/Header'

export const FloatingHeaderSection = ({
  gap,
  ...props
}) =>
  <Floating gap={gap}>
    <Header {...props} />
  </Floating>
