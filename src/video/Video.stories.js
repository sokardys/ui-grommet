import React from 'react'
import styled from 'styled-components'

import {
  Box
} from 'grommet'

import {
  PlayFill
} from 'grommet-icons'

import { Video } from './Video'
import { Page } from '../page'
import { Section } from '../section'
import { Modal } from '../modal'

export default { title: 'Video' }

const PlayButton = props =>
  <Box
    alignSelf='center'
    background='brand'
    width='4.5rem'
    height='4.5rem'
    round='50%'
    margin={{ bottom: 'medium' }}
    justify='center'
    {...props}
  >
    <Box
      alignSelf='center'
    >
      <PlayFill size='medium' color='#ffffff' />
    </Box>
  </Box>

const Body = styled.div`
  font-family: 'Nunito Sans';
  background: black;
  height: 100vh;
`

const ModalExample = ({ config }) =>
  <Page>
    <Modal>
      <Body>
        <Box alignContent='center' justify='center' height='100%'>
          <Modal.Button forId='video1' Component={PlayButton} />
        </Box>
      </Body>
      <Modal.Content
        id='video1'
        position='center'
        onEsc={() => console.log('Esc')}
        onClickOutside={() => console.log('onClickOutside')}
      >
        <Box width='large' pad='medium' round='small' elevation='medium' background='white'>
          <Video source={config} />
        </Box>
      </Modal.Content>
    </Modal>
  </Page>

const videoDefault = {
  type: 'video',
  poster: 'http://dev-res.thumbr.io/libraries/21/11/80/lib/1511427056540_1.jpg?size=854x493s&ext=jpg',
  sources: [{
    src: 'http://lib.tutellus.com/libraries/97/72/04/01/lib/1560498282652_2-480.mp4',
    type: 'video/mp4',
    size: 480
  }]
}

export const Default = () =>
  <Page>
    <Body>
      <Section background='light-1'>
        <Video
          source={videoDefault}
        />
      </Section>
    </Body>
  </Page>

export const withModal = () =>
  <ModalExample config={videoDefault} />

export const withYoutube = () =>
  <ModalExample config={{
    type: 'video',
    autoplay: true,
    sources: [
      {
        src: 'FMF1vMcCWzQ',
        provider: 'youtube'
      }
    ]
  }}
  />
