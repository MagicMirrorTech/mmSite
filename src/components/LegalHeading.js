import React from 'react'
import { Box, Heading } from '@chakra-ui/core'

export default function LegalHeading() {
  return (
    <Box w="100%" mt={10} px={[5, 5, 5, 32]} py={20}>
      <Heading
        as="h1"
        pos="absolute"
        fontWeight="semibold"
        fontSize="150px"
        mt="-60px"
        color="mmheading"
        display={['none', 'none', 'none', 'block']}
      >
        LEGAL NOTICE
      </Heading>
      <Heading
        px={[0, 0, 0, 10]}
        textAlign={['center', 'center', 'center', 'unset']}
        as="h2"
        fontSize={['2rem', '2rem', '3rem', '3rem']}
      >
        WEBSITE TERMS
      </Heading>
    </Box>
  )
}
