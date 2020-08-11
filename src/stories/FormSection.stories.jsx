import React from 'react'
import styled from 'styled-components'

import { Button } from 'grommet'

import { FormSection } from '../components/sections/FormSection'
import { Page } from '../components/Page'
import { Modal } from '../components/Modal'

export default { title: 'Form Section' }

const Body = styled.div`
  font-family: 'Nunito Sans';
  background: black;
  height: 100vh;
`

const defaultValues = {
  id: 'default',
  title: 'Gracias por contactar',
  description: 'Completa los campos y contactaremos si nos parece interesante',
  descriptionConfig: {
    margin: 'none'
  },
  fields: {
    captcha: {
      key: 'landing_page',
      clientSecret: '6LcnJ-MUAAAAAFIe_XTHARL95dwesTUeIFcP41Dr'
    },
    name: {
      label: 'Name',
      plaholder: 'Ej. Miguel',
      type: 'text',
      validation: {
        required: 'Introduzca el nombre'
      }
    },
    email: {
      label: 'E-mail',
      plaholder: 'Ej. miguel@gmail.com',
      type: 'email',
      validation: {
        email: 'Introduce un email válido',
        required: 'Introduzca el email'
      }
    },
    more: {
      label: 'More',
      plaholder: 'Cuéntame',
      type: 'textarea',
      validation: {
        required: 'Cuentame algo'
      }
    }
  },
  background: 'dark-3'
}

export const Default = () =>
  <Body>
    <Page>
      <Modal.Button Component={Button} primary label='Goo!' forId={defaultValues.id} />
      <FormSection {...defaultValues} />
    </Page>
  </Body>
