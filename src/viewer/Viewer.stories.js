import React from 'react'
import styled from 'styled-components'

import { Viewer } from './Viewer'
import {
  Page,
} from '..'

export default { title: 'Viewer' }

const Body = styled.div`
  font-family: 'Nunito Sans';
  background: black;
  height: 100vh;
`

export const Default = () =>
  <Page>
    <Body>
        <Viewer
          viewerConfig={{
            'camera-controls': true,
            preload: true,
            'auto-rotate': true,
            poster:'https://criptanpay.s3-eu-west-1.amazonaws.com/cowboy/poster.png',
            src:'https://criptanpay.s3-eu-west-1.amazonaws.com/cowboy/data'
          }}
          width='medium'
          height='medium'
          background='light-1'
        />
    </Body>
  </Page>
