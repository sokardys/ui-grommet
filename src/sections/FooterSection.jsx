import React from 'react'

import {
  Box
} from 'grommet'

import {
  Section
} from '..'

export const FooterSection = ({
  children,
  ...props
}) =>
  <Section pad='medium' {...props}>
    <Box align='center' dangerouslySetInnerHTML={{ __html: children }} />
  </Section>
