import React from 'react'
import styled from 'styled-components'
import { Box } from 'grommet'

export const Burger = styled(({ className, cross = false, size = '2rem', ...props }) =>
  <Box
    className={className}
    height={size}
    width={size}
    focusIndicator={false}
    {...props}
  >
    <Box className={`burger ${cross ? 'cross' : ''}`} />
  </Box>
)`
  --color: ${({ theme, color = 'brand' }) => theme.global.colors[color]};
  --size: ${({ size = '2rem' }) => (size)};
  --line-height: ${({ lineHeight = '3px' }) => (lineHeight)};
  --space: calc( var( --line-height ) * 4 );

  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  & .burger {
    width: var( --size );
    height: var( --line-height );
    background-color: var( --color );
    position: relative;
    border-radius: calc( var( --line-height ) / 2);
    transition: background-color .1s;

    &:before, &:after{
      content:"";
      position: absolute;
      width: var( --size );
      height: var( --line-height );
      background-color: var( --color );
      display: block;
      transition: .1s;
      border-radius: calc( var( --line-height ) / 2);
    }

    &:after{
      bottom: calc( -1 * var( --space ));
    }

    &:before{
      top: calc( -1 * var( --space ));
    }
    &.cross{
      background-color: transparent;

      &:after{
        transform: rotate(45deg);
        bottom: 0;
      }
      &:before{
        transform: rotate(-45deg);
        top: 0;
      }
    }
  }
`
