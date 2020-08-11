import React from 'react'
import styled from 'styled-components'

import { Box } from 'grommet'

import { Cta } from '../Cta'
import { Image } from '../Image'
import { Title } from '../Title'

export const Card = styled(({
  className,
  children,
  image,
  imageConfig = {},
  title,
  titleConfig = {},
  footer,
  footerConfig = {},
  header,
  headerConfig = {},
  cta,
  stack,
  ...props
}) => {
  const marginNone = { top: 'none', bottom: 'none', right: 'none', left: 'none' }

  const composeTitle = () =>
    <Title
      level='3'
      title={title}
      margin={{ bottom: 'small' }}
      responsive={false}
      {...titleConfig}
    />

  const composeImage = () =>
    <Image
      boxConfig={{
        margin: { bottom: 'small' },
        round: 'xsmall',
        ...imageConfig
      }}
      src={image}
      fit='cover'
    />

  const composeCta = () =>
    <Cta margin={{ ...marginNone, top: 'large' }} {...cta} />

  const mustComposeBox = title || image || cta

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
      {header &&
        <Box
          border='bottom'
          justify='between'
          align='center'
          direction='row'
          pad={{ vertical: 'xsmall', horizontal: 'small' }}
          {...headerConfig}
        >
          {header}
        </Box>}
      {mustComposeBox &&
        <Box pad='small' gap='small'>
          {image && composeImage()}
          {title && composeTitle()}
          {children}
          {cta && composeCta()}
        </Box>}
      {!mustComposeBox && children}
      {footer &&
        <Box
          border='top'
          justify='between'
          align='center'
          direction='row'
          pad={{ vertical: 'xsmall', horizontal: 'small' }}
          {...footerConfig}
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
