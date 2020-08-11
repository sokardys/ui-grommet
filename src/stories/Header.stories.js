import React from 'react'
import styled from 'styled-components'

import { Header } from '../components/Header'
import { Page } from '../components/Page'

export default { title: 'Header' }

const Body = styled.div`
  font-family: 'Nunito Sans';
  background: black;
  height: 100vh;
`

const configDefault = {
  logo: {
    width: '16em',
    src: '//criptanpay.com/assets/img/utils/logo.png'
  },
  background: 'light-1',
  pad: 'small'
}

export const CenterLogo = () =>
  <Body>
    <Page>
      <Header
        {...configDefault}
      />
    </Page>
  </Body>

const configButton = {
  logo: {
    width: '16em',
    src: '//criptanpay.com/assets/img/utils/logo.png'
  },
  background: 'light-1',
  pad: 'small',
  button: {
    href: '#contact',
    primary: true,
    label: 'EMPIEZA YA',
    labelConfig: {
      weight: 'bold'
    }
  }
}
export const WithButton = () =>
  <Body>
    <Page>
      <Header
        {...configButton}
      />
    </Page>
  </Body>

const configFixedHeight = {
  logo: {
    width: '16em',
    src: '//criptanpay.com/assets/img/utils/logo.png'
  },
  background: 'light-1',
  pad: 'small',
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
export const WithFixedHeaderHeight = () =>
  <Body>
    <Page>
      <Header
        {...configFixedHeight}
      />
    </Page>
  </Body>

const configText = {
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
export const WithText = () =>
  <Body>
    <Page>
      <Header
        {...configText}
      />
    </Page>
  </Body>
