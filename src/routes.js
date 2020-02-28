import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/home'
import ContextProvider from './context'

export default () => (
  <BrowserRouter>
    <ContextProvider>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </ContextProvider>
  </BrowserRouter>
)
