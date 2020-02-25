import React from 'react'
import { Flex, Image, Stack, Heading, Text } from '@chakra-ui/core'

function OurWork() {
  return (
    <Flex
      w="100%"
      px={32}
      py={12}
      boxSizing="border-box"
      align="center"
      justify="space-between"
    >
      <Image src="/assets/james.png" />
      <Stack pl={40} spacing={3}>
        <Heading
          mt="-35px"
          as="h2"
          pos="absolute"
          fontWeight="semibold"
          fontSize="hmd"
          color="mmheading"
        >
          OUR WORK
        </Heading>
        <Heading as="h3" color="mmblue.500">
          HOW WE GET RESULTS
        </Heading>
        <Text textAlign="justify" fontSize="lg">
          Our founder is an economist and psychologist by education, a marketer
          by trade, and a technologist by habit. He has used this confluence to
          help businesses develop cohesive technology strategies, specializing
          specifically in businesses unfamiliar with the latest technological
          options.
        </Text>
      </Stack>
    </Flex>
  )
}

export default OurWork
