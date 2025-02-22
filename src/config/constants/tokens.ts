const tokens = {
  bnb: {
    symbol: 'PLS',
    projectLink: 'https://gopulse.com/',
  },
  cake: {
    symbol: 'CAKE',
    address: {
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
      369: '0xece11C704F38FF38520667AeCDd7f53eA82F60F5',
      109 : '0x6d6080492D0Bd40F1e44cc16791CC1664357f685',
    },
    decimals: 18,
    projectLink: 'https://baseswap.fi/',
  },
  cookie: {
    symbol: 'Choco',
    address: {
      56: '0x614747C53CB1636b4b962E15e1D66D3214621100',
      97: '0x614747C53CB1636b4b962E15e1D66D3214621100',
      369: '0x614747C53CB1636b4b962E15e1D66D3214621100',
      109 : '0x4C1B3f430279D14cE6BEd1cDbfa2DE40F9183679',
    },
    decimals: 18,
    projectLink: 'https://chocoinu.xyz/',
  },
  choco: {
    symbol: 'CHOCO',
    address: {
      56: '0x614747C53CB1636b4b962E15e1D66D3214621100',
      97: '0x614747C53CB1636b4b962E15e1D66D3214621100',
      369: '0x614747C53CB1636b4b962E15e1D66D3214621100',
      109 : '0x4C1B3f430279D14cE6BEd1cDbfa2DE40F9183679', // TODO
    },
    decimals: 18,
    projectLink: 'https://chocoinu.xyz/',
  },
  wbnb: {
    symbol: 'BNB',
    address: {
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
      97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
      369: '',
      109 : '',
    },
    decimals: 6,
    projectLink: 'https://baseswap.fi/',
  },

  busd: {
    symbol: 'BUSD',
    address: {
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
      97: '',
      369: '',
      109 : '',
    },
    decimals: 6,
    projectLink: 'https://www.paxos.com/busd/',
  },
  eth: {
    symbol: 'WETH',
    address: {
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
      97: '',
      369: '0x02DcdD04e3F455D838cd1249292C58f3B79e3C3C',
      109 : '0x8ed7d143Ef452316Ab1123d28Ab302dC3b80d3ce',
    },
    decimals: 18,
    projectLink: 'https://ethereum.org/en/',
  },
  cbeth: {
    symbol: 'CBETH',
    address: {
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
      97: '',
      369: '0x02DcdD04e3F455D838cd1249292C58f3B79e3C3C',
      109 : '0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22',
    },
    decimals: 18,
    projectLink: 'https://ethereum.org/en/',
  },
  usdc: {
    symbol: 'USDC',
    address: {
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
      97: '',
      369: '0x15D38573d2feeb82e7ad5187aB8c1D52810B1f07',
      109 : '0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA',
    },
    decimals: 6,
    projectLink: 'https://www.centre.io/usdc',
  },
  toshi: {
    symbol: 'TOSHI',
    address: {
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
      97: '',
      369: '0x15D38573d2feeb82e7ad5187aB8c1D52810B1f07',
      109 : '0x8544FE9D190fD7EC52860abBf45088E81Ee24a8c',
    },
    decimals: 18,
    projectLink: 'https://www.centre.io/usdc',
  },
  wpls: {
    symbol: 'wpls',
    address: {
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
      97: '',
      369: '0xA1077a294dDE1B09bB078844df40758a5D0f9a27',
      109 : '',
    },
    decimals: 18,
    projectLink: 'https://www.centre.io/usdc',
  },
  inc: {
    symbol: 'inc',
    address: {
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
      97: '',
      369: '0x2fa878Ab3F87CC1C9737Fc071108F904c0B0C95d',
      109 : '',
    },
    decimals: 18,
    projectLink: 'https://www.centre.io/usdc',
  },
  plsx: {
    symbol: 'plsx',
    address: {
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
      97: '',
      369: '0x95B303987A60C71504D99Aa1b13B4DA07b0790ab',
      109 : '',
    },
    decimals: 18,
    projectLink: 'https://www.centre.io/usdc',
  },
  hex: {
    symbol: 'hex',
    address: {
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
      97: '',
      369: '0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39',
      109 : '',
    },
    decimals: 8,
    projectLink: 'https://www.centre.io/usdc',
  },
  ehex: {
    symbol: 'ehex',
    address: {
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
      97: '',
      369: '0x57fde0a71132198BBeC939B98976993d8D89D225',
      109 : '',
    },
    decimals: 8,
    projectLink: 'https://www.centre.io/usdc',
  },
  dai: {
    symbol: 'DAI',
    address: {
      56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
      97: '',
      369: '0xefD766cCb38EaF1dfd701853BFCe31359239F305',
      109 : '0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb',
    },
    decimals: 18,
    projectLink: 'http://www.makerdao.com/',
  },
  dot: {
    symbol: 'DOT',
    address: {
      56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
      369: '',
      109 : '',
    },
    decimals: 6,
    projectLink: 'https://polkadot.network/',
  },
  usdt: {
    symbol: 'USDT',
    address: {
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
      56: '0x55d398326f99059ff775485246999027b3197955',
      369: '',
      109 : '',
    },
    decimals: 6,
    projectLink: 'https://tether.to/',
  },
  btcb: {
    symbol: 'BTCB',
    address: {
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
      369: '',
      109 : '',
    },
    decimals: 6,
    projectLink: 'https://bitcoin.org/',
  },
  Cookie: {
    symbol: 'Choco',
    address: {
      56: '0x50d809c74e0b8e49e7b4c65bb3109abe3ff4c1c1',
      97: '',
      369: '0xece11C704F38FF38520667AeCDd7f53eA82F60F5',
      109 : '0x4C1B3f430279D14cE6BEd1cDbfa2DE40F9183679', // TODO
    },
    decimals: 18,
    projectLink: 'https://chocoinu.finance/',
  },
  LEASH: {
    symbol: 'LEASH',
    address: {
      56: '0x50d809c74e0b8e49e7b4c65bb3109abe3ff4c1c1',
      97: '',
      369: '0xece11C704F38FF38520667AeCDd7f53eA82F60F5',
      109 : '', // TODO
    },
    decimals: 18,
    projectLink: 'https://chocoinu.finance/',
  },
  SHIB: {
    symbol: 'SHIB',
    address: {
      56: '0x50d809c74e0b8e49e7b4c65bb3109abe3ff4c1c1',
      97: '',
      369: '0xece11C704F38FF38520667AeCDd7f53eA82F60F5',
      109 : '', // TODO
    },
    decimals: 18,
    projectLink: 'https://chocoinu.finance/',
  },
  WBONE: {
    symbol: 'WBONE',
    address: {
      56: '0x50d809c74e0b8e49e7b4c65bb3109abe3ff4c1c1',
      97: '',
      369: '0xece11C704F38FF38520667AeCDd7f53eA82F60F5',
      109 : '0x213c25900f365F1BE338Df478CD82beF7Fd43F85', // TODO
    },
    decimals: 18,
    projectLink: 'https://chocoinu.finance/',
  },
  bleo: {
    symbol: 'bLEO',
    address: {
      56: '0x6421531af54c7b14ea805109035ebf1e3661c44a',
      97: '',
      369: '',
      109 : '',
    },
    decimals: 6,
    projectLink: 'https://chocoinu.finance/',
  },
  dec: {
    symbol: 'DEC',
    address: {
      56: '0xe9d7023f2132d55cbd4ee1f78273cb7a3e74f10a',
      97: '',
      369: '',
      109 : '',
    },
    decimals: 6,
    projectLink: 'https://chocoinu.finance/',
  },
  bake: {
    symbol: 'BAKE',
    address: {
      56: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
      369: '',
      109 : '',
    },
    decimals: 6,
    projectLink: 'https://www.bakeryswap.org/',
  },
  belt: {
    symbol: 'BELT',
    address: {
      56: '0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f',
      97: '',
      369: '',
      109 : '',
    },
    decimals: 6,
    projectLink: 'https://beta.belt.fi/',
  },
  beltbtc: {
    symbol: 'beltBTC',
    address: {
      56: '0x51bd63f240fb13870550423d208452ca87c44444',
      97: '',
      369: '',
      109 : '',
    },
    decimals: 6,
    projectLink: 'https://belt.fi/bsc',
  },
  belteth: {
    symbol: 'beltETH',
    address: {
      56: '0xaa20e8cb61299df2357561c2ac2e1172bc68bc25',
      97: '',
      369: '',
      109 : '',
    },
    decimals: 6,
    projectLink: 'https://belt.fi/bsc',
  },
  beltusd: {
    symbol: '4belt',
    address: {
      56: '0x9cb73f20164e399958261c289eb5f9846f4d1404',
      97: '',
      369: '',
      109 : '',
    },
    decimals: 6,
    projectLink: 'https://belt.fi/bsc',
  },
  /* For IDOs */
  hzn: {
    symbol: 'HZN',
    address: {
      56: '0xC0eFf7749b125444953ef89682201Fb8c6A917CD',
      97: '',
      369: '',
      109 : '',
    },
    decimals: 6,
    projectLink: 'https://horizonprotocol.com/',
  },
  watch: {
    symbol: 'WATCH',
    address: {
      56: '0x7A9f28EB62C791422Aa23CeAE1dA9C847cBeC9b0',
      97: '',
      369: '',
      109 : '',
    },
    decimals: 6,
    projectLink: 'https://yieldwatch.net/',
  },
  bry: {
    symbol: 'BRY',
    address: {
      56: '0xf859Bf77cBe8699013d6Dbc7C2b926Aaf307F830',
      97: '',
      369: '',
      109 : '',
    },
    decimals: 6,
    projectLink: 'https://berrydata.co/',
  },
  wsote: {
    symbol: 'wSOTE',
    address: {
      56: '0x541E619858737031A1244A5d0Cd47E5ef480342c',
      97: '',
      369: '',
      109 : '',
    },
    decimals: 6,
    projectLink: 'https://soteria.finance/#/',
  },
  helmet: {
    symbol: 'Helmet',
    address: {
      56: '0x948d2a81086A075b3130BAc19e4c6DEe1D2E3fE8',
      97: '',
      369: '',
      109 : '',
    },
    decimals: 6,
    projectLink: 'https://www.helmet.insure/',
  },
  ten: {
    symbol: 'TEN',
    address: {
      56: '0xdFF8cb622790b7F92686c722b02CaB55592f152C',
      97: '',
      369: '',
      109 : '',
    },
    decimals: 6,
    projectLink: 'https://www.tenet.farm/',
  },
  ditto: {
    symbol: 'DITTO',
    address: {
      56: '0x233d91A0713155003fc4DcE0AFa871b508B3B715',
      97: '',
      369: '',
      109 : '',
    },
    decimals: 9,
    projectLink: 'https://ditto.money/',
  },
  blink: {
    symbol: 'BLINK',
    address: {
      56: '0x63870A18B6e42b01Ef1Ad8A2302ef50B7132054F',
      97: '',
      369: '',
      109 : '',
    },
    decimals: 6,
    projectLink: 'https://blink.wink.org',
  },
  cakepop: {
    symbol: 'CAKEPOP',
    address: {
      56: '0x2f0de2cfa6f4b3a7fd4b650a4c771e07718bb4b0',
      97: '',
      369: '',
      109 : '',
    },
    decimals: 6,
    projectLink: 'https://cakepop.app',
  },
  sps: {
    symbol: 'SPS',
    address: {
      56: '0x1633b7157e7638c4d6593436111bf125ee74703f',
      97: '',
      369: '',
      109 : '',
    },
    decimals: 6,
    projectLink: 'https://splinterlands.com/',
  },
  bhbd: {
    symbol: 'bHBD',
    address: {
      56: '0x874966221020d6ac1aed0e2cfad9cbfee0ba713b',
      97: '',
      369: '',
      109 : '',
    },
    decimals: 3,
    projectLink: 'https://chocoinu.finance/',
  },
  bhive: {
    symbol: 'bHIVE',
    address: {
      56: '0x9faf07d1fbc130d698e227e50d1fb72657c0a342',
      97: '',
      369: '',
      109 : '',
    },
    decimals: 3,
    projectLink: 'https://chocoinu.finance/',
  },
}

export default tokens
