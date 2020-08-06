import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import 'flickity/css/flickity.css'
import { Box } from 'grommet'

export const Slider = styled(({ className, options = { autoPlay: true, wrapAround: true }, children = [], ...props }) => {
  const sliderEl = useRef()

  useEffect(() => {
    let slider
    if (sliderEl.current && children.length > 0) {
      const Flickity = require('flickity-sync')
      slider = new Flickity(sliderEl.current, options)
    }
    return () => {
      slider && slider.destroy()
    }
  }, [sliderEl, children])

  return (
    <Box className={`carousel ${className}`} ref={sliderEl} pad={{ bottom: 'large' }} {...props}>
      {children.map((slide, index) => {
        return React.cloneElement(slide, {
          key: `${slide.key}-${index}`,
          className: 'carousel-cell'
        })
      })}
    </Box>
  )
})`
  & .carousel {
    opacity: 0;
  }

  & .carousel.flickity-enabled {
    opacity: 1;
  }

  & .carousel-cell {
    transition: opacity 0.2s ease, transform 0.2s ease;
    transform: scale(0.9);
    opacity: 0.25;
    &.is-selected {
      opacity: 1;
      transform: scale(1);
    }
  }

  & .flickity-page-dots {
    bottom: 20px;
  }

  & .flickity-page-dots .dot {
    width: 10px;
    height: 10px;
    opacity: 1;
    background: transparent;
    border: 1px solid white;
  }

  & .flickity-page-dots .dot.is-selected {
    background: white;
  }

  ${({ cssCarousel }) => cssCarousel}
`
