import React from 'react'
import { Box } from '@chakra-ui/core'

export default function MobileNav({ setShow }) {
  return (
    <Box
      onClick={() => setShow(prevState => !prevState)}
      display={['block', 'block', 'block', 'none']}
    >
      <svg fill="black" width="24px" viewBox="0 0 20 20">
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
      </svg>
    </Box>
  )
}
