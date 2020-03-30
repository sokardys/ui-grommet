import React from 'react'

import { TextBlock } from './TextBlock'
import { Page } from '..'

export default { title: 'Text Block' }

const config = {
  title: 'Es gratis, para siempre',
  description: 'El servicio de crypto a crypto no tiene coste. El traspaso a € tiene un coste del 2%, pero tú decides si lo quieres repercutir en tu cliente, por lo que pasaría a ser gratis para el comercio, para siempre.',
  cta: {
    label: 'Más Info',
    href: '/',
    primary: true,
    alignSelf: 'center'
  }
}

export const Default = () =>
  <Page>
    <TextBlock
      {...config}
    />
  </Page>

const configLeft = {
  ...config,
  titleConfig: {
    alignSelf: 'start',
    margin: { vertical: 'small', horizontal: 'none' },
    level: '3'
  },
  descriptionConfig: {
    textAlign: 'left'
  },
  cta: {
    label: 'Más Info',
    href: '/',
    alignSelf: 'start',
    margin: { vertical: 'small', horizontal: 'none' }
  }
}

export const AlignedLeft = () =>
  <Page>
    <TextBlock
      {...configLeft}
    />
  </Page>
