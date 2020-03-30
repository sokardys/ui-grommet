import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'grommet'

import { Cta } from '../cta/Cta'
import { Title } from '../title/Title'
import { Description } from '../description/Description'

export const Section = ({
  children,
  width = 'xlarge',
  title,
  titleConfig = {},
  description,
  descriptionConfig = {},
  cta,
  ...props
}) => {
  const marginNone = { top: 'none', bottom: 'none', right: 'none', left: 'none' }
  return (
    <Box align='center' pad='large' {...props}>
      <Box width={width} flex='grow'>
        <>
          {title &&
            <Title
              level='2'
              margin={{ ...marginNone, bottom: 'medium' }}
              title={title}
              {...titleConfig}
            />}
          {description &&
            <Description
              margin={{ ...marginNone, bottom: 'large' }}
              {...descriptionConfig}
            >
              {description}
            </Description>}
          {children}
          {cta && <Cta margin={{ ...marginNone, top: 'large' }} {...cta} />}
        </>
      </Box>
    </Box>
  )
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string
}
