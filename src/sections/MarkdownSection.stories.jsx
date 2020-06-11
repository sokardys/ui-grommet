import React from 'react'
import styled from 'styled-components'

import { MarkdownSection } from './MarkdownSection'
import { Page } from '../page/Page'

export default { title: 'Markdown Section' }

const Body = styled.div`
  font-family: 'Nunito Sans';
  background: black;
  height: 100vh;
`
export const Default = () =>
  <Body>
    <Page>
      <MarkdownSection background='light-1'>
        ## Grommet **heart**s markdown
        Favorite thing, [link](https://twitter.com/grommet_io)
      </MarkdownSection>
    </Page>
  </Body>
