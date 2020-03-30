
import React from 'react'

import { JSONPage } from './JSONPage'
import { Page } from '../page/Page'

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

export const TurinLabs = () => {
  const sections = require('./turinlabs').default
  return (
    <Page theme={theme}>
      <JSONPage sections={sections} />
    </Page>
  )
}
