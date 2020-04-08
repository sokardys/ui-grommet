import React, { useEffect } from 'react'
import styled from 'styled-components'

import { Box } from 'grommet'

export const Viewer = styled(({ className, viewerConfig = {}, ...rest }) => {
  useEffect(() => {
    require('@google/model-viewer')
  }, [])

  return (
    <Box
      className={className}
      {...rest}
    >
      <model-viewer
        // camera-controls preload auto-rotate
        {...viewerConfig}
      />
    </Box>
  )
})`

  & model-viewer {
    width: 100%;
    height: 100%;
    &:focus {
      outline: none;
    }
  }
`
