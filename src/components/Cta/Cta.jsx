import React from 'react'

import {
  Button,
  Text
} from 'grommet'

export const Cta = ({
  label,
  labelConfig = {},
  ...props
}) =>
  <Button
    focusIndicator={false}
    margin='small'
    {...props}
    label={<Text as='div' textAlign='center' weight='bold' {...labelConfig}>{label}</Text>}
  />
