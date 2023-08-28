import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'chocoinu',
  description:
    'Sweeten your DeFi journey with chocoinu! 🌟 Embrace creamy yields and crumbly rewards on Base Blockchain.',
  image: 'https://chocoinu.finance/images/2logos',
}

export const customMeta: { [key: string]: PageMeta } = {
  '/': {
    title: 'Home | chocoinu',
  },
  '/competition': {
    title: 'Trading Battle | chocoinu',
  },
  '/prediction': {
    title: 'Prediction | chocoinu',
  },
  '/farms': {
    title: 'Farms | chocoinu',
  },
  '/pools': {
    title: 'Pools | chocoinu',
  },
  '/lottery': {
    title: 'Lottery | chocoinu',
  },
  '/collectibles': {
    title: 'Collectibles | chocoinu',
  },
  '/ido': {
    title: 'Initial DEX Offering | chocoinu',
  },
  '/teams': {
    title: 'Leaderboard | chocoinu',
  },
  '/profile/tasks': {
    title: 'Task Center | chocoinu',
  },
  '/profile': {
    title: 'Your Profile | chocoinu',
  },
}
