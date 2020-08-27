/* eslint-disable react/jsx-fragments */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Box } from 'grommet'
import { Cta } from '../Cta'
import { Title } from '../Title'
import { Description } from '../Description'
import { useParallax } from '../useParallax'

const WaveBox = styled(Box)`
  position: absolute;
  z-index: 0;
  width: 100%;
  & svg {
    width: 100%;
  }
  &.top {
    top: 0;
  }
  &.bottom {
    bottom: 0;
  }
`

const RelativeBox = styled(Box)`
  position: relative;
  & .content {
    z-index: 1;
  }
`

export const Section = styled(({
  id,
  children,
  background,
  width = 'xlarge',
  title,
  titleConfig = {},
  description,
  descriptionConfig = {},
  parallax,
  parallaxConfig = {},
  waves = {},
  wavesBoxConfig = {},
  cta,
  ...props
}) => {
  const [isActive, composeParallax] = useParallax({
    type: parallax,
    config: parallaxConfig
  })

  const marginNone = { top: 'none', bottom: 'none', right: 'none', left: 'none' }
  const hasWaves = waves.top || waves.bottom

  const composeSection = () =>
    <RelativeBox
      align='center'
      pad={{ vertical: 'xlarge', horizontal: 'large' }}
      background={background}
      {...props}
    >
      {id && <span class='xtarget' id={id}>&nbsp;</span>}
      {isActive && !hasWaves && composeParallax()}
      <Box className='content' width={width} flex='grow'>
        <React.Fragment>
          {title &&
            <Title
              level='2'
              margin={{ ...marginNone, bottom: 'medium' }}
              title={title}
              textAlign='center'
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
        </React.Fragment>
      </Box>
    </RelativeBox>
  if (hasWaves) {
    return (
      <RelativeBox pad='none' background={background} {...wavesBoxConfig}>
        {composeSection()}
        {isActive && composeParallax()}
        {waves.top && <WaveBox className='top' dangerouslySetInnerHTML={{ __html: waves.top }} />}
        {waves.bottom && <WaveBox className='bottom' dangerouslySetInnerHTML={{ __html: waves.bottom }} />}
      </RelativeBox>
    )
  }
  return composeSection()
})`
  & .xtarget {
    margin-top: ${({ headerHeight = 60 }) => (headerHeight * -1)}px;
    padding-bottom: ${({ headerHeight = 60 }) => headerHeight}px;
    display: block;
  }
`

Section.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string
}
