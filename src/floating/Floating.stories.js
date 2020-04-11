
import React from 'react'
import styled from 'styled-components'

import {
  Anchor,
  Box,
  Heading
} from 'grommet'

import {
  Deploy
} from 'grommet-icons'

import { Floating } from './Floating'

const Page = styled.div`
  margin: 0;
  height: 200rem;
  background-color: purple;
`
export default { title: 'Floating' }

const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

export const DefaultGap200 = () =>
  <Page>
    <Floating>
      <Box background='brand' pad='medium'>Floating Header</Box>
    </Floating>
    <Floating position='bottom'>
      <Box background='light-1' margin={{ left: 'medium' }} round={{ corner: 'top', size: 'small' }}>
        <Anchor icon={<Deploy />} onClick={toTop} />
      </Box>
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
