import React from 'react'
import styled from 'styled-components'
import { Close } from 'grommet-icons'
import {
  Anchor,
  Box,
  Text
} from 'grommet'

import { Form } from '../form/Form'
import { Modal } from '../modal/Modal'
import { Section } from '../section/Section'

const MyAnchor = styled(Anchor)`
  padding: 0;
`

const CloseBox = styled(Box)`
  position: absolute;
  top: 0;
  right: 0;
`

export const FormSection = ({
  id,
  fields = {},
  button = { label: 'Enviar' },
  success,
  error,
  footer,
  emailSettings = {},
  modalSettings = {},
  hideCloseBtn = false,
  ...props
}) =>
  <Modal.Content id={id} margin='small' {...modalSettings}>
    {({ toggle }) =>
      <>
        <Section
          width='medium'
          pad='large'
          round='small'
          overflow='scroll'
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
            {...emailSettings}
            onSend={toggle}
          />
          {footer &&
            <Text
              size='small'
              margin={{ top: 'small' }}
              dangerouslySetInnerHTML={{ __html: footer }}
            />}
        </Section>
        {!hideCloseBtn &&
          <CloseBox margin='small'>
            <MyAnchor
              onClick={toggle}
              icon={<Close />}
            />
          </CloseBox>}
      </>}
  </Modal.Content>
