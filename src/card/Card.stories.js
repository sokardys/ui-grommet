import React from 'react'
import styled from 'styled-components'

import { Card } from './Card'
import {
  Page,
} from '..'

export default { title: 'Card' }

const Body = styled.div`
  font-family: 'Nunito Sans';
  background: white;
  height: 100vh;
  padding: 2em;
`

const cardDefault = {
  title:'Title',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed est sit amet metus posuere maximus non eu velit. Quisque dui lacus, mollis at lacinia sit amet, commodo non nisi. Etiam pellentesque, tellus non convallis aliquet, dui metus imperdiet massa, sed volutpat orci nulla varius risus. Nullam in nunc vitae sem molestie dapibus vel sed arcu. Donec eu erat a dui ultrices porta. Morbi vitae lectus sollicitudin, egestas lectus et, convallis magna.',
  image: 'https://criptanpay.s3-eu-west-1.amazonaws.com/cowboy/poster.png',
  imageConfig: {
    height: 'medium'
  },
  background: 'brand'
}

export const Default = () =>
  <Page>
    <Body>
        <Card
          {...cardDefault}
        />
    </Body>
  </Page>
