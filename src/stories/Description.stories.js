import React from 'react'
import styled from 'styled-components'

import { Description } from '../components/Description'
import { Page } from '../components/Page'
import { Section } from '../components/Section'

export default { title: 'Description' }

const Body = styled.div`
  font-family: 'Nunito Sans';
  background: black;
  height: 100vh;
`

const config = {
  description: 'El servicio de crypto a crypto no tiene coste. El traspaso a € tiene un coste del 2%, pero tú decides si lo quieres repercutir en tu cliente, por lo que pasaría a ser gratis para el comercio, para siempre.'
}

export const Default = () =>
  <Page>
    <Body>
      <Section background='light-1'>
        <Description
          {...config}
        />
      </Section>
    </Body>
  </Page>

const configLeft = {
  description: 'El servicio de crypto a crypto no tiene coste. El traspaso a € tiene un coste del 2%, pero tú decides si lo quieres repercutir en tu cliente, por lo que pasaría a ser gratis para el comercio, para siempre.',
  textAlign: 'start',
  size: 'small'
}

export const OnTheLeft = () =>
  <Page>
    <Body>
      <Section background='light-1'>
        <Description
          {...configLeft}
        />
      </Section>
    </Body>
  </Page>

const configRight = {
  description: 'El servicio de crypto a crypto no tiene coste. El traspaso a € tiene un coste del 2%, pero tú decides si lo quieres repercutir en tu cliente, por lo que pasaría a ser gratis para el comercio, para siempre.',
  textAlign: 'end',
  size: 'large'
}

export const OnTheRight = () =>
  <Page>
    <Body>
      <Section background='light-1'>
        <Description
          {...configRight}
        />
      </Section>
    </Body>
  </Page>
