import React from 'react'
import {
  Carousel,
  Section
} from '..'

export const CarouselSection = ({
  slides,
  carouselConfig = {},
  ...props
}) =>
  <Section pad='large' gap='medium' {...props}>
    <Carousel
      {...carouselConfig}
      slides={slides}
    />
  </Section>
