import React from 'react'

import {
  Anchor,
  Box,
  Text
} from 'grommet'

import {
  Location,
  Mail,
  Phone
} from 'grommet-icons'

export const ContactInfo = ({ address, phone, email }) => {
  const composeAddress = () =>
    <Box direction='row' gap='small'>
      <Box><Location /></Box>
      <Box><Text dangerouslySetInnerHTML={{ __html: address }} /></Box>
    </Box>

  const composePhone = () =>
    <Box direction='row' gap='small'>
      <Box><Phone /></Box>
      <Box><Text dangerouslySetInnerHTML={{ __html: phone }} /></Box>
    </Box>

  const composeEmail = () =>
    <Box direction='row' gap='small'>
      <Box><Mail /></Box>
      <Box>
        <Anchor
          href={`mailto:${email}`}
          label={<Text dangerouslySetInnerHTML={{ __html: email }} />}
        />
      </Box>
    </Box>

  return (
    <Box gap='medium'>
      {address && composeAddress()}
      {phone && composePhone()}
      {email && composeEmail()}
    </Box>
  )
}
