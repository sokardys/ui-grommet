import React from 'react'
import styled from 'styled-components'

import { HeaderSection } from './HeaderSection'
import { Page } from '../page/Page'

export default { title: 'HeaderSection' }

const menuOptions = [
  {
    href: 'https://www.google.com',
    label: 'Google'
  }, {
    href: 'https://www.tutellus.com',
    label: 'Tutellus'
  }
]

export const Default = () =>
  <Page>
    <HeaderSection
      menuOptions={menuOptions}
      logo={{ width: '7em', src: '//www.tutellus.io/images/color-logo.svg' }}
    />
  </Page>

const criptanMenuOptions = [
  {
    href: '#features',
    label: 'Caraterísticas'
  }, {
    href: '#about',
    label: '¿Cómo funciona?'
  }, {
    href: '#reviews',
    label: 'Valoraciones'
  }, {
    type: 'button',
    href: '#contact',
    primary: true,
    label: 'EMPIEZA YA'
  }
]

const Body = styled.div`
  font-family: 'Nunito Sans';
  background: black;
  height: 100vh;
`

export const CriptanPay = () =>
  <Body>
    <Page>
      <HeaderSection
        menuOptions={criptanMenuOptions}
        background='light-1'
        burgerSizes={['small', 'medium']}
        burgerColor='dark-1'
        menuConfig={{
          color: 'dark-3',
          margin: 'small',
          align: 'center'
        }}
        mobileConfig={{
          color: 'dark-3',
          pad: 'small',
          align: 'center'
        }}
        logo={{
          width: '16em',
          src: '//criptanpay.com/assets/img/utils/logo.png'
        }}
      />
    </Page>
  </Body>
