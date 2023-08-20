import { MenuEntry } from "@pancakeswap-libs/uikit";

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Liquidity',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Swap',
        href: 'https://baseswap.fi/swap',
      },
      {
        label: 'Add Liquidity',
        href: 'https://baseswap.fi/add/ETH',
      },
      {
        label: 'Bridge',
        href: '/bridge',
      },
    ],
  },
  {
    label: 'Cooking',
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
       {
        label: 'Kitchen',
        href: '/kitchen',
      }, 
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
    href: 'https://docs.chocobase.xyz/',
  },

  
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'DexScreener',
        href: 'https://dexscreener.com/base/',
      },
      {
        label: 'DexTools',
        href: 'https://www.dextools.io/app/en/base/pair-explorer/',
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
