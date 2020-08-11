import React from 'react'
import styled from 'styled-components'

import { Box } from 'grommet'
import { Image } from './Image'
import { Grid } from '../grid'
import { Page } from '../page'

export default { title: 'Image' }

const Body = styled.div`
  font-family: 'Nunito Sans';
  background: black;
  height: 100vh;
`

const getArrayTo = max => {
  const result = []
  for (let i = 0; i < max; i++) {
    result.push(i)
  }
  return result
}

export const Default = () =>
  <Body>
    <Page>
      <Grid columns={['.2fr', '.2fr', '.2fr', '.2fr', '.2fr']}>
        {getArrayTo(100).map((item, index) =>
          <Box key={`image-${index}`} background='light-1'>
            <Image
              lazy={index !== 5}
              src={`//picsum.photos/160/90/?${index}`}
            />
          </Box>
        )}
      </Grid>
    </Page>
  </Body>

export const NotLazy = () =>
  <Body>
    <Page>
      <Box width='small' background='light-1'>
        <Image
          lazy={false}
          src='//picsum.photos/160/90/?23'
        />
      </Box>
    </Page>
  </Body>

export const OnError = () =>
  <Body>
    <Page>
      <Box width='small' background='light-1'>
        <Image
          src='//sdasda.photos/160/90/?23'
        />
      </Box>
    </Page>
  </Body>
