import React, { useContext } from 'react'
import {
  Grid as GrommetGrid,
  ResponsiveContext
} from 'grommet'

import { ImageBlock } from '../imageblock/ImageBlock'
import { TextBlock } from '../textblock/TextBlock'

export const Grid = ({
  columns,
  margin,
  gap,
  pad,
  cells,
  children,
  ...props
}) => {
  const size = useContext(ResponsiveContext)
  const hasCells = cells && cells.length > 0

  const getValue = (config = {}, defaultValue) => {
    if (typeof config === 'string' || Array.isArray(config)) {
      return config
    }
    return config[size] || config.default || defaultValue
  }

  const composeCells = () =>
    cells.map(({ type, ...cell }, index) => {
      switch (type) {
        case 'imageBlock':
          return <ImageBlock key={`cell-${index}`} {...cell} />
        case 'textBlock':
          return <TextBlock key={`cell-${index}`} {...cell} />
      }
    })

  return (
    <GrommetGrid
      rows={['auto']}
      columns={getValue(columns, '1fr')}
      margin={getValue(margin, 'none')}
      gap={getValue(gap, 'none')}
      {...props}
    >
      {hasCells ? composeCells() : children}
    </GrommetGrid>
  )
}
