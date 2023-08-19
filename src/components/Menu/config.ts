import { MenuEntry } from "@pancakeswap-libs/uikit";

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://baseswap.fi/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://baseswap.fi/add/ETH',
      },
      {
        label: 'Bridge (Axelar)',
        href: '/bridge',
      },
    ],
  },
  {
    label: 'Yield',
    icon: 'PoolIcon',
    items: [
      {
        label: 'Farms',
        href: '/farms',
      },
      {
        label: 'Pools',
        href: '/pools',
      },
      /* {
        label: 'Cooking',
        href: '/cooking',
      }, */
    ]
  },
  /* {
     label: 'IDO',
     icon: 'IfoIcon',
     href: '/ido',
   },

    {
     label: 'Lottery',
     icon: 'TicketIcon',
     href: '/lottery',
   }, */
  /* {
    label: 'Wrap HBD',
    icon: 'DollarIcon',
    href: "https://wleo.io/hbd-bsc/",
  },
  {
    label: 'Wrap HIVE',
    icon: 'HiveIcon',
    href: "https://wleo.io/hive-bsc/",
  },
  {
    label: 'PolyCookie',
    icon: 'PawIcon',
    href: 'https://polyCookie.com',
    status: {
      text: 'Polygon',
      color: 'warning',
    },
  }, */
  {
    label: 'Docs',
    icon: 'MoreIcon',
    href: 'https://docs.cookiebase.xyz/',
  },

  
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'DexScreener',
        href: 'https://dexscreener.com/base/0x614747C53CB1636b4b962E15e1D66D3214621100',
      },
      {
        label: 'DexTools',
        href: 'https://www.dextools.io/app/en/base/pair-explorer/0x9072fed6661a64766a17ac4415dbef0afff627df',
      },
      {
        label: 'Token',
        href: 'https://basescan.org/address/',
      },
      /* {
        label: 'Blog',
        href: 'https://medium.com/@Cookiedefi',
      },

       {
    label: 'Vote',
    icon: 'FarmIcon',
    href: 'https://snapshot.org/#/cookiebase.eth',
  },
       */

    ],
  },
  /* {
    label: 'Roadmap',
    icon: 'MoreIcon',
    href: 'https://docs.cookiebase.finance/roadmap',
  },
  {
    label: "Tokenized Blogging",
    icon: "TokenizeIcon",
    href: "https://leofinance.io/",
  }, */
  /* {
    label: "Blog",
    icon: "BlogIcon",
    href: "https://leofinance.io/@leofinance",
  },
  {
    label: 'CertiK Audit',
    icon: 'AuditIcon',
    href: 'https://www.certik.org/projects/CookieBase',
  }, */
]

export default config
