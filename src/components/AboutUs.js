import React from 'react'
import { Heading, Text, Stack, Box, Button } from '@chakra-ui/core'

function AboutUs() {
  return (
    <Box
      mt="12vh"
      w="100%"
      h="78vh"
      display="flex"
      boxSizing="border-box"
      px={24}
      py={20}
      bgImage="url('/assets/about_us.png')"
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Stack w="50%" spacing={8}>
        <Heading as="h1" w="80%" fontSize="2.5rem">
          <span style={{ fontWeight: 'lighter' }}>May the odds </span>
          be ever in your favor
        </Heading>
        <Text fontSize="lg">
          Magic Mirror is here to put the odds in your favor. Long gone are the
          days where competing against big companies felt like a losing battle.
        </Text>
        <Text fontSize="lg">
          We are a group of highly efficient nerds, bridging the gap between
          fancy new technology and real revenue gains they promise.
        </Text>
        <Button variantColor="mm.blue" size="lg" w="40%">
          CREATE VALUE
        </Button>
      </Stack>
      <Heading
        as="h2"
        ml={-40}
        mt={20}
        fontWeight="semibold"
        fontSize="heading"
        color="mm.heading"
      >
        ABOUT US
      </Heading>
    </Box>
  )
}

export default AboutUs
