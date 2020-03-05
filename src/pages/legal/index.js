import React from 'react'
import LegalHeading from '../../components/LegalHeading'
import LegalPoints from '../../components/LegalPoints'
import ContactUs from '../../components/ContactUs'
import Footer from '../../components/Footer'
import { Box } from '@chakra-ui/core'

import legals from '../../legal'
import useScroll from '../../hooks/useScroll'

export default function Legal() {
  useScroll()
  return (
    <Box w="100%" boxSizing="border-box">
      <LegalHeading />
      <LegalPoints legals={legals} />
      <ContactUs />
      <Footer />
    </Box>
  )
}
