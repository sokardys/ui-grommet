import React from 'react'
import styled from 'styled-components'

import { ImageBlock } from './ImageBlock'
import { Page } from '../page/Page'
import { Grid } from '../grid/Grid'

export default { title: 'Image Block' }

const imageConfig = {
  background: 'light-3',
  title: 'Amplia tu margen',
  src: 'https://picsum.photos/seed/picsum/200/300',
  description: 'La única solución en la que tú decides si repercutes el precio del servicio en tu cliente'
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
      <Grid margin='medium'>
        <ImageBlock {...imageConfig} />
      </Grid>
    </Body>
  </Page>

export const TitleOnTop = () =>
  <Page theme={theme}>
    <Body>
      <Grid margin='medium'>
        <ImageBlock {...imageConfig} top />
      </Grid>
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
      <Grid margin='medium'>
        <ImageBlock {...withCTA} />
      </Grid>
    </Body>
  </Page>
