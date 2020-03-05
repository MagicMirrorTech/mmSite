import React, { useContext, useEffect } from 'react'
import AboutUs from '../../components/AboutUs'
import OurWork from '../../components/OurWork'
import CreateValueModal from '../../components/CreateValueModal'
import OurInspiration from '../../components/OurInspiration'
import Services from '../../components/Services'
import CTACard from '../../components/CTACard'
import Customers from '../../components/Customers'
import Partners from '../../components/Partners'
import OurBlog from '../../components/OurBlog'
import ContactUs from '../../components/ContactUs'
import Footer from '../../components/Footer'
import OurMissionModal from '../../components/OurMissionModal'
import { Box } from '@chakra-ui/core'
import { Context } from '../../context'
import useInput from '../../hooks/useInput'
import useScroll from '../../hooks/useScroll'

function Home() {
  useScroll()
  useEffect(() => {
    document.title = 'MM | Home'
  })
  const { onOpen, onClose, isOpen, modal, toggleModal } = useContext(Context)
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
    <Box boxSizing="border-box">
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
      <OurBlog />
      <CTACard
        text1="LET'S GET STARTED"
        text2="DIGITALIZE YOUR BUSINESS NOW"
        btnText="CREATE VALUE"
        btnBg="mmyellow.500"
        btnVar="mmyellow"
      />
      <ContactUs onOpen={toggleModal} />
      <Footer />

      <CreateValueModal
        name={name}
        email={email}
        message={message}
        onClose={onClose}
        isOpen={isOpen}
        submit={submit}
      />
      <OurMissionModal onClose={toggleModal} isOpen={modal} />
    </Box>
  )
}

export default Home
