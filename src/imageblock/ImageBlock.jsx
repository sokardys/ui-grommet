import React from 'react'

import {
  Anchor,
  Box
} from 'grommet'

import { Cta } from '../cta/Cta'
import { Title } from '../title/Title'
import { Description } from '../description/Description'
import { Image } from '../image/Image'

export const ImageBlock = ({
  top = false,
  href,
  anchorConfig = {},
  title,
  titleConfig = {},
  src,
  imageConfig = {},
  description,
  descriptionConfig = {},
  cta,
  ...props
}) => {
  const composeHeading = () =>
    <Title
      level='3'
      margin='small'
      title={title}
      {...titleConfig}
    />

  const composeDescription = () =>
    <Description
      margin={{
        top: top ? 'small' : 'none',
        bottom: 'small'
      }}
      {...descriptionConfig}
    >
      {description}
    </Description>

  const composeBox = () =>
    <Box align='center' {...props}>
      {top && title && composeHeading()}
      <Image {...imageConfig} src={src} fit='contain' />
      {!top && title && composeHeading()}
      {description && composeDescription()}
      {cta && <Cta {...cta} />}
    </Box>

  if (href) {
    return (
      <Anchor href={href} {...anchorConfig}>
        {composeBox()}
      </Anchor>
    )
  }

  return composeBox()
}
