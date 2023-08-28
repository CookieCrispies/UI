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
        href: 'https://shibbex.com/fr/swap',
      },
      {
        label: 'Add Liquidity',
        href: 'https://shibbex.com/fr/add/ETH',
      },
      {
        label: 'Bridge',
        href: 'https://shibarium.shib.io/bridge',
      },
    ],
  },
  {
    label: 'Bowl',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Food',
    icon: 'PoolIcon',
    href: '/pools',
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
    href: 'https://docs.chocoinu.com/',
  },

  
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'DexScreener',
        href: 'https://dexscreener.com',
      },
      {
        label: 'DexTools',
        href: 'https://www.dextools.io',
      },
      {
        label: 'Token',
        href: 'https://www.shibariumscan.io',
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
