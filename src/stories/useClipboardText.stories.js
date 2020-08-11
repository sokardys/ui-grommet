import React, { useState } from 'react'
import {
  grommet,
  Box,
  Button,
  Grommet,
  TextInput
} from 'grommet'
import { useClipboardText } from '../components/useClipboardText'
import { useTimeoutState } from '../components/useTimeoutState'

export default { title: 'useClipboardText' }

export const Default = () => {
  const [copied, setCopied] = useTimeoutState(false, 1000)
  const [buttonRef] = useClipboardText('Using TextClipboard')
  return (
    <Grommet theme={grommet}>
      <Box align='center' pad='medium' direction='row' gap='small'>
        <Button
          ref={buttonRef}
          label={`${copied ? 'Copied!' : 'Copy'}`}
          color={`${copied ? 'brand' : 'dark-1'}`}
          onClick={() => setCopied(true)}
          primary
        />
      </Box>
    </Grommet>
  )
}
