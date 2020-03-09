import React, { useContext } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/home'
import Legal from './pages/legal'
import Privacy from './pages/privacy'
import CreateValueModal from './components/CreateValueModal'
import OurMissionModal from './components/OurMissionModal'
import { Context } from './context'
import useInput from './hooks/useInput'

export default () => {
  const { onClose, isOpen, modal, toggleModal } = useContext(Context)
  const name = useInput('')
  const email = useInput('')
  const message = useInput('')

  const submit = () => {
    // values ready for submit to the server in [key].value
    name.clean()
    email.clean()
    message.clean()
    onClose()
  }

  return (
    <BrowserRouter>
      <Navbar />
      <CreateValueModal
        name={name}
        email={email}
        message={message}
        onClose={onClose}
        isOpen={isOpen}
        submit={submit}
      />
      <OurMissionModal onClose={toggleModal} isOpen={modal} />
      <Switch>
        <Route exact path="/privacy" component={Privacy} />
        <Route exact path="/legal" component={Legal} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}
