import React from 'react'
import PropTypes from 'prop-types'
import {
  FloatingHeaderSection,
  HeaderSection,
  HeroSection,
  FormSection,
  FooterSection
} from '../sections'

export const JSONPage = ({ sections = [] }) =>
  <>
    {sections.map(({ section, ...config }, index) => {
      switch (section) {
        case 'floating':
          return <FloatingHeaderSection key={`jsonpage-section-${index}`} {...config} />
        case 'header':
          return <HeaderSection key={`jsonpage-section-${index}`} {...config} />
        case 'footer':
          return <FooterSection key={`jsonpage-section-${index}`} {...config} />
        case 'hero':
          return <HeroSection key={`jsonpage-section-${index}`} {...config} />
        case 'form':
          return <FormSection key={`jsonpage-section-${index}`} {...config} />
        default:
          return <></>
      }
    })}
  </>

JSONPage.propTypes = {
  sections: PropTypes.array.isRequired
}
