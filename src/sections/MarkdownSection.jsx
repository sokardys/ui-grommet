import React from 'react'
import {
  Markdown,
  Section
} from '..'

export const MarkdownSection = ({ children, ...props }) => {
  return (
    <Section
      pad='large'
      gap='medium'
      margin={{ top: '-1px' }}
      {...props}
    >
      <Markdown>{children}</Markdown>
    </Section>
  )
}
