import React from 'react'
import styled from 'styled-components'
import { Markdown } from 'grommet'
import { Section } from '..'

const mdH1 = styled.h1`
  margin: 0.5em 0 1em;
  font-weight: bold;
`
const mdH2 = styled.h2`
  margin: 0.4em 0 0.8em;
  font-weight: bold;
`
const mdH3 = styled.h3`
  margin: 0.2em 0 0.6em;
  font-weight: bold;
`
const mdP = styled.p`
  margin: 1em 0;
`
const mdOl = styled.ol`
  list-style: decimal;
  margin-left: 1em;
`
const mdUl = styled.ul`
  list-style: square;
  margin-left: 1em;
`

export const MarkdownSection = ({ children, ...props })  => {
  const components = {
    "h1": mdH1,
    "h2": mdH2,
    "h3": mdH3,
    "p": mdP,
    "ol": mdOl,
    "ul": mdUl
  }

  return (
    <Section
      pad='large'
      gap='medium'
      margin={{ top: '-1px' }}
      {...props}
    >
      <Markdown components={components}>
        {children}
      </Markdown>
    </Section>

  )
}
