import React from 'react'
import styled from 'styled-components'
import 'rc-tooltip/assets/bootstrap_white.css'

import {
  Box,
  Text
} from 'grommet'
import { Tooltip } from './Tooltip'
import { Page } from '../page'
import { Section } from '../section'

export default { title: 'Tooltip' }

const Body = styled.div`
  font-family: 'Nunito Sans';
  background: black;
  height: 100vh;
`

export const Default = () =>
  <Page>
    <Body>
      <Section background='light-1'>
        <Tooltip
          title='Un titulo lo suficiente largo para que salga en dos filas'
          content='Este es el mensaje'
        >
          <Box
            width='small'
            height='small'
            border='all'
            round='small'
            justify='center'
          >
            <Text
              weight='bold'
              textAlign='center'
              size='large'
            >
              Vamos
            </Text>
          </Box>
        </Tooltip>
      </Section>
    </Body>
  </Page>
