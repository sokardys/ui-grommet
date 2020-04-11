import React from 'react'
import styled from 'styled-components'

import { ContactInfo } from './ContactInfo'
import { Page } from '../page/Page'
import { Section } from '../section/Section'

export default { title: 'ContactInfo' }

const Body = styled.div`
  font-family: 'Nunito Sans';
  background: black;
  height: 100vh;
`

const configDefault = {
  address: '1535 Mission St, Suite A<br /><b>San Francisco</b>, California 94103',
  phone: '+39 340 945 2744<br />Mon - Fri 9am - 5pm',
  email: 'hi@lightnite.io'
}

export const Default = () =>
  <Page>
    <Body>
      <Section background='dark-1'>
        <ContactInfo {...configDefault} />
      </Section>
    </Body>
  </Page>
