import React, { useState } from 'react'
import {
  useClipboard,
  useClipboardText,
  useTimeoutState
} from '.'
import {
  grommet,
  Box,
  Button,
  Grommet,
  TextInput
} from 'grommet'

export default { title: 'Hooks' }

export const UsingClipboard = () => {
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

export const UseClipboartText = () => {
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
