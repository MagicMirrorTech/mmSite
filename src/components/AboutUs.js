import React from 'react'
import { Heading, Text, Stack, Box, Button } from '@chakra-ui/core'

function AboutUs({ onOpen }) {
  return (
    <Box
      w="100%"
      h="80vh"
      display="flex"
      boxSizing="border-box"
      px={24}
      py={16}
      bgImage="url('/assets/about_us.png')"
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Stack w="55%" spacing={8}>
        <Heading as="h1" fontSize="3rem" letterSpacing="2px">
          <span style={{ fontWeight: 'lighter' }}>May the odds </span>
          be ever in your favor
        </Heading>
        <Text fontSize="xl">
          Magic Mirror is here to put the odds in your favor. Long gone are the days where competing
          against big companies felt like a losing battle.
        </Text>
        <Text fontSize="xl">
          We are a group of highly efficient nerds, bridging the gap between fancy new technology
          and real revenue gains they promise.
        </Text>
        <Button
          boxShadow="sm"
          _hover={{ boxShadow: 'md' }}
          _active={{ boxShadow: 'lg' }}
          backgroundColor="mmblue.500"
          variantColor="mmblue"
          size="lg"
          w="40%"
          h="4rem"
          onClick={onOpen}
        >
          CREATE VALUE
        </Button>
      </Stack>
      <Heading
        as="h2"
        pos="absolute"
        ml="450px"
        mt="100px"
        fontWeight="semibold"
        fontSize="heading"
        color="mmheading"
      >
        ABOUT US
      </Heading>
    </Box>
  )
}

export default AboutUs
