import React from 'react'
import styled from 'styled-components'
import {
  Box,
  Text
} from 'grommet'

const CountText = styled(Text)`
  font-size: 12px;
  line-height: 12px;
  font-weight: 700;
`

const ContentText = styled(Text)`
  font-size: 14px;
  line-height: 14px;
  font-weight: 700;
`

export const Badge = styled(({ className, children, count, ...props }) =>
  <Box
    className={className}
    round='xsmall'
    {...props}
    pad='xsmall'
    direction='row'
    responsive={false}
  >
    <ContentText>{children}</ContentText>
    {count &&
      <Box margin={{ left: 'xsmall' }} pad={{ horizontal: 'xsmall' }} justify='center' round='small' background='light-1'>
        <CountText>{count}</CountText>
      </Box>}
  </Box>
)`
  max-width: fit-content;
`
