import React from 'react'
import styled from 'styled-components'
import 'rc-tooltip/assets/bootstrap_white.css'

import { Box } from 'grommet'

import { TabNav } from '../components/TabNav'
import { Page } from '../components/Page'
import { Image } from '../components/Image'

export default { title: 'TabNav' }

const Body = styled.div`
  font-family: 'Nunito Sans';
  background: black;
  height: 100vh;
`

const tabs = [
  {
    icon: 'Gaming',
    title: 'INFORMATION',
    component: <Image src='https://elixir.app/assets/img/landing/games.png' />
  },
  {
    icon: 'Cart2',
    title: 'MARKETPLACE',
    component: <Image src='https://elixir.app/assets/img/landing/shop.png' />
  }
]

export const Default = () =>
  <Page>
    <Body>
      <Box width='xlarge' background='light-1' pad='medium'>
        <TabNav tabs={tabs} />
      </Box>
    </Body>
  </Page>
