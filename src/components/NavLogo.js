import React from 'react'
import { NavLink } from 'react-router-dom'
import { Box } from '@chakra-ui/core'

export default function NavLogo() {
  return (
    <Box>
      <NavLink exact to="/">
        <Box as="img" width={[50, 80]} src="/assets/MagicMirrorDevs_logo.png" alt="mm_logo" />
      </NavLink>
    </Box>
  )
}
