import React, { useContext } from 'react'
import PrivacyHeading from '../../components/PrivacyHeading'
import PrivacyCard from '../../components/PrivacyCard'
import KnowMore from '../../components/KnowMore'
import ContactUs from '../../components/ContactUs'
import Footer from '../../components/Footer'
import { Box } from '@chakra-ui/core'

import useScroll from '../../hooks/useScroll'
import { Context } from '../../context'

export default function Privacy() {
  const { toggleModal } = useContext(Context)

  useScroll()
  return (
    <Box w="100%" boxSizing="border-box">
      <PrivacyHeading />
      <PrivacyCard />
      <KnowMore />
      <ContactUs onOpen={toggleModal} />
      <Footer />
    </Box>
  )
}
