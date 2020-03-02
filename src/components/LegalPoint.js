import React from 'react'
import { Stack, Heading, Divider, Text } from '@chakra-ui/core'

export default function LegalPoint({ title, text }) {
  return (
    <Stack spacing={1} mt={20}>
      <Heading as="h3" size="xl">
        {title.toUpperCase()}
      </Heading>
      <Divider borderColor="mmorange" borderWidth="3px" />
      <Text mt={5} fontSize="xl">
        {text}
      </Text>
    </Stack>
  )
}
