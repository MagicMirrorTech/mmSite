import React from 'react'

import ContactUs from '../../components/ContactUs'
import Footer from '../../components/Footer'
import { Box } from '@chakra-ui/core'

import useScroll from '../../hooks/useScroll'
import PrivacyHeading from '../../components/PrivacyHeading'
import PrivacyCard from '../../components/PrivacyCard'

export default function Privacy() {
  useScroll()
  return (
    <Box w="100%" boxSizing="border-box">
      <PrivacyHeading />
      <PrivacyCard />
      <ContactUs />
      <Footer />
    </Box>
  )
}
