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
    src: '//turin-labs.com/assets/img/utils/logo.png'
  },
  menuOptions: [
    {
      href: '#expertise',
      label: 'Expertise'
    }, {
      href: '#technologies',
      label: 'Technologies'
    }, {
      href: '#projects',
      label: 'Projects'
    }, {
      href: '#team',
      label: 'Team'
    }, {
      href: '#partners',
      label: 'Partners'
    }, {
      type: 'button',
      href: '#contact',
      primary: true,
      label: 'CONTACT'
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
    title: 'lAPPs for a new world',
    titleConfig: {
      level: '1',
      size: 'small',
      margin: { vertical: 'medium', horizontal: 'none' },
      alignSelf: 'start'
    },
    description: 'We believe in the power of Bitcoin ecosystem to develop the most innovative services for next generation users.<br/><br/>Payments, DeFi, Tokenization, Gaming, Education, Apostille, Digital ID, Custody… any kind of service you can imagine to use around Bitcoin, we built it',
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
  background: 'dark-1',
  pad: { vertical: 'xlarge', horizontal: 'large' }
},
{
  section: 'hero',
  title: 'We like Bitcoin',
  description: 'It’s simple. We build directly, through sidechains or multiple layers any kind of service over Bitcoin, getting the strength of the network',
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
    top: true,
    title: 'Payments',
    titleConfig: { size: 'small' },
    src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/payments.svg',
    imageConfig: {
      boxConfig: {
        height: 'small'
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
        height: 'small'
      }
    },
    description: 'Video games with incentives based on BTC'
  }, {
    type: 'imageBlock',
    top: true,
    title: 'Tokenization',
    titleConfig: { size: 'small' },
    src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/tokenization.svg',
    imageConfig: {
      boxConfig: {
        height: 'small'
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
        height: 'small'
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
        height: 'small'
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
        height: 'small'
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
        height: 'small'
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
        height: 'small'
      }
    },
    description: 'New services designed for decentralized finance'
  }],
  background: 'light-3'
},
{
  section: 'hero',
  title: 'Technologies we work with',
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
        height: 'small'
      }
    },
    description: 'Services demanding strength & security'
  }, {
    type: 'imageBlock',
    src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/ln.svg',
    imageConfig: {
      boxConfig: {
        height: 'small'
      }
    },
    description: 'Micropayments crypto-crypto-fiat'
  }, {
    type: 'imageBlock',
    src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/liquid.svg',
    imageConfig: {
      boxConfig: {
        height: 'small'
      }
    },
    description: 'Tokenization & sidechains transactions'
  }, {
    type: 'imageBlock',
    src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/ipfs.svg',
    imageConfig: {
      boxConfig: {
        height: 'small'
      }
    },
    description: 'Decentralized custody'
  }, {
    type: 'imageBlock',
    src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/eth.svg',
    imageConfig: {
      boxConfig: {
        height: 'small'
      }
    },
    description: 'DeFi services and collaterals'
  }, {
    type: 'imageBlock',
    src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/symbol.svg',
    imageConfig: {
      boxConfig: {
        height: 'small'
      }
    },
    description: 'Multilevel multisignature transactions'
  }],
  background: 'light-1'
},
{
  section: 'hero',
  title: 'Projects',
  description: 'We launch our own projects and empower third ones',
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
    src: 'https://picsum.photos/seed/picsum/200/112',
    imageConfig: {
      boxConfig: {
        height: 'small'
      }
    },
    description: 'Bitcoin & LN payment fiat processor'
  }, {
    type: 'imageBlock',
    src: 'https://picsum.photos/seed/picsum/200/112',
    imageConfig: {
      boxConfig: {
        height: 'small'
      }
    },
    description: 'Earn bitcoins playing online'
  }, {
    type: 'imageBlock',
    src: 'https://picsum.photos/seed/picsum/200/112',
    imageConfig: {
      boxConfig: {
        height: 'small'
      }
    },
    description: 'Apostille service with decentralized custody'
  }, {
    type: 'imageBlock',
    src: 'https://picsum.photos/seed/picsum/200/112',
    imageConfig: {
      boxConfig: {
        height: 'small'
      }
    },
    description: 'Fiat-to-Lightning service'
  }],
  background: 'light-3'
},
{
  section: 'hero',
  title: 'Team',
  description: 'Engineers & physicists with more than 100 years tech experience combined :-)',
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
        height: 'small'
      }
    },
    description: 'CEO Tutellus, writer, BizDev. Former Neomedia, Quoba&MET'
  }, {
    type: 'imageBlock',
    src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/carlos.png',
    imageConfig: {
      boxConfig: {
        height: 'small'
      }
    },
    description: 'COO Satoshis games. Former DiscoveryBlock & Betalimit '
  }, {
    type: 'imageBlock',
    src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/sokar.png',
    imageConfig: {
      boxConfig: {
        height: 'small'
      }
    },
    description: 'CTO Tutellus, Infrastructure. Former Sokartec, Apple & Telefonica R&D'
  }, {
    type: 'imageBlock',
    src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/ker.png',
    imageConfig: {
      boxConfig: {
        height: 'small'
      }
    },
    description: 'CEO Satoshis games. Former Bitcoin & LN engineer'
  }],
  background: 'light-1'
},
{
  section: 'hero',
  title: 'Partners',
  description: 'Big companies willing to help projects from our ecosystem',
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
    src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/payments.svg',
    imageConfig: {
      boxConfig: {
        height: 'small'
      }
    }
  }, {
    type: 'imageBlock',
    src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/gaming.svg',
    imageConfig: {
      boxConfig: {
        height: 'small'
      }
    }
  }, {
    type: 'imageBlock',
    src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/tokenization.svg',
    imageConfig: {
      boxConfig: {
        height: 'small'
      }
    }
  }, {
    type: 'imageBlock',
    src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/digital-id.svg',
    imageConfig: {
      boxConfig: {
        height: 'small'
      }
    }
  }, {
    type: 'imageBlock',
    src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/education.svg',
    imageConfig: {
      boxConfig: {
        height: 'small'
      }
    }
  }, {
    type: 'imageBlock',
    src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/apostille.svg',
    imageConfig: {
      boxConfig: {
        height: 'small'
      }
    }
  }, {
    type: 'imageBlock',
    src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/custody.svg',
    imageConfig: {
      boxConfig: {
        height: 'small'
      }
    }
  }, {
    type: 'imageBlock',
    src: 'https://turin-labs.s3-eu-west-1.amazonaws.com/images/defi.svg',
    imageConfig: {
      boxConfig: {
        height: 'small'
      }
    }
  }],
  background: 'light-3'
},
{
  section: 'contact',
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
  }
},
{
  section: 'floating',
  gap: 80,
  logo: {
    width: '16em',
    src: '//turin-labs.com/assets/img/utils/logo.png'
  },
  background: 'light-1',
  pad: 'small',
  button: {
    href: '#contact',
    primary: true,
    label: 'CONTACT',
    labelConfig: {
      weight: 'bold'
    }
  }
}]
