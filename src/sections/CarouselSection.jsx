import React from 'react'

import { Carousel } from '../carousel/Carousel'
import { Section } from '../section/Section'

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
