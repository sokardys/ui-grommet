import React from 'react'
import styled from 'styled-components'

import {
  Box
} from 'grommet'

import {
  Cta,
  Image,
  Title
} from '..'

export const Card = styled(({
  className,
  children,
  image,
  imageConfig = {},
  title,
  titleConfig = {},
  footer,
  cta,
  stack,
  ...props
}) => {
  const marginNone = { top: 'none', bottom: 'none', right: 'none', left: 'none' }

  return (
    <Box
      className={className}
      elevation='small'
      width='auto'
      background='light-1'
      border
      {...props}
      round='xsmall'
    >
      {stack &&
        <Box
          className='stack'
          round={{ corner: 'top-right', size: 'xsmall' }}
          overflow='hidden'
          style={{ zIndex: 10 }}
        >
          {stack}
        </Box>}
      <Box pad='small' gap='small'>
        {image &&
          <Image
            boxConfig={{
              round: 'xsmall',
              ...imageConfig
            }}
            src={image}
            fit='cover'
          />}
        {title &&
          <Title
            level='3'
            title={title}
            margin='none'
            responsive={false}
            {...titleConfig}
          />}
        {children}
        {cta && <Cta margin={{ ...marginNone, top: 'large' }} {...cta} />}
      </Box>
      {footer &&
        <Box
          border='top'
          justify='between'
          align='center'
          direction='row'
          pad={{ vertical: 'xsmall', horizontal: 'small' }}
        >
          {footer}
        </Box>}
    </Box>
  )
})`
  position: relative;
  transition: all .2s ease;

  ${({ theme, hover = false, hoverColor = 'brand' }) =>
    hover
      ? `&:hover {
          transform: translate3d(-4px,-4px,0) rotateZ(-1deg);
          box-shadow: 0.5rem 0.5rem 0 ${theme.global.colors[hoverColor]};
        }`
      : ''
  }

  & .stack {
    position: absolute;
    top: 0;
    right: 0;
  }
`
