import React from 'react'
import styled from 'styled-components'

import {
  Box,
  Text
} from 'grommet'

import { icons } from '../components/Icons'
import { Page } from '../components/Page'
import { Grid } from '../components/Grid'

export default { title: 'Icons' }

const Body = styled.div`
  font-family: 'Nunito Sans';
  background: black;
  height: 100vh;
`

const drawIcon = ({ name, Icon }) =>
  <Box
    key={name}
    direction='column'
    gap='medium'
    align='center'
    justify='center'
    pad='medium'
    border='all'
    round='small'
    background='light-1'
    width='125px'
    height='125px'
  >
    <Icon size='large' color='brand' />
    <Text textAlign='center'>{name}</Text>
  </Box>

export const Default = () =>
  <Body>
    <Page>
      <Grid
        fill
        columns={{ default: { count: 'fit', size: '125px' } }}
        pad={{ default: 'medium' }}
        gap='medium'
        align='center'
        justify='center'
      >
        {Object.keys(icons).map(key =>
          drawIcon({
            name: key,
            Icon: icons[key]
          })
        )}
      </Grid>
    </Page>
  </Body>
