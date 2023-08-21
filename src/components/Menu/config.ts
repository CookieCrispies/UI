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
        href: 'https://baseswap.fi/swap?outputCurrency=0x6d6080492D0Bd40F1e44cc16791CC1664357f685',
      },
      {
        label: 'Add Liquidity',
        href: 'https://baseswap.fi/add/ETH/0x6d6080492D0Bd40F1e44cc16791CC1664357f685',
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
        href: 'https://dexscreener.com/base/0x6d6080492D0Bd40F1e44cc16791CC1664357f685',
      },
      {
        label: 'DexTools',
        href: 'https://www.dextools.io/app/en/base/pair-explorer/0xb299321d689c366057b95c0ff10a5ba936290a63',
      },
      {
        label: 'Token',
        href: 'https://basescan.org/address/0x6d6080492D0Bd40F1e44cc16791CC1664357f685#code',
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
