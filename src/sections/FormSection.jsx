import React from 'react'
import styled from 'styled-components'
import { Close } from 'grommet-icons'
import {
  Anchor,
  Box,
  Stack
} from 'grommet'

import {
  Form,
  Modal,
  Section
} from '..'

const MyAnchor = styled(Anchor)`
  padding: 0;
`
export const FormSection = ({
  id,
  fields = {},
  button = { label: 'Enviar' },
  success,
  error,
  ...props
}) =>
  <Modal.Content id={id} margin='small'>
    {({ toggle }) =>
      <Stack anchor="top-right">
        <Section
          width='medium'
          pad='large'
          round='small'
          {...props}
        >
          <Form
            {...{
              id: `${id}-form`,
              fields,
              button,
              success,
              error
            }}
            onSend={toggle}
          />
        </Section>
        <Box margin='small'>
          <MyAnchor
            onClick={toggle}
            icon={<Close />}
          />
        </Box>
      </Stack>}
  </Modal.Content>
