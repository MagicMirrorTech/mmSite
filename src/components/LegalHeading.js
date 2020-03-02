import React from 'react'
import { Box, Heading } from '@chakra-ui/core'

export default function LegalHeading() {
  return (
    <Box w="100%" mt={10} px={32} py={20}>
      <Heading
        as="h1"
        pos="absolute"
        fontWeight="semibold"
        fontSize="150px"
        mt="-60px"
        color="mmheading"
      >
        LEGAL NOTICE
      </Heading>
      <Heading px={10} as="h2" fontSize="3rem">
        WEBSITE TERMS
      </Heading>
    </Box>
  )
}
