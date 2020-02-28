import React, { useContext } from 'react'
import AboutUs from '../../components/AboutUs'
import OurWork from '../../components/OurWork'
import CreateValueModal from '../../components/CreateValueModal'
import OurInspiration from '../../components/OurInspiration'
import Services from '../../components/Services'
import CTACard from '../../components/CTACard'

import { Box } from '@chakra-ui/core'
import { useInput } from '../../hooks/useInput'
import { Context } from '../../context'
import Customers from '../../components/Customers'
import Partners from '../../components/Partners'

function Home() {
  const { onOpen, onClose, isOpen } = useContext(Context)
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
      <CTACard
        text1="GET THE GAINS!"
        text2="EMPOWER YOUR BUSINESS AND START GROWING IT TODAY!"
        btnText="CREATE VALUE"
        btnBg="mmblue.500"
        btnVar="mmblue"
      />
      <Customers />
      <Partners />

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
