import { useContext, useMemo } from 'react'

import { ResponsiveContext } from 'grommet'

export const useResponsiveValue = (config = {}, defaultValue) => {
  const size = useContext(ResponsiveContext)

  const getValue = (config = {}, defaultValue) => {
    return config[size] || config.default || defaultValue
  }

  return useMemo(() => getValue(config, defaultValue), [size])
}
