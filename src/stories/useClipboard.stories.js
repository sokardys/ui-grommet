import React, { useState } from 'react'
import {
  grommet,
  Box,
  Button,
  Grommet,
  TextInput
} from 'grommet'

import { useClipboard } from '../components/useClipboard'
import { useTimeoutState } from '../components/useTimeoutState'

export default { title: 'useClipboard' }

export const Default = () => {
  const [copied, setCopied] = useTimeoutState(false, 1000)
  const [input, setInput] = useState('http://www.google.com')
  const [buttonRef, inputRef] = useClipboard()
  return (
    <Grommet theme={grommet}>
      <Box align='center' pad='medium' direction='row' gap='small'>
        <TextInput
          ref={inputRef}
          value={input}
          onChange={event => setInput(event.target.value)}
        />
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
