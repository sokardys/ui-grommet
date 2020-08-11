import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Plyr from 'plyr'
import 'plyr/dist/plyr.css'

import { useInView } from 'react-intersection-observer'
import { Box } from 'grommet'

export const Video = styled(({ className, source = {}, boxConfig = {}, ...props }) => {
  const [inViewRef, inView] = useInView()
  const [player, setPlayer] = useState()
  const videoEl = useRef()

  const defaultConfig = {
    speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 2] },
    resetOnEnd: true
  }

  useEffect(() => {
    const videoConfig = Object.assign({}, defaultConfig, props)
    setPlayer(new Plyr(videoEl.current, videoConfig))

    return () => {
      if (player) {
        player.destroy()
      }
    }
  }, [])

  useEffect(() => {
    if (player) {
      player.source = source
    }
  }, [source, player])

  useEffect(() => {
    const isPlaying = player && player.playing
    if (!inView && isPlaying) {
      player.pause()
    }
    if (inView && !isPlaying) {
      player.play()
    }
  }, [inView])

  return (
    <Box className={className} ref={inViewRef} {...boxConfig}>
      <video ref={videoEl} />
    </Box>
  )
})`
  --plyr-color-main: ${({ theme }) => theme.global.colors.brand};

  & .plyr__control--overlaid {
    opacity: 0;
  }
`

Video.displayName = 'Video'
Video.propTypes = {
  className: PropTypes.string,
  source: PropTypes.object
}
