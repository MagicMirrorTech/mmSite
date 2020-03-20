import React from 'react'
import { Image, Flex, Heading, Box, Text } from '@chakra-ui/core'

export default function OurInspiration() {
  return (
    <Flex px={[8, 8, 20, 20]} py={[0, 0, 20, 20]} align="center" justify="center" flexWrap="wrap">
      <Heading
        as="h2"
        pos="absolute"
        zIndex="1"
        mt="-365px"
        ml="200px"
        fontWeight="semibold"
        fontSize="hmd"
        color="mmheading"
        display={['none', 'none', 'absolute', 'absolute']}
      >
        OUR INSPIRATION
      </Heading>
      <Image
        order={['2', '2', 'unset', 'unset']}
        zIndex="2"
        m={[10, 5, 0, 0]}
        src="/assets/oi1.png"
        alt="our_inspiration"
      />
      <Box
        order={['1', '1', 'unset', 'unset']}
        py={5}
        px={[0, 0, 5, 5]}
        m={3}
        w="567px"
        h="342px"
        border={['none', 'none', '3px solid', '3px solid']}
        borderColor={['none', 'none', 'mmorange', 'mmorange']}
      >
        <Heading
          textAlign={['left', 'left', 'unset', 'unset']}
          px={[0, 0, 5, 5]}
          as="h3"
          ml={['7%', '7%', 0, 0]}
          fontSize={['1.4rem', '1.4rem', '2rem', '2rem']}
        >
          OUR INSPIRATION HAS
        </Heading>
        <Heading
          px={[0, 0, 5, 5]}
          as="h3"
          ml={['7%', '7%', 0, 0]}
          fontSize={['1.4rem', '1.4rem', '2rem', '2rem']}
          textAlign={['left', 'left', 'unset', 'unset']}
          color="mmblue.500"
          mb={[7, 7, 0, 0]}
        >
          A NAME: YOU!
        </Heading>

        <Text
          order="3"
          textAlign={['justify', 'justify', 'unset', 'unset']}
          fontSize={['md', 'md', 'xl', 'xl']}
          my={3}
        >
          We believe that owner-run businesses, dedicated employers - companies that haven’t
          forgotten that values and profit are not mutually exclusive - are the backbone of our
          economy. We also know of the long hours worked, stressful days endured, and difficult
          choices made everyday to achieve success. Our mission is to make it a little bit easier,
          everyday, to achieve that success.
        </Text>
      </Box>
      <Image
        display={['none', 'none', 'block', 'block']}
        alt="people_coding"
        m={3}
        src="/assets/oi2.png"
      />
      <Image
        display={['none', 'none', 'block', 'block']}
        alt="people_talking"
        m={3}
        src="/assets/oi3.png"
      />
    </Flex>
  )
}
