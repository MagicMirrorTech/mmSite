import React from 'react'
import { Flex, Image, Stack, Heading, Text } from '@chakra-ui/core'

function OurWork() {
  return (
    <Flex
      w="100%"
      px={[8, 8, 32, 32]}
      py={12}
      boxSizing="border-box"
      align="center"
      justify={['center', 'center', 'center', 'space-between']}
      flexWrap={['wrap', 'wrap', 'wrap', 'nowrap']}
    >
      <Heading
        display={['block', 'block', 'block', 'none']}
        mb={5}
        as="h3"
        color="mmblue.500"
        fontSize="1.5rem"
      >
        HOW WE GET RESULTS
      </Heading>
      <Image alt="james_keck" src="/assets/james.png" size="50%" />
      <Stack pl={[0, 0, 0, 40]} spacing={3}>
        <Heading
          mt="-35px"
          as="h2"
          pos="absolute"
          display={['none', 'none', 'absolute', 'absolute']}
          fontWeight="semibold"
          fontSize="hmd"
          color="mmheading"
        >
          OUR WORK
        </Heading>
        <Heading as="h3" color="mmblue.500" display={['none', 'none', 'none', 'block']}>
          HOW WE GET RESULTS
        </Heading>
        <Text textAlign="justify" mt={[5, 5, 5, 0]} fontSize={['md', 'md', 'lg', 'lg']}>
          Our founder is an economist and psychologist by education, a marketer by trade, and a
          technologist by habit. He has used this confluence to help businesses develop cohesive
          technology strategies, specializing specifically in businesses unfamiliar with the latest
          technological options.
        </Text>
      </Stack>
    </Flex>
  )
}

export default OurWork
