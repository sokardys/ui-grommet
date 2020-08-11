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
      href: '#usecases',
      label: 'Use cases'
    }, {
      type: 'button',
      href: '#signup',
      primary: true,
      label: 'SIGN UP'
    }
  ]
}, {
  section: 'hero',
  title: 'Distributed Certification service',
  description: 'Blockfier certifies anything using IPFS protocol for the save function and Liquid (a Bitcoin sidechain) for the apostille service',
  gridConfig: {
    gap: 'large',
    columns: {
      small: ['1fr'],
      medium: ['.5fr', '.5fr'],
      large: ['.5fr', '.5fr']
    }
  },
  cells: [{
    src: 'https://criptanpay.s3-eu-west-1.amazonaws.com/images/hero.svg',
    imageConfig: {
      boxConfig: {
        fill: true
      }
    }
  }, {
    src: 'https://criptanpay.s3-eu-west-1.amazonaws.com/images/hero.svg',
    imageConfig: {
      boxConfig: {
        fill: true
      }
    }
  }],
  cta: {
    label: 'CERTIFY NOW',
    alignSelf: 'center',
    href: '/',
    primary: true
  },
  background: 'dark-1'
}, {
  section: 'hero',
  title: 'The best choice for distributed certification',
  description: 'A no-custody risk decentralized application, letting you issue any kind of asset focused on non crypto experts',
  gridConfig: {
    gap: 'large',
    columns: {
      small: ['1fr'],
      medium: ['.25fr', '.25fr', '.25fr', '.25fr'],
      large: ['.25fr', '.25fr', '.25fr', '.25fr']
    }
  },
  cells: [{
    top: true,
    title: 'Free-risk forever',
    titleConfig: { size: 'small' },
    src: 'https://criptanpay.s3-eu-west-1.amazonaws.com/images/benefits_1.svg',
    imageConfig: {
      boxConfig: {
        height: 'small'
      }
    },
    description: 'Blockfier uses IPFS to distribute your file all over the world'
  }, {
    top: true,
    title: 'Decentralized custody',
    titleConfig: { size: 'small' },
    src: 'https://criptanpay.s3-eu-west-1.amazonaws.com/images/benefits_2.svg',
    imageConfig: {
      boxConfig: {
        height: 'small'
      }
    },
    description: 'Nobody owns your file, and everyone owns it. No risky points'
  }, {
    top: true,
    title: 'Public verification',
    titleConfig: { size: 'small' },
    src: 'https://criptanpay.s3-eu-west-1.amazonaws.com/images/benefits_3.svg',
    imageConfig: {
      boxConfig: {
        height: 'small'
      }
    },
    description: 'Anyone can verify the ownership in the Liquid blockchain'
  }, {
    top: true,
    title: 'Simple & easy-to-use',
    titleConfig: { size: 'small' },
    src: 'https://criptanpay.s3-eu-west-1.amazonaws.com/images/benefits_3.svg',
    imageConfig: {
      boxConfig: {
        height: 'small'
      }
    },
    description: 'Blockfier can be used for anyone, not only crypto people'
  }],
  background: 'light-3'
}, {
  section: 'hero',
  title: 'How it works?',
  description: 'For users: Register, generate & certify your digital assets. Easy, cheap and fast.',
  gridConfig: {
    gap: 'large',
    columns: {
      small: ['1fr'],
      medium: ['.33fr', '.33fr', '.33fr'],
      large: ['.33fr', '.33fr', '.33fr']
    }
  },
  cells: [{
    top: true,
    title: 'Sign up',
    titleConfig: { size: 'small' },
    src: 'https://picsum.photos/seed/picsum/200/112',
    imageConfig: {
      boxConfig: {
        height: 'small'
      }
    },
    description: 'Create your account in Blockfier and complete your profile'
  }, {
    top: true,
    title: 'Issue',
    titleConfig: { size: 'small' },
    src: 'https://picsum.photos/seed/picsum/200/112',
    imageConfig: {
      boxConfig: {
        height: 'small'
      }
    },
    description: 'Generate your digital asset and upload it to IPFS network'
  }, {
    top: true,
    title: 'Claim',
    titleConfig: { size: 'small' },
    src: 'https://picsum.photos/seed/picsum/200/112',
    imageConfig: {
      boxConfig: {
        height: 'small'
      }
    },
    description: 'Certify your digital asset and prove it through QR validation'
  }],
  background: 'light-1'
}, {
  section: 'hero',
  title: 'How it works?',
  description: 'For crypto believers: we use the Liquid blockchain for the apostille service, Bitcoin as the main blockchain which Liquid is collateralized with, and IPFS protocol for the decentralized custody',
  gridConfig: {
    gap: 'large',
    columns: {
      small: ['1fr'],
      medium: ['.25fr', '.25fr', '.25fr', '.25fr'],
      large: ['.25fr', '.25fr', '.25fr', '.25fr']
    }
  },
  cells: [{
    src: 'https://picsum.photos/seed/picsum/200/112',
    imageConfig: {
      boxConfig: {
        height: 'small'
      }
    }
  }, {
    title: 'Strength',
    titleConfig: { size: 'small' },
    src: 'https://picsum.photos/seed/picsum/200/112',
    imageConfig: {
      boxConfig: {
        height: 'small'
      }
    }
  }, {
    title: 'Versatility',
    titleConfig: { size: 'small' },
    src: 'https://picsum.photos/seed/picsum/200/112',
    imageConfig: {
      boxConfig: {
        height: 'small'
      }
    }
  }, {
    title: 'Security',
    titleConfig: { size: 'small' },
    src: 'https://picsum.photos/seed/picsum/200/112',
    imageConfig: {
      boxConfig: {
        height: 'small'
      }
    }
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
