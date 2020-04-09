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
  <Section
    pad='large'
    gap='medium'
    margin={{ top: '-1px' }}
    {...props}
  >
    <Grid
      rows={['auto']}
      {...gridConfig}
      cells={cells}
    />
  </Section>
