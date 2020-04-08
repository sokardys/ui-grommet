import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import 'jarallax/dist/jarallax.css'

import { Box } from 'grommet'
import { Cta } from '../cta/Cta'
import { Title } from '../title/Title'
import { Description } from '../description/Description'

const WaveBox = styled(Box)`
  width: 100%;
  & svg {
    width: 100%;
  }
`

export const Section = styled(({
  className,
  children,
  background = 'light-1',
  width = 'xlarge',
  title,
  titleConfig = {},
  description,
  descriptionConfig = {},
  parallax,
  parallaxConfig = {},
  waves = {},
  cta,
  ...props
}) => {
  const parallaxRef = useRef()
  useEffect(() => {
    const { jarallax } = require('jarallax')
    if (parallaxRef.current) {
      jarallax(parallaxRef.current, parallaxConfig)
    }
    return () => {
      if (parallaxRef.current) {
        jarallax(parallaxRef.current, 'destroy')
      }
    }
  }, [parallaxRef])

  const marginNone = { top: 'none', bottom: 'none', right: 'none', left: 'none' }
  const hasWaves = waves.top || waves.bottom

  const composeSection = () =>
    <Box
      className={className}
      align='center'
      pad={{ vertical: 'xlarge', horizontal: 'large' }}
      background={background}
      {...props}
    >
      {parallax &&
        <Box
          className='jarallax'
          ref={parallaxRef}
        >
          <img className='jarallax-img' src={parallax} />
        </Box>}
      <Box className='content' width={width} flex='grow'>
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
  if (hasWaves) {
    return (
      <Box pad='none' background={background}>
        {waves.top && <WaveBox dangerouslySetInnerHTML={{ __html: waves.top }} />}
        {composeSection()}
        {waves.bottom && <WaveBox dangerouslySetInnerHTML={{ __html: waves.bottom }} />}
      </Box>
    )
  }
  return composeSection()
})`
  position: relative;
  overflow: hidden;
  transform: translateX(0);
  & .jarallax {
    position: absolute;
    top:0 ;
    left: 0;
    width: 100%;
    min-height: 50vh;
    z-index: 0;
  }
  & .content {
    z-index: 1;
  }
`

Section.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string
}
