export default [
  {
    section: 'header',
    background: 'brand',
    burgerColor: 'light-1',
    burgerSizes: ['small', 'medium'],
    menuConfig: {
      color: 'light-1',
      margin: 'small',
      align: 'center'
    },
    mobileConfig: {
      color: 'light-1',
      pad: 'small',
      align: 'center'
    },
    logo: {
      width: '16em',
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/turin-logo.svg'
    },
    menuOptions: [
      {
        href: '#expertise',
        label: 'Expertise'
      }, {
        href: '#technologies',
        label: 'Technologies'
      }, {
        href: '#products',
        label: 'Products'
      }, {
        href: '#team',
        label: 'Team'
      }, {
        href: '#partners',
        label: 'Partners'
      }, {
        type: 'button',
        forId: 'tl-contactform',
        primary: true,
        label: 'CONTACT',
        labelConfig: {
          weight: 'bold'
        }
      }
    ]
  },
  {
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
      title: 'Tokenized and crypto Products for a new world order',
      titleConfig: {
        level: '1',
        size: 'small',
        margin: { vertical: 'medium', horizontal: 'none' },
        alignSelf: 'start'
      },
      description: 'We leverage the power of the Blockchain ecosystem to create the next-generation products for the next-generation users.<br /><br />Payments, DeFi, Tokenization, Gaming, Education, Apostille, Digital ID, Custody… any kind of service you can imagine around Bitcoin or other chains, we built it.<br /><br />Tell us your need and let us handle with the Solution.',
      descriptionConfig: {
        textAlign: 'start',
        size: 'large'
      }
    }, {
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/hero.svg',
      imageConfig: {
        boxConfig: {
          fill: true
        }
      }
    }],
    waves: {
      bottom: '<svg viewBox="0 0 1000 101" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 c 0 0 200 50 500 50 s 500 -50 500 -50 v 101 h -1000 v -100 z" style="fill: rgb(237, 237, 237);"/></svg>'
    },
    background: 'dark-5',
    pad: { vertical: 'xlarge', horizontal: 'large' }
  },
  {
    section: 'hero',
    title: 'We like Bitcoin',
    description: 'It’s simple. We build directly, through sidechains or multiple layers any kind of service over the Bitcoin network, leveraging its leading robustness and security',
    descriptionConfig: {
      size: 'large',
      width: 'medium'
    },
    gridConfig: {
      gap: 'large',
      columns: {
        small: ['1fr'],
        medium: ['.33fr', '.33fr', '.33fr'],
        large: ['.25fr', '.25fr', '.25fr', '.25fr']
      }
    },
    cells: [{
      top: true,
      title: 'Payments',
      titleConfig: { size: 'small' },
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/payments.svg',
      imageConfig: {
        boxConfig: {
          height: 'xsmall'
        }
      },
      description: 'Micro payments through Lighting Network'
    }, {
      top: true,
      title: 'Gaming',
      titleConfig: { size: 'small' },
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/gaming.svg',
      imageConfig: {
        boxConfig: {
          height: 'xsmall'
        }
      },
      description: 'Video games with bitcoin-based incentives'
    }, {
      top: true,
      title: 'Tokenization',
      titleConfig: { size: 'small' },
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/tokenization.svg',
      imageConfig: {
        boxConfig: {
          height: 'xsmall'
        }
      },
      description: 'Assets design and deployment over sidechains'
    }, {
      top: true,
      title: 'Digital ID',
      titleConfig: { size: 'small' },
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/digital-id.svg',
      imageConfig: {
        boxConfig: {
          height: 'xsmall'
        }
      },
      description: 'Self-Sovereign Identity using distributed networks'
    }, {
      top: true,
      title: 'Education',
      titleConfig: { size: 'small' },
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/education.svg',
      imageConfig: {
        boxConfig: {
          height: 'xsmall'
        }
      },
      description: 'New economy models with reward systems'
    }, {
      top: true,
      title: 'Apostille',
      titleConfig: { size: 'small' },
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/apostille.svg',
      imageConfig: {
        boxConfig: {
          height: 'xsmall'
        }
      },
      description: 'Certification services powered by the strength of Bitcoin'
    }, {
      top: true,
      title: 'Custody',
      titleConfig: { size: 'small' },
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/custody.svg',
      imageConfig: {
        boxConfig: {
          height: 'xsmall'
        }
      },
      description: 'Distributed file applications based on IPFS protocol'
    }, {
      top: true,
      title: 'DeFi',
      titleConfig: { size: 'small' },
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/defi.svg',
      imageConfig: {
        boxConfig: {
          height: 'xsmall'
        }
      },
      description: 'Okay, we use ETH for DeFi. BTC is just starting :-)'
    }],
    background: 'light-3'
  },
  {
    section: 'hero',
    title: 'Technologies we work with',
    titleConfig: {
      margin: 'medium'
    },
    description: 'Everything around Bitcoin and sometimes other Blockchains for specific purposes.',
    descriptionConfig: {
      size: 'large'
    },
    gridConfig: {
      gap: 'xlarge',
      columns: {
        small: ['1fr'],
        medium: ['.33fr', '.33fr', '.33fr'],
        large: ['.33fr', '.33fr', '.33fr']
      }
    },
    cells: [{
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/bitcoin.svg',
      imageConfig: {
        boxConfig: {
          height: '4em',
          fill: 'horizontal',
          margin: { bottom: 'medium' }
        }
      },
      description: 'Services demanding strength & security'
    }, {
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/ln.svg',
      imageConfig: {
        boxConfig: {
          height: '4em',
          fill: 'horizontal',
          margin: { bottom: 'medium' }
        }
      },
      description: 'Instant, zero-cost & private micropayments'
    }, {
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/liquid.svg',
      imageConfig: {
        boxConfig: {
          height: '4em',
          fill: 'horizontal',
          margin: { bottom: 'medium' }
        }
      },
      description: 'Tokenization & sidechains transactions'
    }, {
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/ipfs.svg',
      imageConfig: {
        boxConfig: {
          height: '4em',
          fill: 'horizontal',
          margin: { bottom: 'medium' }
        }
      },
      description: 'Decentralized custody'
    }, {
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/eth.svg',
      imageConfig: {
        boxConfig: {
          height: '4em',
          fill: 'horizontal',
          margin: { bottom: 'medium' }
        }
      },
      description: 'DeFi protocols to build financial assets'
    }, {
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/symbol.svg',
      imageConfig: {
        boxConfig: {
          height: '4em',
          fill: 'horizontal',
          margin: { bottom: 'medium' }
        }
      },
      description: 'Multilevel multisignature transactions'
    }],
    waves: {
      top: '<svg viewBox="0 0 1440 192" xmlns="http://www.w3.org/2000/svg"><path fill="#EDEDED" fill-opacity="1" d="M0,96L720,192L1440,96L1440,0L720,0L0,0Z"/></svg>'
    },
    background: 'brand'
  },
  {
    section: 'hero',
    title: 'Products',
    description: 'We launch our own products and empower third ones',
    descriptionConfig: {
      size: 'large'
    },
    gridConfig: {
      gap: 'large',
      columns: {
        small: ['1fr'],
        medium: ['.5fr', '.5fr'],
        large: ['.33fr', '.33fr', '.33fr']
      }
    },
    cells: [{
      src: 'https://picsum.photos/seed/picsum/200/112',
      imageConfig: {
        boxConfig: {
          height: 'xsmall',
          margin: { bottom: 'xsmall' }
        }
      },
      description: 'Bitcoin payment processor for merchants'
    }, {
      src: 'https://picsum.photos/seed/picsum/200/112',
      imageConfig: {
        boxConfig: {
          height: 'xsmall',
          margin: { bottom: 'xsmall' }
        }
      },
      description: 'Fortnite improved with bitcoin rewards'
    }, {
      src: 'https://picsum.photos/seed/picsum/200/112',
      imageConfig: {
        boxConfig: {
          height: 'xsmall',
          margin: { bottom: 'xsmall' }
        }
      },
      description: 'Apostille service with decentralized custody'
    }, {
      src: 'https://picsum.photos/seed/picsum/200/112',
      imageConfig: {
        boxConfig: {
          height: 'xsmall',
          margin: { bottom: 'xsmall' }
        }
      },
      description: 'Data collection service for spirits industry'
    }, {
      src: 'https://picsum.photos/seed/picsum/200/112',
      imageConfig: {
        boxConfig: {
          height: 'xsmall',
          margin: { bottom: 'xsmall' }
        }
      },
      description: 'API infrastructure for LN payments'
    }, {
      src: 'https://picsum.photos/seed/picsum/200/112',
      imageConfig: {
        boxConfig: {
          height: 'xsmall',
          margin: { bottom: 'xsmall' }
        }
      },
      description: 'Fiat-to-Lightning mobile APP'
    }],
    waves: {
      top: '<svg viewBox="-138.504 476.848 1440 202.701" xmlns="http://www.w3.org/2000/svg"><path fill="#2b4696" fill-opacity="1" d="M0,192L80,176C160,160,320,128,480,138.7C640,149,800,203,960,202.7C1120,203,1280,149,1360,122.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" transform="matrix(1, 0, 0, 1, -138.503845, 476.847809)"/></svg>'
    },
    pad: { vertical: 'xlarge', horizontal: 'large' },
    background: 'light-3'
  },
  {
    section: 'hero',
    title: 'Team',
    description: 'Engineers Innovation professionals with 100+ years combined experience in technology development :-)',
    descriptionConfig: {
      size: 'large'
    },
    gridConfig: {
      gap: 'xlarge',
      columns: {
        small: ['1fr'],
        medium: ['.5fr', '.5fr'],
        large: ['.25fr', '.25fr', '.25fr', '.25fr']
      }
    },
    cells: [{
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/miguel.png',
      imageConfig: {
        boxConfig: {
          width: '8em',
          height: '8em',
          round: '50%',
          background: 'light-2',
          margin: { bottom: 'small' }
        }
      },
      title: 'Miguel Caballero',
      titleConfig: {
        level: '4'
      },
      icons: [{
        icon: 'InternetExplorer',
        href: 'https://www.miguelcaballero.eu'
      }, {
        icon: 'Twitter',
        href: 'https://www.twitter.com/mcaballero'
      }, {
        icon: 'Linkedin',
        href: 'https://www.linkedin.com/in/micaballero/'
      }]
    }, {
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/borlado.png',
      imageConfig: {
        boxConfig: {
          width: '8em',
          height: '8em',
          round: '50%',
          background: 'light-2',
          margin: { bottom: 'small' }
        }
      },
      title: 'Carlos Borlado',
      titleConfig: {
        level: '4'
      },
      icons: [{
        icon: 'Linkedin',
        href: 'https://www.linkedin.com/in/carlos-borlado-5b833011/'
      }]
    }, {
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/sokar.png',
      imageConfig: {
        boxConfig: {
          width: '8em',
          height: '8em',
          round: '50%',
          background: 'light-2',
          margin: { bottom: 'small' }
        }
      },
      title: 'Javier Ortiz',
      titleConfig: {
        level: '4'
      },
      icons: [{
        icon: 'Github',
        href: 'https://www.github.com/sokardys'
      }, {
        icon: 'Twitter',
        href: 'https://www.twitter.com/sokardys'
      }, {
        icon: 'Linkedin',
        href: 'https://www.linkedin.com/in/sokardys/'
      }]
    }, {
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/ker.png',
      imageConfig: {
        boxConfig: {
          width: '8em',
          height: '8em',
          round: '50%',
          background: 'light-2',
          margin: { bottom: 'small' }
        }
      },
      title: 'Carlos Roldán',
      titleConfig: {
        level: '4'
      },
      icons: [{
        icon: 'Github',
        href: 'https://www.github.com/whiteyhat'
      }, {
        icon: 'Twitter',
        href: 'https://www.twitter.com/whiteyhat'
      }, {
        icon: 'Linkedin',
        href: 'https://www.linkedin.com/in/whiteyhat/'
      }]
    }],
    pad: { vertical: 'xlarge', horizontal: 'large' },
    background: 'brand'
  },
  {
    section: 'hero',
    title: 'Partners',
    description: 'Brilliant companies and protocols we support & develop with in order to create the best experiences in crypto space',
    descriptionConfig: {
      size: 'large'
    },
    gridConfig: {
      gap: 'large',
      columns: {
        small: ['1fr'],
        medium: ['.33fr', '.33fr', '.33fr'],
        large: ['.25fr', '.25fr', '.25fr', '.25fr']
      }
    },
    cells: [{
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/blockstream.svg',
      imageConfig: {
        boxConfig: {
          height: '3em',
          fill: 'horizontal'
        }
      }
    }, {
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/coinbase.svg',
      imageConfig: {
        boxConfig: {
          height: '2.5em',
          fill: 'horizontal'
        }
      }
    }, {
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/compound.svg',
      imageConfig: {
        boxConfig: {
          height: '2.5em',
          fill: 'horizontal'
        }
      }
    }, {
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/dy_dx.svg',
      imageConfig: {
        boxConfig: {
          height: '2.5em',
          fill: 'horizontal'
        }
      }
    }, {
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/aave-2.svg',
      imageConfig: {
        boxConfig: {
          height: '2.5em',
          fill: 'horizontal'
        }
      }
    }, {
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/nuo.svg',
      imageConfig: {
        boxConfig: {
          height: '2.5em',
          fill: 'horizontal'
        }
      }
    }, {
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/kyber.svg',
      imageConfig: {
        boxConfig: {
          height: '2.5em',
          fill: 'horizontal'
        }
      }
    }, {
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/bancor.svg',
      imageConfig: {
        boxConfig: {
          height: '2.5em',
          fill: 'horizontal'
        }
      }
    }],
    waves: {
      top: '<svg viewBox="0 0 1440 160" xmlns="http://www.w3.org/2000/svg"><path fill="#2b4696" fill-opacity="1" d="M0,64L1440,160L1440,0L0,0Z"/></svg>'
    },
    pad: { vertical: 'xlarge', horizontal: 'large' },
    background: 'light-3'
  },
  {
    section: 'hero',
    gridConfig: {
      margin: { vertical: 'none', horizontal: 'large' },
      gap: 'xlarge',
      columns: {
        small: ['1fr'],
        default: ['.5fr', '.5fr']
      }
    },
    cells: [{
      contact: {
        address: 'Calle Don Ramon de la Cruz, 38<br />28001 Madrid, Spain',
        email: 'hi@turinlabs.com'
      }
    }, {
      icons: [{
        icon: 'Twitter',
        href: 'https://www.twitter.com/turinlabs'
      }, {
        icon: 'Facebook',
        href: 'https://www.google.com'
      }, {
        icon: 'Youtube',
        href: 'https://www.google.com'
      }, {
        icon: 'Medium',
        href: 'https://www.google.com'
      }],
      iconsConfig: {
        pad: 'none',
        gap: 'medium'
      },
      justify: 'end'
    }],
    pad: 'large',
    background: 'dark-2'
  },
  {
    section: 'footer',
    background: 'dark-1',
    children: '2020 &copy; Turin Labs SL made with ❤️ from Madrid'
  },
  {
    section: 'form',
    id: 'tl-contactform',
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
          required: 'Introduzca el email',
          email: 'Introduce un email válido'
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
    }
  },
  {
    section: 'floating',
    gap: 80,
    logo: {
      width: '16em',
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/turin-logo.svg'
    },
    background: 'brand',
    text: 'We ❤️ Bitcoin',
    textConfig: {
      size: 'xlarge',
      weight: 'bold'
    },
    button: {
      forId: 'tl-contactform',
      primary: true,
      label: 'CONTACT',
      labelConfig: {
        weight: 'bold'
      }
    }
  }
]
