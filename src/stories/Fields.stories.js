import React from 'react'
import styled from 'styled-components'

import { Form } from 'grommet'

import { Fields } from '../components/Fields'
import { Page } from '../components/Page'
import { Section } from '../components/Section'

export default { title: 'Fields' }

const Body = styled.div`
  font-family: 'Nunito Sans';
  background: black;
  height: 100vh;
`

export const Default = () =>
  <Page>
    <Body>
      <Section width='medium' background='light-1'>
        <Form>
          <Fields label='Code' name='code' type='code' />
          <Fields label='Email' name='email' type='text' />
        </Form>
      </Section>
    </Body>
  </Page>
