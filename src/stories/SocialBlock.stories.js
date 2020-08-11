import React from 'react'
import styled from 'styled-components'

import { Box } from 'grommet'

import { SocialBox } from '../components/SocialBox'
import { Page } from '../components/Page'

export default { title: 'SocialBox' }

const Body = styled.div`
  font-family: 'Nunito Sans';
  background: black;
  height: 100vh;
`

const defaultValues = {
  icons: [{
    icon: 'Github',
    href: 'https://www.github.com/',
    iconConfig: {
      size: 'large'
    }
  }, {
    icon: 'Twitter',
    href: 'https://www.twitter.com/',
    iconConfig: {
      size: 'large'
    }
  }, {
    icon: 'Linkedin',
    href: 'https://www.linkedin.com/',
    iconConfig: {
      size: 'large'
    }
  }, {
    icon: 'Telegram',
    href: 'https://www.telegram.com/',
    iconConfig: {
      size: 'large'
    }
  }],
  gap: 'xlarge'
}

export const Default = () =>
  <Body>
    <Page>
      <Box background='dark-3'>
        <SocialBox
          {...defaultValues}
        />
      </Box>
    </Page>
  </Body>
