import React from 'react'
import { NavLink } from 'react-router-dom'
import { Box } from '@chakra-ui/core'

export default function DesktopNav({ onOpen, activeStyle }) {
  return (
    <Box fontSize="20px" display={['none', 'none', 'none', 'block']}>
      <Box ml="100px" display="inline">
        <NavLink exact activeStyle={activeStyle} to="/">
          Home
        </NavLink>
      </Box>
      <Box ml="100px" display="inline">
        <Box as="a" href="https://mmdevsblog.netlify.com" rel="noopener noreferrer" target="_blank">
          Blog
        </Box>
      </Box>
      <Box ml="100px" as="span" cursor="pointer" onClick={onOpen}>
        Contact us
      </Box>
    </Box>
  )
}
