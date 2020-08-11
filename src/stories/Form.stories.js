import React from 'react'

import { Form } from '../components/Form'
import { Page } from '../components/Page'
import { Section } from '../components/Section'

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
    },
    country: {
      label: 'Pais',
      placeholder: 'Selecciona....',
      options: ['ESPAÑA', 'FRANCIA'],
      type: 'select',
      validation: {
        required: 'Selecciona tu país'
      }
    },
    terms: {
      label: 'Estoy de acuerdo con los <b>Terminos y Condiciones</b>',
      type: 'checkbox',
      validation: {
        checked: 'Debes aceptar los terminos y condiciones...'
      }
    },
  },
  success: 'Formulario enviado!',
  error: 'Ups! Error, intentalo más tarde!',
  template: 'tl_contact',
  from: 'DEMO <ws@tutellus.com>',
  to: ['javieroc@gmail.com']
}

export const Default = () =>
  <Page>
    <Section>
      <Form {...form} />
    </Section>
  </Page>

export const WithPersonalizedFn = () =>
  <Page>
    <Section>
      <Form {...form} sendFormFn={async (values) => console.log('Personalized SEND')} />
    </Section>
  </Page>
