import React, { useContext, useState } from 'react'
import { useToast } from '@chakra-ui/core'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/home'
import Legal from './pages/legal'
import Privacy from './pages/privacy'

import CreateValueModal from './components/CreateValueModal'
import OurMissionModal from './components/OurMissionModal'

import useInput from './hooks/useInput'
import { Context } from './context'

export default () => {
  const [loading, setLoading] = useState(false)
  const toast = useToast()
  const badToast = useToast()
  const { onClose, isOpen, modal, toggleModal } = useContext(Context)
  const name = useInput('')
  const email = useInput('')
  const message = useInput('')

  const submit = () => {
    setLoading(true)
    const data = {
      name: name.value,
      email: email.value,
      text: message.value
    }

    fetch('https://mm-mailing.herokuapp.com/mailing', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        if (result.response.includes('250 Ok')) {
          toast({
            title: 'Thank you!',
            description: 'Your message has been successfully sent. We will contact you very soon!',
            status: 'success',
            duration: 3000,
            isClosable: true
          })
        } else {
          badToast({
            title: 'Ooops!',
            description: 'Something went wrong, try later.',
            status: 'error',
            duration: 3000,
            isClosable: true
          })
        }
      })
      .finally(() => {
        setLoading(false)
        onClose()
        name.clean()
        email.clean()
        message.clean()
      })
  }

  const modalProps = {
    name,
    email,
    message,
    onClose,
    isOpen,
    submit,
    loading
  }

  return (
    <BrowserRouter>
      <Navbar />
      <CreateValueModal {...modalProps} />
      <OurMissionModal onClose={toggleModal} isOpen={modal} />
      <Switch>
        <Route exact path="/privacy" component={Privacy} />
        <Route exact path="/legal" component={Legal} />
        <Route exact path="/" component={Home} />
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
