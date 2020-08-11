import React from 'react'
import styled from 'styled-components'

import { Cta } from '../components/Cta'
import { Page } from '../components/Page'
import { Section } from '../components/Section'

export default { title: 'Cta' }

const Body = styled.div`
  font-family: 'Nunito Sans';
  background: black;
  height: 100vh;
`

const configDefault = {
  label: 'CTA',
  href: '/'
}

export const Default = () =>
  <Page>
    <Body>
      <Section background='light-1'>
        <Cta {...configDefault} />
      </Section>
    </Body>
  </Page>

const configPrimaryLeft = {
  label: 'CTA',
  alignSelf: 'start',
  href: '/',
  primary: true
}

export const PrimaryLeft = () =>
  <Page>
    <Body>
      <Section background='light-1'>
        <Cta {...configPrimaryLeft} />
      </Section>
    </Body>
  </Page>

const configRight = {
  label: 'CTA',
  alignSelf: 'end',
  href: '/'
}

export const OnTheRight = () =>
  <Page>
    <Body>
      <Section background='light-1'>
        <Cta {...configRight} />
      </Section>
    </Body>
  </Page>
