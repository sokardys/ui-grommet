import React from 'react'
import styled from 'styled-components'

import {
  Box
} from 'grommet'

import {
  Cta,
  Description,
  Image,
  Title
} from '..'

export const Card = ({
  children,
  image,
  imageConfig = {},
  title,
  titleConfig = {},
  description,
  descriptionConfig = {},
  cta,
  ...props
}) => {
  const marginNone = { top: 'none', bottom: 'none', right: 'none', left: 'none' }
  return(
    <Box
      pad='small'
      elevation='small'
      width='medium'
      background='light-1'
      round='small'
      {...props}
    >
      <Image
        boxConfig={{
          round: 'small',
          ...imageConfig
        }}
        src={image}
        fit='cover'
      />
      <Box>
        {title &&
          <Title
            level='2'
            margin={{ ...marginNone, top: 'medium', bottom: 'medium' }}
            title={title}
            {...titleConfig}
          />}
        {description &&
          <Description
            margin={{ ...marginNone }}
            {...descriptionConfig}
          >
            {description}
          </Description>}
        {children}
        {cta && <Cta margin={{ ...marginNone, top: 'large' }} {...cta} />}
      </Box>
    </Box>
  )
}
