import React, { useContext } from 'react'
import {
  Grid as GrommetGrid,
  ResponsiveContext
} from 'grommet'

import { Cell } from '../cell/Cell'

export const Grid = ({
  columns,
  margin,
  gap,
  pad,
  areas,
  rows,
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
    cells.map(({ type, ...cell }, index) =>
      <Cell key={`cell-${index}`} {...cell} />
    )

  return (
    <GrommetGrid
      rows={getValue(rows, 'auto')}
      columns={getValue(columns, '1fr')}
      margin={getValue(margin, 'none')}
      gap={getValue(gap, 'none')}
      pad={getValue(pad, 'none')}
      areas={getValue(areas, '')}
      {...props}
    >
      {hasCells ? composeCells() : children}
    </GrommetGrid>
  )
}
