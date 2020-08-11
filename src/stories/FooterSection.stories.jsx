import React from 'react'
import styled from 'styled-components'

import { FooterSection } from '../components/sections/FooterSection'
import { Page } from '../components/Page'

export default { title: 'Footer Section' }

const Body = styled.div`
  font-family: 'Nunito Sans';
  background: black;
  height: 100vh;
`
export const Default = () =>
  <Body>
    <Page>
      <FooterSection>
        2020 &copy; Turin Labs SL made with ❤️ from Madrid
      </FooterSection>
    </Page>
  </Body>

const links = {
  '/terms': 'Terms and Conditions',
  '/private-policy': 'Private Policy'
}
export const WithLinks = () =>
  <Body>
    <Page>
      <FooterSection links={links}>
        2020 &copy; Turin Labs SL made with ❤️ from Madrid
      </FooterSection>
    </Page>
  </Body>
