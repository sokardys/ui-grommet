import React from 'react'
import { Grommet } from 'grommet'
import { base } from 'grommet/themes'
import { deepMerge } from 'grommet/utils'
import { createGlobalStyle } from 'styled-components'

import { Modal } from '..'

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
    },
    font: {
      family: 'Verdana, sans-serif'
    }
  },
  formField: {
    label: {
      weight: 600,
      margin: { vertical: 'xsmall', horizontal: 'none' }
    },
    margin: { bottom: 'small' }
  }
})

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
    scroll-behavior: smooth;
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

  form {
    width: 100%;
  }

  ${props => props.css ? `${props.css}` : ''}
`

export const Page = ({ children, theme = {}, css = '' }) =>
  <Grommet theme={deepMerge(defaultTheme, theme)}>
    <Modal>
      <GlobalStyle css={css} />
      {children}
    </Modal>
  </Grommet>
