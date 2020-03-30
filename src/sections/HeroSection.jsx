import React from 'react'
import {
  Grid,
  Section
} from '..'

export const HeroSection = ({
  cells,
  gridConfig = {},
  ...props
}) =>
  <Section pad='large' gap='medium' {...props}>
    <Grid
      rows={['auto']}
      {...gridConfig}
      cells={cells}
    />
  </Section>
