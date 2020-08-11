import React from 'react'
import styled from 'styled-components'

import {
  Anchor,
  Box
} from 'grommet'

import { getIcon } from '../Icons'

const IconAnchor = styled(Anchor)`
  padding: 0;
`

export const SocialBox = ({ icons = [], ...props }) => {
  const composeIcons = () =>
    icons.map(({ iconConfig = {}, ...item }, index) => {
      const Icon = getIcon(item.icon)
      return (
        <IconAnchor
          {...item}
          target='_blank'
          key={`icon-${index}`}
          icon={<Icon {...iconConfig} />}
        />
      )
    })

  return (
    <Box
      direction='row'
      gap='small'
      pad='small'
      alignSelf='center'
      {...props}
    >
      {composeIcons()}
    </Box>
  )
}
