import React from 'react'
import styled from 'styled-components'

import { CarouselSection } from './CarouselSection'
import { Page } from '../page/Page'

export default { title: 'Carousel Section' }

const Body = styled.div`
  font-family: 'Nunito Sans';
  background: black;
  height: 100vh;
`

const defaultValues = {
  title: '¿Cuánto cuesta Criptanpay?',
  description: 'El servicio de crypto a crypto no tiene coste. El traspaso a € tiene un coste del 2%, pero tú decides si lo quieres repercutir en tu cliente, por lo que pasaría a ser gratis para el comercio, para siempre.',
  slides: [{
    gridConfig: {
      gap: 'small',
      columns: {
        small: ['1fr'],
        medium: ['.5fr', '.5fr'],
        large: ['.5fr', '.5fr']
      }
    },
    cells: [{
      type: 'textBlock',
      title: 'Es gratis, para siempre',
      titleConfig: {
        level: '3'
      },
      description: 'El servicio de crypto a crypto no tiene coste. El traspaso a € tiene un coste del 2%, pero tú decides si lo quieres repercutir en tu cliente, por lo que pasaría a ser gratis para el comercio, para siempre.',
      cta: {
        label: 'Más Info',
        href: '/',
        alignSelf: 'center',
        margin: { vertical: 'small', horizontal: 'none' }
      }
    }, {
      type: 'imageBlock',
      src: 'https://picsum.photos/seed/picsum/200/300'
    }],
    background: 'dark-1'
  }, {
    gridConfig: {
      gap: 'xlarge',
      columns: {
        small: ['1fr'],
        medium: ['.33fr', '.33fr', '.33fr'],
        large: ['.33fr', '.33fr', '.33fr']
      },
      margin: 'large'
    },
    cells: [{
      type: 'imageBlock',
      title: 'Escanear el QR',
      src: 'https://picsum.photos/seed/picsum/200/112',
      imageConfig: {
        boxConfig: {
          height: 'small'
        }
      },
      description: 'Crece más, vende más y cobra más aceptando nuevos medios de pago, mientras tú recibes €'
    }, {
      type: 'imageBlock',
      title: 'Procesan el Pago',
      src: 'https://picsum.photos/seed/picsum/200/112',
      imageConfig: {
        boxConfig: {
          height: 'small'
        }
      },
      description: 'La única solución en la que tú decides si repercutes el precio del servicio en tu cliente'
    }, {
      type: 'imageBlock',
      title: 'Confirman el pedido',
      src: 'https://picsum.photos/seed/picsum/200/112',
      imageConfig: {
        boxConfig: {
          height: 'small'
        }
      },
      description: 'No necesitas conocimientos crypto ni técnicos: integra Cryptanpay desde un botón hasta API'
    }],
    background: 'light-1'
  }],
  background: 'light-1'
}
export const Default = () =>
  <Body>
    <Page>
      <CarouselSection
        {...defaultValues}
      />
    </Page>
  </Body>
