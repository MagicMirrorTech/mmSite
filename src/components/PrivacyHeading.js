import React from 'react'
import { Box, Heading, Flex, Text } from '@chakra-ui/core'

export default function PrivacyHeading() {
  return (
    <Flex w="100%" mt={10} wrap="wrap" px={[0, 0, 0, 20]} py={20}>
      <Heading
        as="h1"
        pos="absolute"
        fontWeight="semibold"
        fontSize="150px"
        color="mmheading"
        mt="50px"
        display={['none', 'none', 'none', 'block']}
      >
        PRIVACY POLICY
      </Heading>
      <Flex
        mt="-100px"
        px={[0, 0, 0, '100px']}
        w={['100%', '100%', '100%', '50%']}
        direction="column"
        align={['center', 'center', 'center', 'flex-end']}
        justify="center"
      >
        <Heading as="h2" fontSize={['2rem', '2rem', '3rem', '3rem']}>
          Our commitment
        </Heading>
        <Heading
          mb={[10, 10, 10, 0]}
          as="h2"
          fontSize={['2rem', '2rem', '3rem', '3rem']}
          fontWeight="light"
        >
          to privacy
        </Heading>
      </Flex>
      <Box px="30px" w={['100%', '100%', '100%', '50%']}>
        <Text mb={5} fontSize="xl">
          Magic Mirror Developers (“MM”) values its customers and respects their privacy.
        </Text>
        <Text mb={5} fontSize="xl">
          This privacy policy (this “Policy”) describes the personal information we may collect from
          you, the purposes for which we collect it, how we use it and when we may share it with
          third parties. This Policy also describes the choices you can make about how we collect,
          use and disclose your information. MM will not collect, use or disclose your personal
          information other than in compliance with this Policy.
        </Text>
        <Text mb={5} fontSize="xl">
          By using the www.magicmirror.dev website, you agree to the terms and conditions of MM’s
          Policy. If our Policy changes in the future, we will notify our customers and website
          users of any such changes by posting an updated Policy on our website.
        </Text>
      </Box>
    </Flex>
  )
}
