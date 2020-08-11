import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
// import 'jarallax/dist/jarallax.css'

import { Box } from 'grommet'

const ParallaxBox = styled(Box)`
  position: absolute;
  top:0 ;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`

export const useParallax = ({ type = '', config = {} }) => {
  const parallaxRef = useRef()

  const isActive = type !== ''
  const isVideo = type.toLowerCase() === 'video'

  useEffect(() => {
    if (isActive) {
      const { jarallax, jarallaxVideo } = require('jarallax')
      if (parallaxRef.current) {
        if (isVideo) {
          jarallaxVideo()
        }
        jarallax(parallaxRef.current, config)
      }
      return () => {
        if (parallaxRef.current) {
          jarallax(parallaxRef.current, 'destroy')
        }
      }
    }
  }, [parallaxRef])

  const composeContainer = () =>
    <ParallaxBox
      className='jarallax'
      ref={parallaxRef}
    >
      {!isVideo && <img className='jarallax-img' src={type} />}
    </ParallaxBox>

  return [isActive, composeContainer]
}
