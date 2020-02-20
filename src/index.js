import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import theme from './theme'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Routes />
  </ThemeProvider>,
  document.getElementById('root')
)

serviceWorker.unregister()
