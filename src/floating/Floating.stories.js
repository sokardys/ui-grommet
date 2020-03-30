
import React from 'react'
import styled from 'styled-components'

import {
  Box,
  Heading
} from 'grommet'

import { Floating } from './Floating'

const Page = styled.div`
  margin: 0;
  height: 200rem;
  background-color: black;
`
export default { title: 'Floating' }

export const DefaultGap200 = () =>
  <Page>
    <Floating>
      <Box background='brand' pad='medium'>Floating Header</Box>
    </Floating>
    <Box height='200px' pad='none' align='center' background='light-4'>
      <Heading margin='xlarge'>HEADER</Heading>
    </Box>
  </Page>

export const Gap50 = () =>
  <Page>
    <Floating gap={50}>
      <Box background='brand' pad='medium'>Floating Header</Box>
    </Floating>
    <Box height='50px' pad='none' align='center' background='light-4'>
      <Heading margin='small'>HEADER</Heading>
    </Box>
  </Page>
