import React from 'react'
import PropTypes from 'prop-types'
import {
  FloatingHeaderSection,
  HeaderSection,
  HeroSection
} from '../sections'

export const JSONPage = ({ sections = [] }) =>
  <>
    {sections.map(({ section, ...config }, index) => {
      switch (section) {
        case 'floating':
          return <FloatingHeaderSection key={`section-${index}`} {...config} />
        case 'header':
          return <HeaderSection key={`section-${index}`} {...config} />
        case 'hero':
        default:
          return <HeroSection key={`section-${index}`} {...config} />
      }
    })}
  </>

JSONPage.propTypes = {
  sections: PropTypes.array.isRequired
}
