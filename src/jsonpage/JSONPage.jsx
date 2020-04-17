import React from 'react'
import PropTypes from 'prop-types'
import {
  FloatingHeaderSection,
  HeaderSection,
  HeroSection,
  FormSection,
  FooterSection,
  MarkdownSection,
  SeoSection
} from '../sections'

export const JSONPage = ({ uri, sections = [] }) =>
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
        case 'markdown':
          return <MarkdownSection key={`jsonpage-section-${index}`} {...config} />
        case 'form':
          return <FormSection key={`jsonpage-section-${index}`} {...config} />
        case 'seo':
          return <SeoSection key={`jsonpage-section-${index}`} {...config} uri={uri} />
        default:
          return <></>
      }
    })}
  </>

JSONPage.propTypes = {
  sections: PropTypes.array.isRequired
}
