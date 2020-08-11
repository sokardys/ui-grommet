import React from 'react'
import styled from 'styled-components'

import { Title } from '../components/Title'
import { Page } from '../components/Page'
import { Section } from '../components/Section'

export default { title: 'Title' }

const Body = styled.div`
  font-family: 'Nunito Sans';
  background: black;
  height: 100vh;
`

const titleDefault = {
  title: 'Es gratis, para siempre'
}

export const Default = () =>
  <Page>
    <Body>
      <Section background='light-1'>
        <Title
          {...titleDefault}
        />
      </Section>
    </Body>
  </Page>

const titleLeft = {
  title: 'Es gratis, para siempre',
  level: '4',
  alignSelf: 'start'
}

export const OnTheLeft = () =>
  <Page>
    <Body>
      <Section background='light-1'>
        <Title
          {...titleLeft}
        />
      </Section>
    </Body>
  </Page>

const titleRight = {
  title: 'Es gratis, para siempre',
  level: '4',
  alignSelf: 'end'
}
export const OnTheRight = () =>
  <Page>
    <Body>
      <Section background='light-1'>
        <Title
          {...titleRight}
        />
      </Section>
    </Body>
  </Page>
