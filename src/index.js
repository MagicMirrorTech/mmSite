import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import theme from './theme'
import * as serviceWorker from './serviceWorker'
import ContextProvider from './context'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ContextProvider>
      <CSSReset />
      <Routes />
    </ContextProvider>
  </ThemeProvider>,
  document.getElementById('root')
)

serviceWorker.unregister()
