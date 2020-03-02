import React from 'react'
import LegalPoint from '../components/LegalPoint'
import { Stack } from '@chakra-ui/core'

export default function LegalPoints({ legals }) {
  return (
    <Stack spacing={5} px={32}>
      {legals.map(({ title, text }) => (
        <LegalPoint title={title} text={text} />
      ))}
    </Stack>
  )
}
