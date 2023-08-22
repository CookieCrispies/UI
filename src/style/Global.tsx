import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap-libs/uikit/dist/theme'
import background from './background.jpg'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Bantayog Regular', sans-serif;
  }
  body {
    background-color: #98b6fa;
    
    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
