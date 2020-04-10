import React, { useContext } from 'react'

import {
  Box,
  Button,
  ResponsiveContext,
  Text
} from 'grommet'

import { Section } from '../section/Section'
import { Image } from '../image/Image'
import { Modal } from '../modal/Modal'

export const Header = ({
  logo = {},
  textSizes = ['medium', 'large'],
  text,
  textConfig = {},
  button,
  ...props
}) => {
  const size = useContext(ResponsiveContext)

  const isTextVisible = textSizes.includes(size)

  const composeButton = () => {
    const { label, labelConfig = {}, ...buttonConfig } = button
    const labelTag = (
      <Text
        as='div'
        truncate
        textAlign='center'
        {...labelConfig}
      >
        {label}
      </Text>
    )
    return (
      <Modal.Button
        Component={Button}
        focusIndicator={false}
        alignSelf='center'
        {...buttonConfig}
        label={labelTag}
      />
    )
  }

  const onlyLogo = !text && !button

  return (
    <Section {...props}>
      <Box
        pad='none'
        gap='medium'
        fill
        justify={onlyLogo ? 'around' : 'between'}
        alignContent='end'
        alignSelf='center'
        direction='row'
      >
        <a href='/'>
          <Image {...logo} lazy={false} />
        </a>
        {text && isTextVisible && <Text alignSelf='center' textAlign='center' {...textConfig}>{text}</Text>}
        {button && composeButton()}
      </Box>
    </Section>
  )
}
