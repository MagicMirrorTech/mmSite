import React from 'react'
import { hydrate, render } from 'react-dom'
import Routes from './routes'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import theme from './theme'
import * as serviceWorker from './serviceWorker'
import ContextProvider from './context'

const rootElement = document.getElementById('root')
const App = () => (
  <ThemeProvider theme={theme}>
    <ContextProvider>
      <CSSReset />
      <Routes />
    </ContextProvider>
  </ThemeProvider>
)
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement)
} else {
  render(<App />, rootElement)
}

serviceWorker.register()
