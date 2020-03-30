import React from 'react'
import {
  Carousel as GrommetCarousel
} from 'grommet'

import { Grid } from '../grid/Grid'

export const Carousel = ({
  children,
  slides,
  ...props
}) => {
  const hasSlides = slides && slides.length > 0

  const composeSlides = () =>
    slides.map(({ gridConfig, ...props }, index) =>
      <Grid key={`slide-${index}`} {...gridConfig} {...props} />
    )

  return (
    <GrommetCarousel
      fill
      play={5000}
      controls='selectors'
      {...props}
    >
      {hasSlides ? composeSlides() : children}
    </GrommetCarousel>
  )
}
