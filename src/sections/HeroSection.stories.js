import React from 'react'
import styled from 'styled-components'

import { HeroSection } from './HeroSection'
import { Page } from '../page'

export default { title: 'Hero Section' }

const Body = styled.div`
  font-family: 'Nunito Sans';
  background: black;
  height: 100vh;
`

const defaultValues = {
  title: '¿Cuánto cuesta Criptanpay?',
  gridConfig: {
    gap: 'small',
    columns: {
      small: ['1fr'],
      medium: ['.5fr', '.5fr'],
      large: ['.5fr', '.5fr']
    }
  },
  cells: [{
    title: 'Es gratis, para siempre',
    titleConfig: {
      level: '3'
    },
    description: 'El servicio de crypto a crypto no tiene coste. El traspaso a € tiene un coste del 2%, pero tú decides si lo quieres repercutir en tu cliente, por lo que pasaría a ser gratis para el comercio, para siempre.',
    cta: {
      label: 'Más Info',
      href: '/',
      alignSelf: 'center',
      margin: { vertical: 'small', horizontal: 'none' }
    }
  }, {
    src: 'https://picsum.photos/seed/picsum/200/300'
  }],
  background: 'light-1'
}
export const Default = () =>
  <Body>
    <Page>
      <HeroSection
        {...defaultValues}
      />
    </Page>
  </Body>
