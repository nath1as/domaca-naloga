import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
  height: 100%;
  width: 100%;
  body {
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
  }
  button {
  cursor: pointer;
}
`

export default GlobalStyle
