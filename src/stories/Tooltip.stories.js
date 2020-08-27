import React from 'react'
import styled from 'styled-components'

import {
  Box,
  Text
} from 'grommet'
import { Tooltip } from '../components/Tooltip'
import { Page } from '../components/Page'
import { Section } from '../components/Section'

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
