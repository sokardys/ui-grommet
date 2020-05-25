/* global IntersectionObserver */
import React, { useRef, useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'

import {
  Box,
  Image as GrommetImage
} from 'grommet'

const loaded = keyframes`
  0% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
`
const DEFAULT_PLACEHOLDER = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+gAAAIyAgMAAAAlHwiKAAAACVBMVEUAAAD///////9zeKVjAAAAA3RSTlMAJpG+oOQoAAAAyUlEQVR42uzBQQEAIAwAofNjLiMaeUEG9Fvq9lrqBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMe3AgAAAAAADk/9oIqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqrSHhwQAABAMAC7ZiKKrAfbAAAAAAAAAAAAAAAAAAAAAADgts5TlclXC8vKAalhWF8dAAAAAElFTkSuQmCC'

const LazyImage = styled(GrommetImage)`
  &.loading:not(.has-error) {
    animation: ${loaded} 500ms infinite alternate;
  }

  &.loaded:not(.has-error) {
    animation: ${loaded} 150ms ease-in;
  }

  &.has-error {
    content: url(${DEFAULT_PLACEHOLDER});
  }

  ${({ width }) => (width ? `width: ${width}` : '')}
`

const CSSBox = styled(Box)`
  ${({ css = '' }) => css}
`

export const Image = ({
  placeholder = DEFAULT_PLACEHOLDER,
  lazy = true,
  boxConfig,
  src,
  ...props
}) => {
  const [loading, setLoading] = useState(false)
  const [activeSrc, setActiveSrc] = useState(placeholder)
  const imageRef = useRef()

  const onLoad = () => {
    if (imageRef.current.src.indexOf(src) !== -1 && lazy) {
      imageRef.current.classList.add('loaded')
    }
  }

  const onError = () => {
    imageRef.current.classList.add('has-error')
  }

  useEffect(() => {
    if (loading) {
      imageRef.current.classList.add('loading')
    } else {
      imageRef.current.classList.remove('loading')
    }
  }, [loading])

  useEffect(() => {
    let observer

    if (!lazy) {
      return setActiveSrc(src)
    }

    if (imageRef.current && activeSrc !== src && lazy) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if ((entry.intersectionRatio > 0 || entry.isIntersecting)) {
              setLoading(true)
              setActiveSrc(src)
              observer.unobserve(imageRef.current)
            }
          })
        }, {
          threshold: 0.01,
          rootMargin: '100%'
        })
        observer.observe(imageRef.current)
      } else {
        setActiveSrc(src)
      }
    }
    return () => {
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef.current)
        setLoading(false)
      }
    }
  }, [src, activeSrc, imageRef])

  const composeImage = () =>
    <LazyImage
      ref={imageRef}
      fill
      fit='contain'
      {...props}
      src={activeSrc}
      onLoad={onLoad}
      onError={onError}
    />

  if (boxConfig) {
    return (
      <CSSBox overflow='hidden' {...boxConfig}>
        {composeImage()}
      </CSSBox>
    )
  }

  return composeImage()
}
