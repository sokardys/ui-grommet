import React from 'react'
import styled from 'styled-components'
import * as GrommetIcons from 'grommet-icons'
import {
  Anchor,
  Box
} from 'grommet'

const IconAnchor = styled(Anchor)`
  padding: 0;
`

export const Icons = ({ icons = [], ...props }) => {
  const composeIcons = () =>
    icons.map(({ iconConfig = {}, ...item }, index) => {
      const Icon = GrommetIcons[item.icon]
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
