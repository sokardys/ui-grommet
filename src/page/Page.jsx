import React from 'react'
import { Grommet } from 'grommet'
import { base } from 'grommet/themes'
import { deepMerge } from 'grommet/utils'
import { createGlobalStyle } from 'styled-components'

import { Modal } from '..'

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`

const defaultTheme = deepMerge(base, {
  global: {
    breakpoints: {
      small: {
        value: 500
      },
      medium: {
        value: 900
      },
      large: 3000
    },
    input: {
      weight: 400
    }
  },
  formField: {
    label: {
      color: 'light-1',
      weight: 600,
      margin: { vertical: 'xsmall', horizontal: 'none' }
    },
    border: false,
    margin: { bottom: 'small' }
  },
  textInput: {
    extend: { background: '#F8F8F8 !important' }
  },
  textArea: {
    extend: { background: '#F8F8F8 !important' }
  }
})

export const Page = ({ children, theme = {} }) => {
  return (
    <Grommet theme={deepMerge(defaultTheme, theme)}>
      <Modal>
        <GlobalStyle />
        {children}
      </Modal>
    </Grommet>
  )
}
