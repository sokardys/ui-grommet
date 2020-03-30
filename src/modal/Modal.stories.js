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
