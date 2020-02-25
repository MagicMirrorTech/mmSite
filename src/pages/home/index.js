import React from 'react'
import AboutUs from '../../components/AboutUs'
import OurWork from '../../components/OurWork'
import CreateValueModal from '../../components/CreateValueModal'
import { Box, useDisclosure } from '@chakra-ui/core'

function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box boxSizing="border-box" p={8}>
      <AboutUs onOpen={onOpen} />
      {/* <OurWork /> */}
      <CreateValueModal isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}

export default Home
