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
  line-height: 14px;
`

export const Badge = styled(({ className, children, count, textConfig = {}, ...props }) =>
  <Box
    className={className}
    round='xsmall'
    pad='xsmall'
    {...props}
    direction='row'
    responsive={false}
  >
    <ContentText weight={700} {...textConfig}>{children}</ContentText>
    {count &&
      <Box margin={{ left: 'xsmall' }} pad={{ horizontal: 'xsmall' }} justify='center' round='small' background='light-1'>
        <CountText>{count}</CountText>
      </Box>}
  </Box>
)`
  max-width: fit-content;
`
