import React, { useContext } from 'react'

import {
  Anchor,
  Box,
  ResponsiveContext
} from 'grommet'

import {
  Section
} from '..'

export const FooterSection = ({
  children,
  links,
  ...props
}) => {
  const size = useContext(ResponsiveContext)

  const composeLinks = () =>
    Object.keys(links).map(key =>
      <Box key={`footer-anchor-${key}`}><Anchor href={key} label={links[key]} size='small' /></Box>
    )

  return (
    <Section pad='medium' {...props}>
      {links && size === 'small' &&
        <Box justify='center' direction='row' gap='medium' margin={{ bottom: 'small' }}>
          {composeLinks()}
        </Box>}
      <Box gap='medium' alignSelf='center' align='center' direction='row'>
        <Box align='center' dangerouslySetInnerHTML={{ __html: children }} />
        {links && size !== 'small' && composeLinks()}
      </Box>
    </Section>
  )
}
