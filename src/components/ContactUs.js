import React from 'react'
import { Flex, Stack, Text, Heading, Box } from '@chakra-ui/core'

export default function ContactUs({ onOpen }) {
  return (
    <Flex w="100%" justify="center" align="center" py={20} px={10}>
      <Heading
        left={32}
        as="h2"
        pos="absolute"
        fontWeight="semibold"
        fontSize="hmd"
        color="mmheading"
      >
        SAY HI!
      </Heading>
      <Stack
        display="flex"
        align="flex-start"
        justify="center"
        spacing={5}
        p={5}
        w="20%"
        h="100px"
      >
        <Heading fontSize="1.9rem" as="h3" color="mmblue.500">
          CONTACT US!
        </Heading>
      </Stack>
      <Stack spacing={5} p={5} w="20%" h="100px">
        <Text color="mmorange" fontSize="1.3rem" fontWeight="bold">
          KNOW OUR MISSION
        </Text>
        <Text zIndex="99" fontSize="1.3rem" onClick={onOpen} cursor="pointer">
          Click here!
        </Text>
      </Stack>
      <Stack spacing={5} p={5} w="20%" h="100px">
        <Text color="mmorange" fontSize="1.3rem" fontWeight="bold">
          GET A QUOTE NOW!
        </Text>
        <Text fontSize="1.3rem">partner@magicmirror.dev</Text>
      </Stack>
      <Stack spacing={5} p={5} w="20%" h="100px">
        <Text color="mmorange" fontSize="1.3rem" fontWeight="bold">
          JOIN OUR TEAM!
        </Text>
        <Text fontSize="1.3rem">team@magicmirror.dev</Text>
      </Stack>
      <Stack spacing={5} p={5} w="20%" h="100px">
        <Text color="mmorange" fontSize="1.3rem" fontWeight="bold">
          FOLLOW MM DEVS!
        </Text>
        <Stack isInline>
          <Link social="facebook" href="https://www.facebook.com/mmdevs" />
          <Link social="instagram" href="https://www.instagram.com/mm.devs" />
          <Link
            social="linkedin"
            href="https://www.linkedin.com/company/magic-mirror-devs"
          />
          <Link social="twitter" href="https://twitter.com/MagicmirrorD" />
          <Link
            social="pinterest"
            href="https://www.pinterest.com.mx/MagicMirror_dev"
          />
        </Stack>
      </Stack>
    </Flex>
  )
}

function Link({ href, social }) {
  return (
    <Box
      mr={5}
      w="25px"
      h="25px"
      as="a"
      href={href}
      target="_blank"
      backgroundImage={`url(/assets/${social}.png)`}
      mt={social === 'twitter' ? '2px' : 0}
      backgroundSize="contain"
      backgroundRepeat="no-repeat"
    />
  )
}
