import React from 'react'

import { Carousel } from '../Carousel'
import { Section } from '../Section'

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
