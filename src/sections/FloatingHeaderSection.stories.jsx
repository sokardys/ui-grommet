import React from 'react'
import styled from 'styled-components'

import { FloatingHeaderSection } from './FloatingHeaderSection'
import { Page } from '../page'
import { Section } from '../section'

export default { title: 'Floating Header Section' }

const Body = styled.div`
  font-family: 'Nunito Sans';
  background: black;
  height: 100vh;
`
const config = {
  gap: 80,
  logo: {
    width: '16em',
    src: '//criptanpay.com/assets/img/utils/logo.png'
  },
  background: 'light-1',
  pad: 'small',
  text: 'Acepta Criptomonedas, recibe € en tu cuenta bancaria',
  button: {
    href: '#contact',
    primary: true,
    label: 'EMPIEZA YA',
    labelConfig: {
      weight: 'bold'
    }
  },
  height: '5em'
}
export const Default = () =>
  <Body>
    <Page>
      <FloatingHeaderSection {...config} />
      <Section background='light-1' alignContent='center' height='80px'>
        <div>Header</div>
      </Section>
    </Page>
  </Body>
