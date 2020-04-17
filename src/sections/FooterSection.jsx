import React from 'react'

import {
  Anchor,
  Box
} from 'grommet'

import {
  Section
} from '..'

export const FooterSection = ({
  children,
  links,
  ...props
}) =>
  <Section pad='medium' {...props}>
    {links &&
      <Box justify='center' direction='row' gap='medium' margin={{ bottom: 'small' }}>
        {Object.keys(links).map(key =>
          <Box key={`footer-anchor-${key}`}><Anchor href={key} label={links[key]} size='small' /></Box>
        )}
      </Box>}
    <Box align='center' dangerouslySetInnerHTML={{ __html: children }} />
  </Section>
