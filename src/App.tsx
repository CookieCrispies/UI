import React, { useEffect, lazy } from 'react'
// import { Router, Redirect, Route, Switch } from 'react-router-dom'
import { Router, Route, Switch } from 'react-router-dom'
import { ResetCSS } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js'
import useEagerConnect from 'hooks/useEagerConnect'
import { useFetchProfile, useFetchPublicData } from 'state/hooks'
import GlobalStyle from './style/Global'
import Menu from './components/Menu'
import SuspenseWithChunkError from './components/SuspenseWithChunkError'
// import ToastListener from './components/ToastListener'
import PageLoader from './components/PageLoader'
// import EasterEgg from './components/EasterEgg'
// import Pools from './views/Pools'
import history from './routerHistory'

// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page
const Home = lazy(() => import('./views/Home'))
const Farms = lazy(() => import('./views/Farms'))
const Vaults = lazy(() => import('./views/Kingdoms'))
const NotFound = lazy(() => import('./views/NotFound'))
const Bridge = lazy(() => import('./views/Bridge'))
const Pools = lazy(() => import('./views/Pools'))
/* const Lottery = lazy(() => import('./views/lottery')) */
const Ifos = lazy(() => import('./views/Ifos'))
// const Airdrop = lazy(() => import('./views/Airdrop'))
/*
const Ifos = lazy(() => import('./views/Ifos'))
const NotFound = lazy(() => import('./views/NotFound'))
const Collectibles = lazy(() => import('./views/Collectibles'))
const Teams = lazy(() => import('./views/Teams'))
const Team = lazy(() => import('./views/Teams/Team'))
const Profile = lazy(() => import('./views/Profile'))
const TradingCompetition = lazy(() => import('./views/TradingCompetition'))
const Predictions = lazy(() => import('./views/Predictions')) */

// This config is required for number formating
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const App: React.FC = () => {
  // Monkey patch warn() because of web3 flood
  // To be removed when web3 1.3.5 is released
  useEffect(() => {
    console.warn = () => null
  }, [])

  useEagerConnect()
  useFetchPublicData()
  useFetchProfile()

  return (
    <Router history={history}>
      <ResetCSS />
      <GlobalStyle />
      <Menu>
        <SuspenseWithChunkError fallback={<PageLoader />}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/farms">
              <Farms />
            </Route>
            <Route path="/pools">
              <Farms tokenMode/>
            </Route>
            {/* <Route path="/kitchen">
              <Pools/>
            </Route> */}
            <Route path="/vaults">
              <Vaults />
            </Route>
            <Route path="/ido">
              <Ifos />
            </Route>
            <Route path="/bridge">
              <Bridge />
            </Route>
            {/* <Route path="/lottery">
              <Lottery />
            </Route> */}
            {/* <Route path="/airdrop">
              <Airdrop />
            </Route>

            <Route path="/ifo">
              <Ifos />
            </Route>
            <Route path="/collectibles">
              <Collectibles />
            </Route>
            <Route exact path="/teams">
              <Teams />
            </Route>
            <Route path="/teams/:id">
              <Team />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/competition">
              <TradingCompetition />
            </Route>
            <Route path="/prediction">
              <Predictions />
            </Route> */}
            {/* Redirect */}
            {/* <Route path="/staking">
              <Redirect to="/pools" />
            </Route>
            <Route path="/syrup">
              <Redirect to="/pools" />
            </Route>
            <Route path="/nft">
              <Redirect to="/collectibles" />
            </Route> */}
            {/* 404 */}
            <Route component={NotFound} />
          </Switch>
        </SuspenseWithChunkError>

      </Menu>
      {/* <EasterEgg iterations={2} />
      <ToastListener /> */}
    </Router>
  )
}

export default React.memo(App)
