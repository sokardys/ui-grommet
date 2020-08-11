import React from 'react'
import styled from 'styled-components'

import {
  Box
} from 'grommet'

import { Slider } from '../components/Slider'
import { Page } from '../components/Page'
import { QuoteCard } from '../components/QuoteCard'

export default { title: 'Slider' }

const Body = styled.div`
  font-family: 'Nunito Sans';
  background: #cccccc;
  height: 100vh;
`

const quotes = [
  {
    avatar: 'https://elixir.app/assets/img/testimonials/laura.JPG',
    quot: 'The minimalism makes Elixir powerful & robust',
    name: 'Laura Palma',
    headline: 'UX Desginer',
    socialIcon: 'Instagram',
    socialUrl: 'https://instagram.com/laurapalma9?igshid=1ufajee0xf834'
  }, {
    avatar: 'https://elixir.app/assets/img/testimonials/angel.jpeg',
    quot: 'It covers all bases for indie game developers',
    name: 'Angel Guastaferro',
    headline: 'Game Developer',
    socialIcon: 'Gamepad',
    socialUrl: 'https://papitomyking.itch.io/'
  }, {
    avatar: 'https://elixir.app/assets/img/testimonials/carlos.jpg',
    quot: 'I fell in love with the design immediately, the best',
    name: 'Carlos Borlado',
    headline: 'Business Owner',
    socialIcon: 'Linkedin',
    socialUrl: 'https://www.linkedin.com/in/carlos-borlado-5b833011/'
  }, {
    avatar: 'https://elixir.app/assets/img/testimonials/alberto.jpeg',
    quot: 'Very clean & sophisticated UI',
    name: 'Alberto Scano',
    headline: 'Visual Designer',
    socialIcon: 'Facebook',
    socialUrl: 'https://www.facebook.com/alfakappaofficial/'
  }, {
    avatar: 'https://elixir.app/assets/img/testimonials/diego.jpeg',
    quot: 'Elixir has the potential to change the future of many indie developers',
    name: 'Diego Ruiz',
    headline: 'Game Developer'
  }
]

export const Default = () =>
  <Page>
    <Body>
      <Box background='dark-1'>
        <Slider>
          {quotes.map(quote =>
            <QuoteCard
              key={`quote-${quote.name}`}
              width='300px'
              height='300px'
              margin='small'
              {...quote}
            />
          )}
        </Slider>
      </Box>
    </Body>
  </Page>
