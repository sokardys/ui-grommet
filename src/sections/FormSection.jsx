import React from 'react'

import {
  Form,
  Modal,
  Section
} from '..'

export const FormSection = ({
  id,
  fields = {},
  button = { label: 'Enviar' },
  success,
  error,
  ...props
}) =>
  <Modal.Content id={id}>
    {({ toggle }) =>
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
      </Section>}
  </Modal.Content>
