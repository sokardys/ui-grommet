import React from 'react'
import styled from 'styled-components'

import {
  Box
} from 'grommet'

import { Cell } from './Cell'
import { Page } from '../page/Page'

export default { title: 'Cell' }

const imageConfig = {
  background: 'light-3',
  title: 'Amplia tu margen',
  src: 'https://picsum.photos/seed/picsum/200/300',
  description: 'La única solución en la que tú decides si repercutes el precio del servicio en tu cliente',
  imageConfig: {
    fit: 'cover',
    boxConfig: {
      fill: 'horizontal',
      height: 'small'
    }
  }
}

const Body = styled.div`
  font-family: 'Nunito Sans';
  background: black;
  height: 100vh;
`

const theme = {
  global: {
    font: {
      family: 'Nunito Sans'
    }
  },
  heading: {
    level: {
      4: {
        maxWidth: 1152
      }
    }
  }
}

export const Default = () =>
  <Page theme={theme}>
    <Body>
      <Box width='medium'>
        <Cell {...imageConfig} />
      </Box>
    </Body>
  </Page>

export const TitleOnTop = () =>
  <Page theme={theme}>
    <Body>
      <Box width='medium'>
        <Cell {...imageConfig} top />
      </Box>
    </Body>
  </Page>

const withCTA = {
  ...imageConfig,
  cta: {
    label: 'CTA',
    href: '/'
  }
}

export const WithCTA = () =>
  <Page theme={theme}>
    <Body>
      <Box width='medium'>
        <Cell {...withCTA} />
      </Box>
    </Body>
  </Page>

const withIcons = {
  ...imageConfig,
  icons: [{
    icon: 'Github',
    href: 'https://www.github.com/',
    iconConfig: {
      size: 'large'
    }
  }, {
    icon: 'Twitter',
    href: 'https://www.twitter.com/',
    iconConfig: {
      size: 'large'
    }
  }, {
    icon: 'Linkedin',
    href: 'https://www.linkedin.com/',
    iconConfig: {
      size: 'large'
    }
  }],
  iconsConfig: {
    gap: 'medium'
  }
}

export const WithIcons = () =>
  <Page theme={theme}>
    <Body>
      <Box width='medium'>
        <Cell {...withIcons} />
      </Box>
    </Body>
  </Page>
