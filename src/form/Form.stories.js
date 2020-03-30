import React from 'react'

import { Form } from './Form'
import { Page } from '../page/Page'
import { Section } from '../section/Section'

export default { title: 'Form' }

const form = {
  fields: {
    captcha: {
      key: 'landing_page',
      clientSecret: '6LcnJ-MUAAAAAFIe_XTHARL95dwesTUeIFcP41Dr'
    },
    name: {
      label: 'Name',
      placeholder: 'Ej. Miguel',
      type: 'text',
      validation: {
        required: 'Introduzca el nombre'
      }
    },
    email: {
      label: 'E-mail',
      placeholder: 'Ej. miguel@gmail.com',
      type: 'email',
      validation: {
        email: 'Introduce un email válido',
        required: 'Introduzca el email'
      }
    },
    more: {
      label: 'More',
      placeholder: 'Cuéntame',
      type: 'textarea',
      validation: {
        required: 'Cuentame algo'
      }
    }
  },
  success: 'Formulario enviado!',
  error: 'Ups! Error! Intentalo más tarde'
}

export const Default = () =>
  <Page>
    <Section>
      <Form {...form} />
    </Section>
  </Page>
