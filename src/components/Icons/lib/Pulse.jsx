import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Blank } from 'grommet-icons'

const pulse = keyframes`
  25% {
    opacity: 0.4;
  }
  100% {
    transform: scale(1.2);
  }
`

export const Pulse = styled(props => (
  <Blank {...props}>
    <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='12' cy='12' r='11' />
      <circle cx='12' cy='12' r='11' />
      <circle cx='12' cy='12' r='11' />
    </svg>
  </Blank>
))`
  & circle {
    transform: scale(0);
    opacity: 0;
    transform-origin: 50% 50%;
    animation: ${pulse} 3s cubic-bezier(.5,.5,0,1) infinite;
    &:nth-child(2) {
      animation: ${pulse} 3s 1s cubic-bezier(.5,.5,0,1)  infinite;
    }
    &:nth-child(3) {
      animation: ${pulse} 3s 2s cubic-bezier(.5,.5,0,1)  infinite;
    }
  }
`
