import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'

import {
  Avatar,
  Box,
  Text
} from 'grommet'

import { getIcon } from '../Icons'

const Option = styled(Box)`
  transition: all 0.3s ease;
  opacity: 0.4;
  &.active {
    opacity: 1;
  }
  &:hover {
    opacity: 1;
  }
  outline: none;
`

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const FadeIn = styled(Box)`
  animation: ${fadeIn} 0.5s linear;
`

export const TabNav = ({ tabs, ...props }) => {
  const [slide, setSlide] = useState(0)
  const activeTab = tabs[slide] || {}

  const updateActiveTab = index => {
    setSlide(index)
  }

  return (
    <Box
      gap='medium'
      {...props}
    >
      <Box fill gap='small' direction='row' justify='center'>
        {tabs.map((tab, index) => {
          const Icon = getIcon(tab.icon)
          const isActive = slide === index
          return (
            <Option
              align='center'
              className={isActive ? 'active' : ''}
              key={`option-${tab.icon}-${index}`}
              gap='small'
              pad={{ vertical: 'small', horizontal: 'medium' }}
              fill={false}
              focusIndicator={false}
              onClick={() => !isActive && updateActiveTab(index)}
            >
              <Avatar background={{ color: 'accent-2', opacity: 'weak' }}>
                <Icon color='brand' />
              </Avatar>
              <Text weight='bold'>{tab.title}</Text>
            </Option>
          )
        })}
      </Box>
      <FadeIn key={slide}>
        {!!activeTab.component && activeTab.component}
      </FadeIn>
    </Box>
  )
}
