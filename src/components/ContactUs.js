import React from 'react'
import { Flex, Stack, Text, Heading, Box, Image } from '@chakra-ui/core'

export default function ContactUs({ onOpen }) {
  return (
    <Flex w="100%" justify="center" align="center" wrap="wrap" py={20} px={10}>
      <Heading
        left={32}
        as="h2"
        pos="absolute"
        fontWeight="semibold"
        fontSize="hmd"
        color="mmheading"
        display={['none', 'none', 'none', 'block']}
        zIndex="2"
      >
        SAY HI!
      </Heading>
      <Stack
        display="flex"
        align="flex-start"
        justify="center"
        spacing={5}
        p={5}
        w={['100%', '100%', '100%', '20%']}
        h="100px"
      >
        <Heading
          alignSelf={['center', 'center', 'center', 'unset']}
          fontSize="1.9rem"
          as="h3"
          color="mmblue.500"
          zIndex="1"
        >
          CONTACT US!
        </Heading>
      </Stack>
      <Stack spacing={5} p={5} w={['100%', '100%', '100%', '20%']} h="100px">
        <Text
          alignSelf={['center', 'center', 'center', 'unset']}
          color="mmorange"
          fontSize="1.3rem"
          fontWeight="bold"
        >
          KNOW OUR MISSION
        </Text>
        <Text
          alignSelf={['center', 'center', 'center', 'unset']}
          zIndex="99"
          fontSize="1.3rem"
          onClick={onOpen}
          cursor="pointer"
        >
          Click here!
        </Text>
      </Stack>
      <Stack spacing={5} p={5} w={['100%', '100%', '100%', '20%']} h="100px">
        <Text
          alignSelf={['center', 'center', 'center', 'unset']}
          color="mmorange"
          fontSize="1.3rem"
          fontWeight="bold"
        >
          GET A QUOTE NOW!
        </Text>
        <Text alignSelf={['center', 'center', 'center', 'unset']} fontSize="1.3rem">
          partner@magicmirror.dev
        </Text>
      </Stack>
      <Stack spacing={5} p={5} w={['100%', '100%', '100%', '20%']} h="100px">
        <Text
          alignSelf={['center', 'center', 'center', 'unset']}
          color="mmorange"
          fontSize="1.3rem"
          fontWeight="bold"
        >
          JOIN OUR TEAM!
        </Text>
        <Text alignSelf={['center', 'center', 'center', 'unset']} fontSize="1.3rem">
          team@magicmirror.dev
        </Text>
      </Stack>
      <Stack spacing={5} p={5} w={['100%', '100%', '100%', '20%']} h="100px">
        <Text
          alignSelf={['center', 'center', 'center', 'unset']}
          color="mmorange"
          fontSize="1.3rem"
          fontWeight="bold"
        >
          FOLLOW MM DEVS!
        </Text>
        <Stack alignSelf={['center', 'center', 'center', 'unset']} isInline>
          <Link href="https://www.facebook.com/mmdevs">
            <ImageLink image="facebook" />
          </Link>
          <Link href="https://www.instagram.com/mm.devs">
            <ImageLink image="instagram" />
          </Link>
          <Link href="https://www.linkedin.com/company/magic-mirror-devs">
            <ImageLink image="linkedin" />
          </Link>
          <Link social="twitter" href="https://twitter.com/MagicmirrorD">
            <ImageLink image="twitter" />
          </Link>
          <Link href="https://www.pinterest.com.mx/MagicMirror_dev">
            <ImageLink image="pinterest" />
          </Link>
        </Stack>
      </Stack>
    </Flex>
  )
}

function Link({ href, children }) {
  return (
    <Box mr={5} as="a" href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </Box>
  )
}

function ImageLink({ image }) {
  return <Image alt={image} htmlWidth="80%" htmlHeight="80%" src={`/assets/${image}.png`} />
}
