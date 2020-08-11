import React from 'react'

import {
  Box,
  Text
} from 'grommet'

import { Grid } from '../components/Grid'
import { Page } from '../components/Page'

export default { title: 'Grid' }

const text = [
  'Blockchain: conceptos básicos y ampliación sobre ethereum',
  'Qué es y cómo usar la blackchain de NEM',
  'Certificación oficial NEM Catapult',
  'Master en Blockchain online',
  'Carrera de Blockchain y Criptomonedas',
  'Master presencial en Blockchain (Madrid y Barcelona)'
]

const contenido = () =>
  text.map((item, index) =>
    <Box
      pad='medium'
      key={`item-${index}`}
      background='light-3'
      border={{ color: 'brand', size: 'small' }}
    >
      <Text margin='medium'>{item}</Text>
    </Box>
  )

export const Default = () =>
  <Page>
    <Grid background='light-1'>
      {contenido()}
    </Grid>
  </Page>

export const WithConfigForSizes = () => {
  const columns = {
    small: ['1fr'],
    medium: ['.33fr', '.33fr', '.33fr'],
    default: ['.25fr', '.25fr', '.25fr', '.25fr']
  }

  return (
    <Page>
      <Grid columns={columns} margin='medium' gap='medium' background='light-1'>
        {contenido()}
      </Grid>
    </Page>
  )
}
