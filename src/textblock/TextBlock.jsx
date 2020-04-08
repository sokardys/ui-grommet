import React from 'react'

import {
  Box
} from 'grommet'

import { Cta } from '../cta/Cta'
import { Title } from '../title/Title'
import { Description } from '../description/Description'

export const TextBlock = ({
  title,
  titleConfig = { },
  description,
  descriptionConfig = {},
  cta,
  ...props
}) => {
  const marginNone = { top: 'none', bottom: 'none', right: 'none', left: 'none' }
  return (
    <Box {...props}>
      {title && <Title level='2' margin={{ ...marginNone, bottom: 'medium' }} title={title} {...titleConfig} />}
      {description && <Description {...descriptionConfig} dangerouslySetInnerHTML={{ __html: description }} />}
      {cta && <Cta margin={{ ...marginNone, top: 'medium' }} {...cta} />}
    </Box>
  )
}
