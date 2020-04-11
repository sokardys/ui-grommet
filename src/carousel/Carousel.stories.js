import React from 'react'

import { Carousel } from './Carousel'
import { Image } from '../image/Image'

import { Page } from '../page/Page'

export default { title: 'Carousel' }

const images = [
  '//v2.grommet.io/assets/Wilderpeople_Ricky.jpg',
  '//v2.grommet.io/assets/IMG_4245.jpg',
  '//v2.grommet.io/assets/IMG_4210.jpg'
]

const contenido = () =>
  images.map((item, index) =>
    <Image key={`image-${index}`} fit='cover' src={item} />
  )

export const Default = () =>
  <Page>
    <Carousel>
      {contenido()}
    </Carousel>
  </Page>

const slides = [{
  gridConfig: {
    gap: 'small',
    columns: {
      small: ['1fr'],
      medium: ['.5fr', '.5fr'],
      large: ['.5fr', '.5fr']
    }
  },
  cells: [{
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
    src: 'https://picsum.photos/seed/picsum/200/300'
  }]
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
    title: 'Escanear el QR',
    src: 'https://picsum.photos/seed/picsum/200/112',
    imageConfig: {
      boxConfig: {
        height: 'small'
      }
    },
    description: 'Crece más, vende más y cobra más aceptando nuevos medios de pago, mientras tú recibes €'
  }, {
    title: 'Procesan el Pago',
    src: 'https://picsum.photos/seed/picsum/200/112',
    imageConfig: {
      boxConfig: {
        height: 'small'
      }
    },
    description: 'La única solución en la que tú decides si repercutes el precio del servicio en tu cliente'
  }, {
    title: 'Confirman el pedido',
    src: 'https://picsum.photos/seed/picsum/200/112',
    imageConfig: {
      boxConfig: {
        height: 'small'
      }
    },
    description: 'No necesitas conocimientos crypto ni técnicos: integra Cryptanpay desde un botón hasta API'
  }]
}]
export const WithSlides = () =>
  <Page>
    <Carousel slides={slides} margin='medium' />
  </Page>
