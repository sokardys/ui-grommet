import React from 'react'
import styled from 'styled-components'

import {
  Box
} from 'grommet'

import { ImageBlock } from './ImageBlock'
import { Page } from '../page/Page'

export default { title: 'Image Block' }

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
        <ImageBlock {...imageConfig} />
      </Box>
    </Body>
  </Page>

export const TitleOnTop = () =>
  <Page theme={theme}>
    <Body>
      <Box width='medium'>
        <ImageBlock {...imageConfig} top />
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
        <ImageBlock {...withCTA} />
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
        <ImageBlock {...withIcons} />
      </Box>
    </Body>
  </Page>
