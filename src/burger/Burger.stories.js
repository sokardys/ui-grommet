import React from 'react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import {
  grommet,
  Grommet
} from 'grommet'

import { Burger } from './Burger'

export default {
  title: 'Burger',
  decorators: [withKnobs]
}

export const Default = () =>
  <Grommet theme={grommet}>
    <Burger
      lineHeight='5px'
      cross={boolean('Open?', false)}
      color='accent-2'
    />
  </Grommet>
