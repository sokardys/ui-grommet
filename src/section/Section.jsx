import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import 'jarallax/dist/jarallax.css'

import { Box } from 'grommet'
import { Cta } from '../cta/Cta'
import { Title } from '../title/Title'
import { Description } from '../description/Description'

const WaveBox = styled(Box)`
  z-index: 5;
  width: 100%;
  & svg {
    width: 100%;
  }
`

const JarallaxBox = styled(Box)`
  position: absolute;
  top:0 ;
  left: 0;
  width: 100%;
  min-height: 100vh;
  z-index: 0;
`

const RelativeBox = styled(Box)`
  position: relative;
  overflow: hidden;
  & .content {
    z-index: 1;
  }
`
export const Section = ({
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
    const { jarallax, jarallaxVideo } = require('jarallax')
    if (parallaxRef.current) {
      if (parallax.toLowerCase() === 'video'){
        jarallaxVideo()
      }
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

  const composeParallax = () =>
    <JarallaxBox
      className='jarallax'
      ref={parallaxRef}
    >
      {parallax.toLowerCase() !== 'video' &&
        <img className='jarallax-img' src={parallax} />}
    </JarallaxBox>

  const composeSection = () =>
    <RelativeBox
      align='center'
      pad={{ vertical: 'xlarge', horizontal: 'large' }}
      background={background}
      {...props}
    >
      {parallax && !hasWaves && composeParallax()}
      <Box className='content' width={width} flex='grow'>
        <>
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
        </>
      </Box>
    </RelativeBox>
  if (hasWaves) {
    return (
      <RelativeBox pad='none' background={background}>
        {waves.top && <WaveBox dangerouslySetInnerHTML={{ __html: waves.top }} />}
        {composeSection()}
        {waves.bottom && <WaveBox dangerouslySetInnerHTML={{ __html: waves.bottom }} />}
        {parallax && composeParallax()}
      </RelativeBox>
    )
  }
  return composeSection()
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string
}
