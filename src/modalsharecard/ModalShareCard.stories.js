import React from 'react'
import styled from 'styled-components'

import { Text } from 'grommet'
import { ShareOption } from 'grommet-icons'

import { ModalShareCard } from './ModalShareCard'

import {
  Page,
  Modal
} from '..'

export default { title: 'ModalShareCard' }

const Body = styled.div`
  font-family: 'Nunito Sans';
  background: white;
  height: 100vh;
`

const props = {
  header: 'Compartir este curso',
  title: 'El titulo a compartir...',
  url: 'https://www.google.com'
}

export const Default = () =>
  <Modal>
    <Page>
      <Body>
        <Modal.Button forId='share' margin='small' icon={<ShareOption />} label={<Text>Share</Text>} />
        <ModalShareCard id='share' {...props} />
      </Body>
    </Page>
  </Modal>

