import React from 'react'

import {
  Anchor,
  Box
} from 'grommet'

import { Cta } from '../cta/Cta'
import { ContactInfo } from '../contactinfo/ContactInfo'
import { Title } from '../title/Title'
import { Description } from '../description/Description'
import { Image } from '../image/Image'
import { Icons } from '../icons/Icons'

export const Cell = ({
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
  icons,
  iconsConfig = {},
  contact,
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
      dangerouslySetInnerHTML={{ __html: description }}
    />

  const composeIcons = () =>
    <Icons
      icons={icons}
      {...iconsConfig}
    />

  const composeBox = () =>
    <Box align='center' {...props}>
      {top && title && composeHeading()}
      {src && <Image fit='contain' {...imageConfig} src={src} />}
      {!top && title && composeHeading()}
      {description && composeDescription()}
      {cta && <Cta {...cta} />}
      {icons && composeIcons()}
      {contact && <ContactInfo {...contact} />}
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
