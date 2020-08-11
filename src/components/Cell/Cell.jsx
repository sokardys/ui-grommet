import React from 'react'

import {
  Anchor,
  Box
} from 'grommet'

import { Cta } from '../Cta'
import { ContactInfo } from '../ContactInfo'
import { Title } from '../Title'
import { Description } from '../Description'
import { Image } from '../Image'
import { SocialBox } from '../SocialBox'
import { getIcon } from '../Icons'

export const Cell = ({
  top = false,
  href,
  anchorConfig = {},
  title,
  titleConfig = {},
  src,
  imageConfig = {},
  badge,
  description,
  descriptionConfig = {},
  cta,
  icon,
  iconConfig = {},
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
      textAlign='center'
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

  const composeSocialBox = () =>
    <SocialBox
      icons={icons}
      {...iconsConfig}
    />

  const composeBox = () => {
    const Icon = getIcon(icon)
    return (
      <Box align='center' {...props}>
        {top && title && composeHeading()}
        {icon && <Icon {...iconConfig} />}
        {src && <Image fit='contain' {...imageConfig} src={src} />}
        {badge && badge}
        {!top && title && composeHeading()}
        {description && composeDescription()}
        {cta && <Cta {...cta} />}
        {icons && composeSocialBox()}
        {contact && <ContactInfo {...contact} />}
      </Box>
    )
  }

  if (href) {
    return (
      <Anchor href={href} {...anchorConfig}>
        {composeBox()}
      </Anchor>
    )
  }

  return composeBox()
}
