import React from 'react'
import styled from 'styled-components'

import { Box } from 'grommet'

import { PopoverBox } from '../components/PopoverBox'
import { Page } from '../components/Page'

export default { title: 'PopoverBox' }

const Body = styled.div`
  font-family: 'Nunito Sans';
  background: black;
  height: 100vh;
`

const tips = [
  {
    top: '45%',
    left: '20%',
    title: 'Asset Preview (default-right)',
    content: 'Overview the in-game assets and features within the same game page. Avoid confussion by knowing what you are buying from visually to conceptually.'
  }, {
    top: '16%',
    left: '65%',
    title: 'Tabs (left)',
    content: 'Move along the game features and assets intuitively from the store tabs.',
    placement: 'left'
  }, {
    top: '82%',
    left: '48%',
    title: '1-Click Purchase (top)',
    content: 'Buying in-game assets is lightning fast using bitcoin lightning network or normal payments. It does not take longer than 1 click to have your purchased items in your account.',
    placement: 'top'
  }
]

export const Default = () =>
  <Page>
    <Body>
      <Box width='large' height='medium'>
        <PopoverBox tips={tips}>
          <Box
            background='light-1'
            align='center'
            justify='center'
            border='all'
            round='small'
            fill
          >
            CONTENT
          </Box>
        </PopoverBox>
      </Box>
    </Body>
  </Page>
