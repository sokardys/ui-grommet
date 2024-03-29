import React, { useContext } from 'react'
import Link from 'next/link'

import {
  Box,
  Button,
  ResponsiveContext,
  Text
} from 'grommet'

import { Section } from '../Section'
import { Logo } from '../Logo'
import { Modal } from '../Modal'

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
    <Section pad='small' {...props}>
      <Box
        pad='none'
        gap='medium'
        fill
        justify={onlyLogo ? 'around' : 'between'}
        alignContent='end'
        alignSelf='center'
        direction='row'
      >
        <Link href='/'>
          <a><Logo {...logo} /></a>
        </Link>
        {text && isTextVisible && <Text alignSelf='center' textAlign='center' {...textConfig}>{text}</Text>}
        {button && composeButton()}
      </Box>
    </Section>
  )
}
