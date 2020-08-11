import React from 'react'
import styled from 'styled-components'

import { ModelViewer } from './ModelViewer'
import { Page } from '../page'

export default { title: 'ModelViewer' }

const Body = styled.div`
  font-family: 'Nunito Sans';
  background: black;
  height: 100vh;
`

export const Default = () =>
  <Page>
    <Body>
      <ModelViewer
        viewerConfig={{
          'camera-controls': true,
          preload: true,
          'auto-rotate': true,
          poster: 'https://criptanpay.s3-eu-west-1.amazonaws.com/cowboy/poster.png',
          src: 'https://criptanpay.s3-eu-west-1.amazonaws.com/cowboy/data'
        }}
        width='medium'
        height='medium'
        background='light-1'
      />
    </Body>
  </Page>
