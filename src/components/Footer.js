import React from 'react'
import { Flex, Text } from '@chakra-ui/core'

const imageContent = {
  src: '/assets/MagicMirrorDevs_logo.png',
  width: 80,
  style: {
    filter: 'invert(100%)'
  }
}

export default function Footer() {
  return (
    <Flex
      color="white"
      bg="#3C373E"
      w="100%"
      align="center"
      justify="space-evenly"
      boxSizing="border-box"
      px={10}
      py={5}
    >
      <img {...imageContent} alt="mm_logo" />
      <Text fontSize="lg">© 2020. Magic Mirror Devs. All rights reserved</Text>
      <Text fontSize="lg">LEGAL NOTICE</Text>
      <Text fontSize="lg">PRIVACY POLICY</Text>
    </Flex>
  )
}
