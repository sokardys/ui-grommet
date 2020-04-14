import React from 'react'
import styled from 'styled-components'
import { Close } from 'grommet-icons'
import {
  Anchor,
  Box,
  Stack,
  Text
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
  footer,
  emailSettings = {},
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
              error,
              ...emailSettings
            }}
            onSend={toggle}
          />
          {footer &&
            <Text
              size='small'
              margin={{ top: 'small' }}
              dangerouslySetInnerHTML={{ __html: footer }}
            /> }
        </Section>
        <Box margin='small'>
          <MyAnchor
            onClick={toggle}
            icon={<Close />}
          />
        </Box>
      </Stack>}
  </Modal.Content>
