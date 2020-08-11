import React from 'react'
import * as GrommetIcons from 'grommet-icons'
import { Box } from 'grommet'
import * as iconLibs from './lib'

export const icons = iconLibs

export const getIcon = name => {
  return icons[name] || GrommetIcons[name]
}

export const circleIcon = ({ Icon = getIcon('Bug'), iconConfig = {}, ...props }) =>
  <Box
    alignSelf='center'
    background='light-1'
    width='3.5rem'
    height='3.5rem'
    round='50%'
    justify='center'
    {...props}
  >
    <Box
      alignSelf='center'
    >
      <Icon size='medium' color='brand' {...iconConfig} />
    </Box>
  </Box>
