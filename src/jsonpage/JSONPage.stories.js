import React from 'react'
import { css } from 'styled-components'
import { JSONPage } from './JSONPage'
import { Page } from '../page'

export default { title: 'JSON Page' }

const theme = {
  global: {
    font: {
      family: 'Nunito Sans'
    }
  }
}

export const Default = () =>
  <Page theme={theme}>
    <div>No sample</div>
  </Page>

export const CriptanPay = () => {
  const sections = require('./criptanPay').default
  return (
    <Page theme={theme}>
      <JSONPage sections={sections} />
    </Page>
  )
}

export const Blockfier = () => {
  const sections = require('./blockFier').default
  return (
    <Page theme={theme}>
      <JSONPage sections={sections} />
    </Page>
  )
}

const turinLabTheme = {
  global: {
    colors: {
      brand: '#2b4696',
      'dark-5': '#EE4266',
      'accent-1': '#EE4266'
    },
    font: {
      family: 'Nunito Sans'
    }
  },
  button: {
    border: {
      radius: '5px'
    }
  },
  heading: {
    font: 'Khula'
  }
}
const globalCss = css`
  @font-face {
    font-family: 'Khula';
    src: url('https://turin-labs.s3-eu-west-1.amazonaws.com/fonts/khula-semibold-webfont.woff') format('woff');
  }
`
export const TurinLabs = () => {
  const sections = require('./turinlabs').default
  return (
    <Page theme={turinLabTheme} css={globalCss}>
      <JSONPage sections={sections} />
    </Page>
  )
}
