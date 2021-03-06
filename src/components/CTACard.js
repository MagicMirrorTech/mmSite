import React, { useContext } from 'react'
import { Heading, Button, Stack } from '@chakra-ui/core'
import { Context } from '../context'

export default function CTACard({ text1, text2, btnText, btnBg, btnVar }) {
  const { onOpen } = useContext(Context)
  return (
    <Stack
      w="100%"
      px={['20px', '20px', '30px', '100px']}
      py={['50px', '50px', '50px', '70px']}
      spacing={['50px', '50px', '100px', '100px']}
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
        display={['none', 'none', 'none', 'block']}
        zIndex="2"
      >
        {text1}
      </Heading>
      <Heading zIndex="1" fontSize={['1.5rem', '1.5rem', '2rem', '2rem']} color="white">
        {text2}
      </Heading>
      <Button
        onClick={onOpen}
        alignSelf="center"
        size="lg"
        w={['75%', '75%', '50%', '25%']}
        h="4rem"
        backgroundColor={btnBg}
        variantColor={btnVar}
        color={btnBg === 'mmyellow.500' ? 'black' : 'white'}
      >
        {btnText}
      </Button>
    </Stack>
  )
}
