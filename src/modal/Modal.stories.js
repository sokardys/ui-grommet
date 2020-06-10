import React from 'react'
import {
  grommet,
  Box,
  Grommet,
  Stack
} from 'grommet'
import { Close } from 'grommet-icons'

import { Modal } from './Modal'

export default { title: 'Modal' }

export const Default = () =>
  <Grommet theme={grommet}>
    <Modal>
      <Modal.Button forId='button-1' primary label='Button 1' />
      <Modal.Content
        id='button-1'
        onEsc={() => console.log('Esc')}
        onClickOutside={() => console.log('onClickOutside')}
      >
        <Box>Button 1 Content</Box>
      </Modal.Content>
    </Modal>
  </Grommet>

export const Double = () =>
  <Grommet theme={grommet}>
    <Modal>
      <Box gap='small' direction='row'>
        <Modal.Button forId='button-1' label='Button 1' primary />
        <Modal.Button forId='button-2' label='Button 2' />
      </Box>
      <Modal.Content
        id='button-1'
        onEsc={() => console.log('Esc')}
        onClickOutside={() => console.log('onClickOutside')}
      >
        <Box pad='medium' gap='small'>Button 1 Content</Box>
      </Modal.Content>
      <Modal.Content
        id='button-2'
        onEsc={() => console.log('Esc')}
        onClickOutside={() => console.log('onClickOutside')}
      >
        <Box pad='medium' gap='small'>Button 2 Content</Box>
      </Modal.Content>
    </Modal>
  </Grommet>

export const RenderProps = () =>
  <Grommet theme={grommet}>
    <Modal>
      <Modal.Button forId='button-1' primary label='Button 1' />
      <Modal.Content
        id='button-1'
        position='bottom-left'
        onEsc={() => console.log('Esc')}
        onClickOutside={() => console.log('onClickOutside')}
      >
        {({ on, toggle }) => {
          return (
            <Stack anchor='top-right'>
              <Box pad='large'>Button 1 Content</Box>
              <Box pad='xsmall'><Close onClick={toggle} /></Box>
            </Stack>
          )
        }}
      </Modal.Content>
    </Modal>
  </Grommet>

export const ModalToModal = () =>
  <Grommet theme={grommet}>
    <Modal>
      <Box direction='row' gap='medium'>
        <Modal.Button forId='modal-1' primary label='Modal-1' />
        <Modal.Button forId='modal-2' secondary label='Modal-2' />
      </Box>
      <Modal.Content
        id='modal-1'
        position='bottom'
        disableClickOutside
      >
        {({ on, toggle }) => {
          return (
            <Box background='light-1' pad='small'>
              <Stack anchor='top-right'>
                <Box pad='large'>Modal 1 Content</Box>
                <Box pad='xsmall'><Close onClick={toggle} /></Box>
              </Stack>
              <Modal.Button forId='modal-2' label='Modal-2'></Modal.Button>
            </Box>
          )
        }}
      </Modal.Content>
      <Modal.Content
        id='modal-2'
        position='top'
        disableClickOutside
      >
        {({ on, toggle }) => {
          return (
            <Box background='light-1' pad='small'>
              <Stack anchor='top-right'>
                <Box pad='large'>Modal 2 Content</Box>
                <Box pad='xsmall'><Close onClick={toggle} /></Box>
              </Stack>
              <Modal.Button forId='modal-1' label='Modal-1'></Modal.Button>
            </Box>
          )
        }}
      </Modal.Content>
    </Modal>
  </Grommet>
