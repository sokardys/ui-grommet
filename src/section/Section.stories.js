
import React from 'react'
import styled from 'styled-components'

import {
  Box,
  Text
} from 'grommet'

import { Section } from './Section'

const Page = styled.div`
  margin: 0;
  height: 200rem;
  background-color: yellow;
`
export default { title: 'Section' }

export const Default = () =>
  <Page>
    <Section background='light-2'>
      <Box background='brand' pad='medium'>
        <Text>Section Header</Text>
      </Box>
    </Section>
  </Page>

export const WithBackground = () =>
  <Page>
    <Section
      align='center'
      height='60em'
      background={{
        color: 'rgba(0, 0, 0, 0.9)',
        position: 'center',
        image: 'url(//d3q6lpeivwemor.cloudfront.net/images/background_services.jpg)'
      }}
    >
      <Box background='brand' pad='medium'>
        <Text>Section Header</Text>
      </Box>
    </Section>
  </Page>

export const WithTitle = () =>
  <Page>
    <Section
      align='center'
      background='rgba(0, 0, 0, 0.9)'
      title='Titulo de la Sección'
    >
      <Box background='brand' pad='medium'>
        <Text>Section Header</Text>
      </Box>
    </Section>
  </Page>

export const WithDescription = () =>
  <Page>
    <Section
      align='center'
      background={{
        color: 'rgba(0, 0, 0, 0.9)'
      }}
      title='Titulo de la Sección'
      description='El servicio de crypto a crypto no tiene coste. El traspaso a € tiene un coste del 2%, pero tú decides si lo quieres repercutir en tu cliente, por lo que pasaría a ser gratis para el comercio, para siempre.'
    >
      <Box background='brand' pad='medium'>
        <Text>Section Header</Text>
      </Box>
    </Section>
  </Page>
