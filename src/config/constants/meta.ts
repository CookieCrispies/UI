import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'ChocoBase',
  description:
    'Sweeten your DeFi journey with ChocoBase! 🌟 Embrace creamy yields and crumbly rewards on Base Blockchain.',
  image: 'https://chocoBase.finance/images/2logos',
}

export const customMeta: { [key: string]: PageMeta } = {
  '/': {
    title: 'Home | ChocoBase',
  },
  '/competition': {
    title: 'Trading Battle | ChocoBase',
  },
  '/prediction': {
    title: 'Prediction | ChocoBase',
  },
  '/farms': {
    title: 'Farms | ChocoBase',
  },
  '/pools': {
    title: 'Pools | ChocoBase',
  },
  '/lottery': {
    title: 'Lottery | ChocoBase',
  },
  '/collectibles': {
    title: 'Collectibles | ChocoBase',
  },
  '/ido': {
    title: 'Initial DEX Offering | ChocoBase',
  },
  '/teams': {
    title: 'Leaderboard | ChocoBase',
  },
  '/profile/tasks': {
    title: 'Task Center | ChocoBase',
  },
  '/profile': {
    title: 'Your Profile | ChocoBase',
  },
}
