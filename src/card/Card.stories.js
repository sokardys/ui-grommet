/* global alert */
import React from 'react'
import styled from 'styled-components'

import {
  Anchor,
  Box,
  Text
} from 'grommet'

import {
  Next
} from 'grommet-icons'

import { Card } from './Card'

import {
  Badge,
  Description,
  Page
} from '..'

export default { title: 'Card' }

const Body = styled.div`
  font-family: 'Nunito Sans';
  background: white;
  height: 100vh;
`

const cardDefault = {
  title: 'Title',
  image: 'https://criptanpay.s3-eu-west-1.amazonaws.com/cowboy/poster.png',
  imageConfig: {
    height: 'medium'
  },
  background: 'brand'
}

export const Default = () =>
  <Page>
    <Body>
      <Box
        pad='small'
        width='large'
        background='light-1'
      >
        <Card {...cardDefault}>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed est sit amet metus posuere maximus non eu velit. Quisque dui lacus, mollis at lacinia sit amet, commodo non nisi. Etiam pellentesque, tellus non convallis aliquet, dui metus imperdiet massa, sed volutpat orci nulla varius risus. Nullam in nunc vitae sem molestie dapibus vel sed arcu. Donec eu erat a dui ultrices porta. Morbi vitae lectus sollicitudin, egestas lectus et, convallis magna.
          </Description>
        </Card>
      </Box>
    </Body>
  </Page>

const minimal = {
  title: 'Mensual',
  titleConfig: {
    size: 'medium',
    alignSelf: 'start'
  }
}

export const WithStack = () =>
  <Page>
    <Body>
      <Box
        pad='small'
        width='medium'
        background='light-1'
      >
        <Card
          {...minimal}
          hover
          hoverColor='dark-3'
          stack={
            <Badge
              background='brand'
              round='none'
            >
              RECOMENDADO
            </Badge>
          }
          footer={
            <>
              <Text weight='bold' size='large'>
                29 €/mes
              </Text>
              <Anchor onClick={() => alert('Hey')}>
                <Next size='medium' />
              </Anchor>
            </>
          }
        />
      </Box>
    </Body>
  </Page>

export const WithHover = () =>
  <Page>
    <Body>
      <Box
        pad='small'
        width='medium'
        background='light-1'
      >
        <Card
          {...minimal}
          hover
        />
      </Box>
    </Body>
  </Page>
