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
      type: 'textBlock',
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
      type: 'imageBlock',
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
      type: 'imageBlock',
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
      type: 'imageBlock',
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
      type: 'imageBlock',
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
      type: 'imageBlock',
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
      type: 'imageBlock',
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
      type: 'imageBlock',
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
      type: 'imageBlock',
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
      type: 'imageBlock',
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
      type: 'imageBlock',
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/bitcoin.svg',
      imageConfig: {
        boxConfig: {
          height: 'xsmall',
          margin: { bottom: 'xsmall' }
        }
      },
      description: 'Services demanding strength & security'
    }, {
      type: 'imageBlock',
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/ln.svg',
      imageConfig: {
        boxConfig: {
          height: 'xsmall',
          margin: { bottom: 'xsmall' }
        }
      },
      description: 'Instant, zero-cost & private micropayments'
    }, {
      type: 'imageBlock',
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/liquid.svg',
      imageConfig: {
        boxConfig: {
          height: 'xsmall',
          margin: { bottom: 'xsmall' }
        }
      },
      description: 'Tokenization & sidechains transactions'
    }, {
      type: 'imageBlock',
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/ipfs.svg',
      imageConfig: {
        boxConfig: {
          height: 'xsmall',
          margin: { bottom: 'xsmall' }
        }
      },
      description: 'Decentralized custody'
    }, {
      type: 'imageBlock',
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/eth.svg',
      imageConfig: {
        boxConfig: {
          height: 'xsmall',
          margin: { bottom: 'xsmall' }
        }
      },
      description: 'DeFi protocols to build financial assets'
    }, {
      type: 'imageBlock',
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/symbol.svg',
      imageConfig: {
        boxConfig: {
          height: 'xsmall',
          margin: { bottom: 'small' }
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
      type: 'imageBlock',
      src: 'https://picsum.photos/seed/picsum/200/112',
      imageConfig: {
        boxConfig: {
          height: 'xsmall',
          margin: { bottom: 'xsmall' }
        }
      },
      description: 'Bitcoin payment processor for merchants'
    }, {
      type: 'imageBlock',
      src: 'https://picsum.photos/seed/picsum/200/112',
      imageConfig: {
        boxConfig: {
          height: 'xsmall',
          margin: { bottom: 'xsmall' }
        }
      },
      description: 'Fortnite improved with bitcoin rewards'
    }, {
      type: 'imageBlock',
      src: 'https://picsum.photos/seed/picsum/200/112',
      imageConfig: {
        boxConfig: {
          height: 'xsmall',
          margin: { bottom: 'xsmall' }
        }
      },
      description: 'Apostille service with decentralized custody'
    }, {
      type: 'imageBlock',
      src: 'https://picsum.photos/seed/picsum/200/112',
      imageConfig: {
        boxConfig: {
          height: 'xsmall',
          margin: { bottom: 'xsmall' }
        }
      },
      description: 'Data collection service for spirits industry'
    }, {
      type: 'imageBlock',
      src: 'https://picsum.photos/seed/picsum/200/112',
      imageConfig: {
        boxConfig: {
          height: 'xsmall',
          margin: { bottom: 'xsmall' }
        }
      },
      description: 'API infrastructure for LN payments'
    }, {
      type: 'imageBlock',
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
      type: 'imageBlock',
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/miguel.png',
      imageConfig: {
        boxConfig: {
          width: 'small',
          height: 'small',
          round: '50%',
          background: 'light-2'
        }
      },
      title: 'Miguel Caballero',
      titleConfig: {
        level: '4'
      }
    }, {
      type: 'imageBlock',
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/borlado.png',
      imageConfig: {
        boxConfig: {
          width: 'small',
          height: 'small',
          round: '50%',
          background: 'light-2'
        }
      },
      title: 'Carlos Borlado',
      titleConfig: {
        level: '4'
      }
    }, {
      type: 'imageBlock',
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/sokar.png',
      imageConfig: {
        boxConfig: {
          width: 'small',
          height: 'small',
          round: '50%',
          background: 'light-2'
        }
      },
      title: 'Javier Ortiz',
      titleConfig: {
        level: '4'
      }
    }, {
      type: 'imageBlock',
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/ker.png',
      imageConfig: {
        boxConfig: {
          width: 'small',
          height: 'small',
          round: '50%',
          background: 'light-2'
        }
      },
      title: 'Carlos Roldán',
      titleConfig: {
        level: '4'
      }
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
      type: 'imageBlock',
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/blockstream.svg'
    }, {
      type: 'imageBlock',
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/coinbase.svg'
    }, {
      type: 'imageBlock',
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/compound.svg'
    }, {
      type: 'imageBlock',
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/dy_dx.svg'
    }, {
      type: 'imageBlock',
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/aave-2.svg'
    }, {
      type: 'imageBlock',
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/nuo.svg'
    }, {
      type: 'imageBlock',
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/kyber.svg'
    }, {
      type: 'imageBlock',
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/bancor.svg'
    }],
    waves: {
      top: '<svg viewBox="0 0 1440 160" xmlns="http://www.w3.org/2000/svg"><path fill="#2b4696" fill-opacity="1" d="M0,64L1440,160L1440,0L0,0Z"/></svg>'
    },
    pad: { vertical: 'xlarge', horizontal: 'large' },
    background: 'light-3'
  },
  {
    section: 'hero',
    waves: {
      top: '<svg viewBox="0 0 1440 253.464" xmlns="http://www.w3.org/2000/svg"><path fill="#EDEDED" fill-opacity="1" d="M0,192L8.9,197.3C17.8,203,36,213,53,218.7C71.1,224,89,224,107,208C124.4,192,142,160,160,144C177.8,128,196,128,213,117.3C231.1,107,249,85,267,85.3C284.4,85,302,107,320,117.3C337.8,128,356,128,373,112C391.1,96,409,64,427,58.7C444.4,53,462,75,480,106.7C497.8,139,516,181,533,202.7C551.1,224,569,224,587,213.3C604.4,203,622,181,640,144C657.8,107,676,53,693,48C711.1,43,729,85,747,122.7C764.4,160,782,192,800,213.3C817.8,235,836,245,853,250.7C871.1,256,889,256,907,229.3C924.4,203,942,149,960,117.3C977.8,85,996,75,1013,101.3C1031.1,128,1049,192,1067,197.3C1084.4,203,1102,149,1120,122.7C1137.8,96,1156,96,1173,101.3C1191.1,107,1209,117,1227,117.3C1244.4,117,1262,107,1280,101.3C1297.8,96,1316,96,1333,112C1351.1,128,1369,160,1387,170.7C1404.4,181,1422,171,1431,165.3L1440,160L1440,0L1431.1,0C1422.2,0,1404,0,1387,0C1368.9,0,1351,0,1333,0C1315.6,0,1298,0,1280,0C1262.2,0,1244,0,1227,0C1208.9,0,1191,0,1173,0C1155.6,0,1138,0,1120,0C1102.2,0,1084,0,1067,0C1048.9,0,1031,0,1013,0C995.6,0,978,0,960,0C942.2,0,924,0,907,0C888.9,0,871,0,853,0C835.6,0,818,0,800,0C782.2,0,764,0,747,0C728.9,0,711,0,693,0C675.6,0,658,0,640,0C622.2,0,604,0,587,0C568.9,0,551,0,533,0C515.6,0,498,0,480,0C462.2,0,444,0,427,0C408.9,0,391,0,373,0C355.6,0,338,0,320,0C302.2,0,284,0,267,0C248.9,0,231,0,213,0C195.6,0,178,0,160,0C142.2,0,124,0,107,0C88.9,0,71,0,53,0C35.6,0,18,0,9,0L0,0Z"/></svg>'
    },
    gridConfig: {
      gap: 'large',
      columns: {
        small: ['1fr'],
        default: ['.5fr', '.5fr']
      }
    },
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
