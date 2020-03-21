import React from 'react'
import { Flex, Text, Box } from '@chakra-ui/core'
import { Link } from 'react-router-dom'

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
      direction={['column', 'column', 'column', 'row']}
      px={10}
      py={5}
    >
      <img {...imageContent} alt="mm_logo" />
      <Text order={[3, 3, 3, 'unset']} mt={[5, 5, 5, 0]} fontSize={['sm', 'sm', 'lg', 'lg']}>
        © 2020. Magic Mirror Devs. All rights reserved
      </Text>
      <Box order={[1, 1, 1, 'unset']} mt={[5, 5, 5, 0]}>
        <Link to="/legal">
          <Text fontSize="lg">LEGAL NOTICE</Text>
        </Link>
      </Box>
      <Box order={[2, 2, 2, 'unset']} mt={[5, 5, 5, 0]}>
        <Link to="/privacy">
          <Text fontSize="lg">PRIVACY POLICY</Text>
        </Link>
      </Box>
    </Flex>
  )
}
