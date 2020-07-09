import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import {
  Box,
  Text
} from 'grommet'

import { Grid } from '../grid/Grid'
import { getIcon } from '../icons/Icons'
import { Image } from '../image/Image'
import { PopoverBox } from '../popoverbox/PopoverBox'

const TransitionPopoverBox = styled(PopoverBox)`
  transition: all 0.5s ease;
`

const Option = styled(Box)`
  transition: all 0.3s ease;
  opacity: 0.4;
  &.active {
    opacity: 1;
  }
  &:hover {
    opacity: 1;
  }
`
export const Specs = ({ specs, ...props }) => {
  const [slide, setSlide] = useState(0)
  const [activeSpec, setActiveSpec] = useState({})

  useEffect(() => {
    setActiveSpec(specs[slide] || {})
  }, [slide])

  const updateActiveSpec = index => {
    setSlide(index)
  }

  return (
    <Grid
      columns={{ small: '1fr', default: ['.25fr', '.75fr'] }}
      gap='medium'
      {...props}
    >
      <Box fill gap='small'>
        {specs.map((spec, index) => {
          const Icon = getIcon(spec.icon)
          const isActive = slide === index
          return (
            <Option
              className={isActive ? 'active' : ''}
              key={`option-${spec.icon}-${index}`}
              direction='row'
              gap='small'
              pad={{ vertical: 'small', horizontal: 'medium' }}
              fill='horizontal'
              onClick={() => !isActive && updateActiveSpec(index)}
            >
              <Icon color='brand' />
              <Text weight='bold'>{spec.title}</Text>
            </Option>
          )
        })}
      </Box>
      <Box>
        <TransitionPopoverBox
          tips={activeSpec.tips}
          round='small'
          overflow='hidden'
          fill
        >
          <Image
            src={activeSpec.src}
          />
        </TransitionPopoverBox>
      </Box>
    </Grid>
  )
}
