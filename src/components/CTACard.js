import React, { useContext } from 'react'
import { Heading, Button, Stack } from '@chakra-ui/core'
import { Context } from '../context'

export default function CTACard({ text1, text2, btnText, btnBg, btnVar }) {
  const { onOpen } = useContext(Context)
  return (
    <Stack
      w="100%"
      minH="30vh"
      p="100px"
      spacing="100px"
      boxSizing="border-box"
      direction="column"
      backgroundColor="#3C373E"
    >
      <Heading
        mt="-35px"
        right="100px"
        as="h2"
        pos="absolute"
        fontWeight="semibold"
        fontSize="hmd"
        color="#FFFFFF"
        opacity="0.14"
      >
        {text1}
      </Heading>
      <Heading fontSize="2rem" color="white">
        {text2}
      </Heading>
      <Button
        onClick={onOpen}
        alignSelf="center"
        size="lg"
        w="23%"
        h="4rem"
        backgroundColor={btnBg}
        variantColor={btnVar}
      >
        {btnText}
      </Button>
    </Stack>
  )
}
