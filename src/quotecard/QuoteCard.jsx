import React from 'react'
import styled from 'styled-components'

import {
  Anchor,
  Avatar,
  Box,
  Text
} from 'grommet'

import { Card } from '../card/Card'
import { getIcon } from '../icons/Icons'

const Quote = styled(({ className, children }) =>
  <Box
    className={className}
    margin={{
      top: 'medium',
      left: 'small'
    }}
  >
    <Text
      size='large'
      weight='bold'
    >
      {children}&rdquo;
    </Text>
  </Box>
)`
  z-index: 1
`

const RelativeBox = styled(Box)`
  position: relative;
`
const QuotBox = styled(Box)`
  position: absolute;
`

export const QuoteCard = ({
  children,
  avatar,
  avatarConfig = {},
  quotColor = 'light-5',
  quot,
  quotConfig = {},
  name,
  nameConfig = {},
  headline,
  headlineConfig = {},
  socialIcon,
  socialUrl,
  ...props
}) => {
  const QuoteIcon = getIcon('Quote')

  const composeSocialIcon = () => {
    const Icon = getIcon(socialIcon)
    return (
      <Anchor target='_blank' href={socialUrl}>
        <Icon size='medium' color='brand'/>
      </Anchor>
    )
  }

  return (
    <Card
      pad='medium'
      {...props}
      footerConfig={{
        border: false,
        pad: { horizontal: 'small' },
        margin: { top: 'medium' }
      }}
      footer={
        <>
          <Box direction='column'>
            <Text weight='bold' {...nameConfig}>{name}</Text>
            <Text {...headlineConfig}>{headline}</Text>
          </Box>
          {socialIcon && composeSocialIcon()}
        </>
      }
    >
      <RelativeBox direction='column' fill='vertical'>
        <QuotBox margin={{ top: '80px' }}>
          <QuoteIcon size='large' color={quotColor} />
        </QuotBox>
        <Avatar
          src={avatar}
          size='large'
          margin={{ bottom: 'small' }}
          {...avatarConfig}
        />
        <Quote {...quotConfig}>{quot}</Quote>
      </RelativeBox>
    </Card>
  )
}
