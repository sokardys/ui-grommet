/* eslint-disable react/jsx-fragments */
import React, { useContext } from 'react'
import styled from 'styled-components'

import {
  Anchor,
  Box,
  Text,
  ResponsiveContext
} from 'grommet'

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  EmailShareButton,
  PocketShareButton
} from 'react-share'

import { Card } from '../Card'

import {
  getIcon,
  circleIcon
} from '../Icons'

import { useTimeoutState } from '../useTimeoutState'
import { useClipboardText } from '../useClipboardText'

const getButton = ({ channel, url, title, hashtags, closeFn, iconSettings }) => {
  switch (channel) {
    case 'facebook':
      return (
        <FacebookShareButton key={`fb-${url}`} url={url} quote={title} beforeOnClick={closeFn}>
          {circleIcon({ Icon: getIcon('FacebookOption'), ...iconSettings })}
        </FacebookShareButton>
      )
    case 'twitter':
      return (
        <TwitterShareButton key={`tw-${url}`} url={url} title={title} hashtags={hashtags} beforeOnClick={closeFn}>
          {circleIcon({ Icon: getIcon('Twitter'), ...iconSettings })}
        </TwitterShareButton>
      )
    case 'linkedin':
      return (
        <LinkedinShareButton key={`lk-${url}`} className='hide-mobile' url={url} beforeOnClick={closeFn}>
          {circleIcon({ Icon: getIcon('LinkedinOption'), ...iconSettings })}
        </LinkedinShareButton>
      )
    case 'telegram':
      return (
        <TelegramShareButton key={`tg-${url}`} className='hide-mobile' url={url} title={title} beforeOnClick={closeFn}>
          {circleIcon({ Icon: getIcon('Telegram'), ...iconSettings })}
        </TelegramShareButton>
      )
    case 'whatsapp':
      return (
        <WhatsappShareButton key={`wh-${url}`} url={url} title={title} beforeOnClick={closeFn}>
          {circleIcon({ Icon: getIcon('WhatsApp'), ...iconSettings })}
        </WhatsappShareButton>
      )
    case 'email':
      return (
        <EmailShareButton key={`em-${url}`} url={url} subject={title} beforeOnClick={closeFn}>
          {circleIcon({ Icon: getIcon('MailOption'), ...iconSettings })}
        </EmailShareButton>
      )
    case 'pocket':
      return (
        <PocketShareButton key={`pk-${url}`} className='hide-mobile' url={url} beforeOnClick={closeFn}>
          {circleIcon({ Icon: getIcon('Pocket'), ...iconSettings })}
        </PocketShareButton>
      )
  }
}

export const ShareCard = styled(({
  className,
  header,
  title,
  url,
  hashtags = [],
  channels = ['facebook', 'twitter', 'linkedin', 'telegram', 'whatsapp', 'pocket', 'email'],
  hideOnMobile = ['linkedin', 'telegram', 'pocket'],
  closeFn
}) => {
  const size = useContext(ResponsiveContext)
  const [buttonRef] = useClipboardText(url)
  const [show, setShow] = useTimeoutState(false, 700)

  const isSmall = size === 'small'

  const copyToClipboard = () => {
    setShow(true)
  }

  const iconSettings = {
    border: {
      color: 'brand',
      size: '2px',
      side: 'all'
    },
    height: '3rem',
    width: '3rem'
  }

  const CloseIcon = getIcon('Close')

  let channelsToShow = channels
  if (isSmall) {
    channelsToShow = channels.filter(channel => !hideOnMobile.includes(channel))
  }

  return (
    <Card
      className={className}
      header={
        <React.Fragment>
          <Text weight='bold' size='medium'>
            {header}
          </Text>
          {closeFn &&
            <Anchor onClick={closeFn} margin={{ top: 'xsmall' }}>
              <CloseIcon />
            </Anchor>}
        </React.Fragment>
      }
      width={isSmall ? 'large' : 'auto'}
    >
      <Box direction='row' pad='medium' gap='small' alignSelf='center'>
        {circleIcon({
          Icon: getIcon('Copy'),
          ...iconSettings,
          ref: buttonRef,
          className: `copy ${show ? 'copied' : ''}`,
          onClick: copyToClipboard
        })}
        {channelsToShow.map(channel => getButton({ channel, url, title, hashtags, closeFn, iconSettings }))}
      </Box>
    </Card>
  )
})`
  & button {
    &:focus {
      outline: none;
    }
  }
  & .copy {
    &.copied {
      border-color: ${({ theme }) => theme.global.colors['accent-1']};
    }
  }
`
