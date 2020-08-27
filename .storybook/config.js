import { configure } from '@storybook/react'

import '../src/style.sass';

configure(require.context('../src/stories', true, /\.stories\.jsx?$/), module)
