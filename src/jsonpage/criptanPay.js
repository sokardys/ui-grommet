export default [{
  section: 'header',
  background: 'light-1',
  burgerColor: 'dark-1',
  burgerSizes: ['small', 'medium'],
  menuConfig: {
    color: 'dark-3',
    margin: 'small',
    align: 'center'
  },
  mobileConfig: {
    color: 'dark-3',
    pad: 'small',
    align: 'center'
  },
  logo: {
    width: '16em',
    src: '//criptanpay.com/assets/img/utils/logo.png'
  },
  menuOptions: [
    {
      href: '#benefits',
      label: 'Benefits'
    }, {
      href: '#howitworks',
      label: 'How it works'
    }, {
      href: '#pricing',
      label: 'Pricing'
    }, {
      href: '#docs',
      label: 'Documentation'
    }, {
      type: 'button',
      href: '#signup',
      primary: true,
      label: 'SIGN UP'
    }
  ]
}, {
  section: 'hero',
  gridConfig: {
    gap: 'large',
    columns: {
      small: ['1fr'],
      medium: ['.5fr', '.5fr'],
      large: ['.5fr', '.5fr']
    }
  },
  cells: [{
    type: 'textBlock',
    title: 'Accept Bitcoin in your ecommerce and get Euros in your bank. Simple, fast and free.',
    titleConfig: {
      level: 1,
      size: 'small',
      alignSelf: 'start'
    },
    description: 'Earn more money, get new customers and accept payments worldwide without technical integration or fees. Easy payments for the merchants of the future.',
    descriptionConfig: {
      size: 'large',
      textAlign: 'left'
    },
    cta: {
      label: 'REGISTER YOUR ECOMMERCE',
      href: '/',
      primary: true,
      alignSelf: 'start'
    }
  }, {
    type: 'imageBlock',
    src: 'https://criptanpay.s3-eu-west-1.amazonaws.com/images/hero.svg',
    imageConfig: {
      boxConfig: {
        fill: true
      }
    }
  }],
  background: 'dark-1'
}, {
  section: 'hero',
  title: 'Benefits for the ecommerce',
  titleConfig: {},
  description: 'We help you to grow with new clients and more profits for your business',
  gridConfig: {
    gap: 'xlarge',
    columns: {
      small: ['1fr'],
      medium: ['.33fr', '.33fr', '.33fr'],
      large: ['.33fr', '.33fr', '.33fr']
    }
  },
  cells: [{
    type: 'imageBlock',
    top: true,
    title: 'Get more customers',
    src: 'https://criptanpay.s3-eu-west-1.amazonaws.com/images/benefits_1.svg',
    imageConfig: {
      boxConfig: {
        height: 'small'
      }
    },
    description: 'Grow in revenues accepting new payment methods, while you receive euro'
  }, {
    type: 'imageBlock',
    top: true,
    title: 'Grow your margin',
    src: 'https://criptanpay.s3-eu-west-1.amazonaws.com/images/benefits_2.svg',
    imageConfig: {
      boxConfig: {
        height: 'small'
      }
    },
    description: 'Service fees will be paid by final customers, so it will be always free for you'
  }, {
    type: 'imageBlock',
    top: true,
    title: 'No technical effort',
    src: 'https://criptanpay.s3-eu-west-1.amazonaws.com/images/benefits_3.svg',
    imageConfig: {
      boxConfig: {
        height: 'small'
      }
    },
    description: 'No need for crypto or even technical support: just add a simple CriptanPay button in your website'
  }],
  background: 'light-3'
}, {
  section: 'hero',
  title: '¿Qué ven tus clientes?',
  description: 'Tus clientes crypto pagarán con un sencillo código QR. La infraestructura de Criptanpay funciona con la más reciente y sólida tecnología de procesamiento de pagos sobre Bitcoin: Lightning Network.',
  gridConfig: {
    gap: 'xlarge',
    columns: {
      small: ['1fr'],
      medium: ['.33fr', '.33fr', '.33fr'],
      large: ['.33fr', '.33fr', '.33fr']
    }
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
}, {
  section: 'hero',
  title: '¿Cuánto cuesta Criptanpay?',
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
      level: '3',
      margin: { vertical: 'medium', horizontal: 'none' },
      alignSelf: 'start'
    },
    description: 'El servicio de crypto a crypto no tiene coste. El traspaso a € tiene un coste del 2%, pero tú decides si lo quieres repercutir en tu cliente, por lo que pasaría a ser gratis para el comercio, para siempre.',
    descriptionConfig: {
      textAlign: 'start'
    },
    cta: {
      label: 'Más Info',
      href: '/',
      alignSelf: 'start',
      margin: { vertical: 'medium', horizontal: 'none' }
    }
  }, {
    type: 'imageBlock',
    src: 'https://picsum.photos/seed/picsum/200/300',
    imageConfig: {
      fill: true
    }
  }],
  background: 'light-3'
}, {
  section: 'floating',
  gap: 80,
  logo: {
    width: '16em',
    src: '//criptanpay.com/assets/img/utils/logo.png'
  },
  background: 'light-1',
  pad: 'small',
  button: {
    href: '#contact',
    primary: true,
    label: 'EMPIEZA YA',
    labelConfig: {
      weight: 'bold'
    }
  }
}]
