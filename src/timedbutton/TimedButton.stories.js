import React from 'react'
import styled from 'styled-components'

import { Box } from 'grommet'
import { TimedButton } from './TimedButton'
import {
  Page
} from '..'

export default { title: 'TimedButton' }

const Body = styled.div`
  font-family: 'Nunito Sans';
  background: black;
  height: 100vh;
`

const defaultProps = {
  label: 'Enviar código',
  timeout: 5000,
  onClick: () => console.log('Enviando!')
}

export const Default = () =>
  <Page>
    <Body>
      <Box width='medium' pad='small' background='light-1'>
        <TimedButton
          {...defaultProps}
        />
      </Box>
    </Body>
  </Page>

export const WithAdditionalConfig = () =>
  <Page>
    <Body>
      <Box width='medium' pad='small' background='light-1'>
        <TimedButton
          {...defaultProps}
          labelDisabled='Revisa tu e-mail'
          reverse
          primary
          icon='MailOption'
          labelConfig={{
            truncate: true,
            color: 'light-1',
            weight: 'bold'
          }}
        />
      </Box>
    </Body>
  </Page>
