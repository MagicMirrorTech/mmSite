import React from 'react'
import AboutUs from '../../components/AboutUs'
import OurWork from '../../components/OurWork'
import CreateValueModal from '../../components/CreateValueModal'
import OurInspiration from '../../components/OurInspiration'
import Services from '../../components/Services'

import { Box, useDisclosure } from '@chakra-ui/core'
import { useInput } from '../../hooks/useInput'

function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()
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
    <Box boxSizing="border-box" p={8}>
      <AboutUs onOpen={onOpen} />
      <OurWork />
      <OurInspiration />
      <Services />
      <CreateValueModal
        name={name}
        email={email}
        message={message}
        onClose={onClose}
        isOpen={isOpen}
        submit={submit}
      />
    </Box>
  )
}

export default Home
