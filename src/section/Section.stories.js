
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

export const WithParallaxImage = () =>
  <Page>
    <Section
      align='center'
      title='Titulo de la Sección'
      parallax='//i.pinimg.com/originals/9c/69/84/9c69843107ad62dde66d3f81993d4eb7.jpg'
    >
      <Box pad='medium' align='center'>
        <Text align='center' size='large' color='accent-2' weight='bold'>
          the more content the section has,<br />the stronger<br />the effect
        </Text>
      </Box>
    </Section>
    <Section
      align='center'
      title='Must another Section'
      background='dark-1'
    >
      <Box pad='medium'>
        <Text>Other Section</Text>
      </Box>
    </Section>
  </Page>

export const WithParallaxVideo = () =>
  <Page>
    <Section
      align='center'
      title='Titulo de la Sección'
      parallax='video'
      parallaxConfig={{
        videoSrc: 'https://www.youtube.com/watch?v=FMF1vMcCWzQ',
        speed: 0.2
      }}
    >
      <Box pad='medium' align='center'>
        <Text align='center' size='large' color='accent-2' weight='bold'>
        the more content the section has,<br />the stronger<br />the effect
        </Text>
      </Box>
    </Section>
    <Section
      align='center'
      title='Must another Section'
      background='dark-1'
    >
      <Box pad='medium'>
        <Text>Other Section</Text>
      </Box>
    </Section>
  </Page>

export const WithWaves = () =>
  <Page>
    <Section
      align='center'
      title='Section 1'
      background='light-1'
    >
      <Box pad='medium'>
        <Text>Sample Content</Text>
      </Box>
    </Section>
    <Section
      align='center'
      title='Waves Sample'
      background='dark-1'
      waves={{
        top: '<svg viewBox="0 0 1440 160" xmlns="http://www.w3.org/2000/svg"><path fill="#F8F8F8" fill-opacity="1" d="M0,160L80,149.3C160,139,320,117,480,112C640,107,800,117,960,117.3C1120,117,1280,107,1360,101.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"/></svg>',
        bottom: '<svg viewBox="0 179.263 1440 140.737" xmlns="http://www.w3.org/2000/svg"><path fill="#7D4CDB" fill-opacity="1" d="M0,256L80,266.7C160,277,320,299,480,282.7C640,267,800,213,960,192C1120,171,1280,181,1360,186.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"/></svg>'
      }}
    >
      <Box pad='medium'>
        <Text>
          Use https://getwaves.io/ to generate the desired shape.
          <br /><br />
          After downloading it, you will have to adjust the svg to avoid transparent space. The maximum height should correspond to the wave' height
        </Text>
      </Box>
    </Section>
    <Section
      align='center'
      title='Section 3'
      background='brand'
    >
      <Box pad='medium'>
        <Text>Sample Content </Text>
      </Box>
    </Section>
  </Page>
