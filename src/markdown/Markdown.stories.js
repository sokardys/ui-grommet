import React from 'react'
import styled from 'styled-components'

import { Box } from 'grommet'
import { Markdown } from './Markdown'
import { Page } from '../page/Page'

export default { title: 'Markdown' }

const Body = styled.div`
  font-family: 'Nunito Sans';
  background: black;
  height: 100vh;
`

const markdownSample = `
# Titulo 1

Parrafo del Texto 1

## Titulo 2

Parrafo del Texto 2

### Titulo 3

Parrafo del Texto 3

1. Árbol
2. Casa
3. Coche

Parrafo del Texto 4

* Puerta
* Ventana
`

export const Default = () =>
  <Body>
    <Page>
      <Box background='light-1' pad='medium'>
        <Markdown>{markdownSample}</Markdown>
      </Box>
    </Page>
  </Body>
