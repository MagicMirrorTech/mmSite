import React from 'react'
import { Image, Flex, Heading, Box, Text } from '@chakra-ui/core'

export default function OurInspiration() {
  return (
    <Flex p={20} align="center" justify="center" flexWrap="wrap">
      <Heading
        as="h2"
        pos="absolute"
        zIndex="1"
        mt="-365px"
        ml="200px"
        fontWeight="semibold"
        fontSize="hmd"
        color="mmheading"
      >
        OUR INSPIRATION
      </Heading>
      <Image zIndex="2" m={3} src="/assets/oi1.png" alt="our_inspiration" />
      <Box
        p={5}
        m={3}
        w="567px"
        h="342px"
        border="3px solid"
        borderColor="mmorange"
      >
        <Heading px={5} as="h3" fontSize="2rem">
          OUR INSPIRATION HAS
        </Heading>
        <Heading px={5} as="h3" fontSize="2rem" color="mmblue.500">
          A NAME: YOU!
        </Heading>

        <Text fontSize="xl" mt={3}>
          We believe that owner-run businesses, dedicated employers - companies
          that haven’t forgotten that values and profit are not mutually
          exclusive - are the backbone of our economy. We also know of the long
          hours worked, stressful days endured, and difficult choices made
          everyday to achieve success. Our mission is to make it a little bit
          easier, everyday, to achieve that success.
        </Text>
      </Box>
      <Image alt="people_coding" m={3} src="/assets/oi2.png" />
      <Image alt="people_talking" m={3} src="/assets/oi3.png" />
    </Flex>
  )
}
