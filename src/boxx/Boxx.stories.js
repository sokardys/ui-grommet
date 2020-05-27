/* global alert */
import React from 'react'
import styled from 'styled-components'

import { Boxx } from './Boxx'

import {
  Description,
  Page
} from '..'

export default { title: 'Boxx' }

const Body = styled.div`
  font-family: 'Nunito Sans';
  background: white;
  height: 100vh;
`

export const WithImage = () =>
  <Page>
    <Body>
      <Boxx
        pad='small'
        width='large'
        height='medium'
        align='center'
        justify='center'
        parallax='//i.pinimg.com/originals/9c/69/84/9c69843107ad62dde66d3f81993d4eb7.jpg'
      >
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed est sit amet metus posuere maximus non eu velit. Quisque dui lacus, mollis at lacinia sit amet, commodo non nisi. Etiam pellentesque, tellus non convallis aliquet, dui metus imperdiet massa, sed volutpat orci nulla varius risus. Nullam in nunc vitae sem molestie dapibus vel sed arcu. Donec eu erat a dui ultrices porta. Morbi vitae lectus sollicitudin, egestas lectus et, convallis magna.
        </Description>
      </Boxx>
      <Boxx
        pad='small'
        width='large'
        height='medium'
        align='center'
        justify='center'
        background='light-1'
      >
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed est sit amet metus posuere maximus non eu velit. Quisque dui lacus, mollis at lacinia sit amet, commodo non nisi. Etiam pellentesque, tellus non convallis aliquet, dui metus imperdiet massa, sed volutpat orci nulla varius risus. Nullam in nunc vitae sem molestie dapibus vel sed arcu. Donec eu erat a dui ultrices porta. Morbi vitae lectus sollicitudin, egestas lectus et, convallis magna.
        </Description>
      </Boxx>
    </Body>
  </Page>

export const WithVideo = () =>
  <Page>
    <Body>
      <Boxx
        pad='small'
        width='large'
        height='medium'
        align='center'
        justify='center'
        parallax='video'
        parallaxConfig={{
          videoSrc: 'https://www.youtube.com/watch?v=FMF1vMcCWzQ',
          speed: 0.2
        }}
      >
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed est sit amet metus posuere maximus non eu velit. Quisque dui lacus, mollis at lacinia sit amet, commodo non nisi. Etiam pellentesque, tellus non convallis aliquet, dui metus imperdiet massa, sed volutpat orci nulla varius risus. Nullam in nunc vitae sem molestie dapibus vel sed arcu. Donec eu erat a dui ultrices porta. Morbi vitae lectus sollicitudin, egestas lectus et, convallis magna.
        </Description>
      </Boxx>
      <Boxx
        pad='small'
        width='large'
        height='medium'
        align='center'
        justify='center'
        background='light-1'
      >
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed est sit amet metus posuere maximus non eu velit. Quisque dui lacus, mollis at lacinia sit amet, commodo non nisi. Etiam pellentesque, tellus non convallis aliquet, dui metus imperdiet massa, sed volutpat orci nulla varius risus. Nullam in nunc vitae sem molestie dapibus vel sed arcu. Donec eu erat a dui ultrices porta. Morbi vitae lectus sollicitudin, egestas lectus et, convallis magna.
        </Description>
      </Boxx>
    </Body>
  </Page>
