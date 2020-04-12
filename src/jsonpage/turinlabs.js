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
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/turin-logo-2.svg'
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
    description: 'It’s simple. We build directly, through side-chains or multiple layers any kind of service over the Bitcoin network, leveraging its leading robustness and security',
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
      description: 'Assets design and deployment over side-chains'
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
      description: 'Certification services secured by the strength of Bitcoin'
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
    description: 'After intensive testing and developing over different Blockchains since 2015, today we use Bitcoin to build most of our products and the Ethereum network to stay focus on DeFi applications. We also use Liquid as the main Bitcoin side chain to tokenize, IPFS to storage, Lightning for payments and The Symbol chain (previously NEM) for complex transactions.',
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
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/technologies/bitcoin_w.svg',
      imageConfig: {
        boxConfig: {
          height: '4em',
          fill: 'horizontal',
          margin: { bottom: 'medium' }
        }
      },
      description: 'Services demanding robustness & security'
    }, {
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/technologies/ln_w.svg',
      imageConfig: {
        boxConfig: {
          height: '4em',
          fill: 'horizontal',
          margin: { bottom: 'medium' }
        }
      },
      description: 'Instant, zero-cost & private micropayments'
    }, {
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/technologies/liquid_w.svg',
      imageConfig: {
        boxConfig: {
          height: '4em',
          fill: 'horizontal',
          margin: { bottom: 'medium' }
        }
      },
      description: 'Tokenization & side-chains transactions'
    }, {
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/technologies/ipfs_w.svg',
      imageConfig: {
        boxConfig: {
          height: '4em',
          fill: 'horizontal',
          margin: { bottom: 'medium' }
        }
      },
      description: 'Decentralized custody'
    }, {
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/technologies/eth_w.svg',
      imageConfig: {
        boxConfig: {
          height: '4em',
          fill: 'horizontal',
          margin: { bottom: 'medium' }
        }
      },
      description: 'DeFi protocols to build financial assets'
    }, {
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/technologies/symbol_w.svg',
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
    description: 'We develop our proprietary products, as well as helping others in their development run, by adding value from a technical, business, comercial, financial and strategic crypto perspective. If you have your own resources but need help let us handle with the solution!',
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
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/products/lightnite.svg',
      imageConfig: {
        boxConfig: {
          height: 'xsmall',
          margin: { bottom: 'xsmall' }
        }
      },
      description: 'Fortnite improved with bitcoin rewards'
    }, {
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/products/blockfier.svg',
      imageConfig: {
        boxConfig: {
          height: 'xsmall',
          margin: { bottom: 'xsmall' }
        }
      },
      description: 'Apostille service with decentralized custody'
    }, {
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/products/drinkchain.svg',
      imageConfig: {
        boxConfig: {
          height: 'xsmall',
          margin: { bottom: 'xsmall' }
        }
      },
      description: 'Data collection service for spirits industry'
    }, {
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/products/apitoshi.svg',
      imageConfig: {
        boxConfig: {
          height: 'xsmall',
          margin: { bottom: 'xsmall' }
        }
      },
      description: 'API infrastructure for LN payments'
    }, {
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/products/turinpay.svg',
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
    description: 'We are entrepreneurs with active & profitable companies and sufficient concern to keep creating new realities; Engineers and Innovation professionals with 100+ years combined experience in technology development. :-)',
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
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/team/miguel.png',
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
        icon: 'Language',
        href: 'https://www.miguelcaballero.eu',
        iconConfig: {
          color: 'light-1'
        }
      }, {
        icon: 'Twitter',
        href: 'https://www.twitter.com/mcaballero',
        iconConfig: {
          color: 'light-1'
        }
      }, {
        icon: 'Linkedin',
        href: 'https://www.linkedin.com/in/micaballero/',
        iconConfig: {
          color: 'light-1'
        }
      }]
    }, {
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/team/borlado.png',
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
        href: 'https://www.linkedin.com/in/carlos-borlado-5b833011/',
        iconConfig: {
          color: 'light-1'
        }
      }]
    }, {
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/team/sokar.png',
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
        href: 'https://www.github.com/sokardys',
        iconConfig: {
          color: 'light-1'
        }
      }, {
        icon: 'Twitter',
        href: 'https://www.twitter.com/sokardys',
        iconConfig: {
          color: 'light-1'
        }
      }, {
        icon: 'Linkedin',
        href: 'https://www.linkedin.com/in/sokardys/',
        iconConfig: {
          color: 'light-1'
        }
      }]
    }, {
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/team/ker.png',
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
        href: 'https://www.github.com/whiteyhat',
        iconConfig: {
          color: 'light-1'
        }
      }, {
        icon: 'Twitter',
        href: 'https://www.twitter.com/whiteyhat',
        iconConfig: {
          color: 'light-1'
        }
      }, {
        icon: 'Linkedin',
        href: 'https://www.linkedin.com/in/whiteyhat/',
        iconConfig: {
          color: 'light-1'
        }
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
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/partners/blockstream.svg',
      imageConfig: {
        boxConfig: {
          height: '3em',
          fill: 'horizontal'
        }
      },
      justify: 'center'
    }, {
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/partners/coinbase.svg',
      imageConfig: {
        boxConfig: {
          height: '2.5em',
          fill: 'horizontal'
        }
      },
      justify: 'center'
    }, {
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/partners/compound.svg',
      imageConfig: {
        boxConfig: {
          height: '2.5em',
          fill: 'horizontal'
        }
      },
      justify: 'center'
    }, {
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/partners/dy_dx.svg',
      imageConfig: {
        boxConfig: {
          height: '2.5em',
          fill: 'horizontal'
        }
      },
      justify: 'center'
    }, {
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/partners/uniswap.svg',
      imageConfig: {
        boxConfig: {
          height: '2.5em',
          fill: 'horizontal'
        }
      },
      justify: 'center'
    }, {
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/partners/aave.svg',
      imageConfig: {
        boxConfig: {
          height: '2.5em',
          fill: 'horizontal'
        }
      },
      justify: 'center'
    }, {
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/partners/nuo.svg',
      imageConfig: {
        boxConfig: {
          height: '2.5em',
          fill: 'horizontal'
        }
      },
      justify: 'center'
    }, {
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/partners/kyber.svg',
      imageConfig: {
        boxConfig: {
          height: '2.5em',
          fill: 'horizontal'
        }
      },
      justify: 'center'
    }, {
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/partners/bancor.svg',
      imageConfig: {
        boxConfig: {
          height: '2.5em',
          fill: 'horizontal'
        }
      },
      justify: 'center'
    }, {
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/partners/maker.svg',
      imageConfig: {
        boxConfig: {
          height: '1.9em',
          fill: 'horizontal'
        }
      },
      justify: 'center'
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
        href: 'https://www.twitter.com/turinlabs',
        iconConfig: {
          color: 'light-1'
        }
      }, {
        icon: 'Facebook',
        href: 'https://www.google.com',
        iconConfig: {
          color: 'light-1'
        }
      }, {
        icon: 'Youtube',
        href: 'https://www.google.com',
        iconConfig: {
          color: 'light-1'
        }
      }, {
        icon: 'Medium',
        href: 'https://www.google.com',
        iconConfig: {
          color: 'light-1'
        }
      }],
      iconsConfig: {
        pad: 'none',
        gap: 'medium'
      },
      justify: 'end'
    }],
    pad: 'large',
    background: 'dark-1'
  },
  {
    section: 'footer',
    background: 'dark-1',
    children: '2020 &copy; Turin Labs SL made with ❤️ from Madrid'
  },
  {
    section: 'form',
    id: 'tl-contactform',
    title: 'Tell us your needs',
    description: 'Complete the form and we’ll try to contact you',
    descriptionConfig: {
      margin: { bottom: 'medium' }
    },
    button: { label: 'Send' },
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
          required: 'Insert your name'
        }
      },
      email: {
        label: 'E-mail',
        placeholder: 'Ej. miguel@gmail.com',
        type: 'text',
        validation: {
          required: 'Insert your email',
          email: 'Insert a valid email'
        }
      },
      more: {
        label: 'Description',
        placeholder: 'Tell us your needs',
        type: 'textarea',
        validation: {
          required: 'Tell us your needs'
        }
      }
    }
  },
  {
    section: 'floating',
    gap: 80,
    logo: {
      width: '16em',
      src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/turin-logo-2.svg'
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
