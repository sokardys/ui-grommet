import React from 'react'
import styled from 'styled-components'

import {
  Box
} from 'grommet'

import { Badge } from './Badge'

import {
  Page
} from '..'

export default { title: 'Badge' }

const Body = styled.div`
  font-family: 'Nunito Sans';
  background: white;
  height: 100vh;
`

const defaultValues = {
  background: 'brand',
  animation: 'fadeIn'
}

export const Default = () =>
  <Page>
    <Body>
      <Box
        pad='small'
        width='large'
        background='light-1'
      >
        <Badge
          {...defaultValues}
        >
          Recomendacion
        </Badge>
      </Box>
    </Body>
  </Page>

export const WithCount = () =>
  <Page>
    <Body>
      <Box
        pad='small'
        width='large'
        background='light-1'
      >
        <Badge
          count={3}
          {...defaultValues}
        >
          Emails
        </Badge>
      </Box>
    </Body>
  </Page>

export const MultipleBadges = () =>
  <Page>
    <Body>
      <Box
        pad='small'
        width='large'
        background='light-1'
        /* The trick */
        gap='xsmall'
        direction='rom'
      >
        <Badge
          {...defaultValues}
        >
          Recomendacion
        </Badge>
        <Badge
          count={3}
          {...defaultValues}
        >
          Emails
        </Badge>
      </Box>
    </Body>
  </Page>
