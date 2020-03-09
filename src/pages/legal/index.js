import React, { useContext } from 'react'
import LegalHeading from '../../components/LegalHeading'
import LegalPoints from '../../components/LegalPoints'
import ContactUs from '../../components/ContactUs'
import Footer from '../../components/Footer'
import { Box } from '@chakra-ui/core'

import legals from '../../legal'
import useScroll from '../../hooks/useScroll'
import { Context } from '../../context'

export default function Legal() {
  const { toggleModal } = useContext(Context)

  useScroll()
  return (
    <Box w="100%" boxSizing="border-box">
      <LegalHeading />
      <LegalPoints legals={legals} />
      <ContactUs onOpen={toggleModal} />
      <Footer />
    </Box>
  )
}
