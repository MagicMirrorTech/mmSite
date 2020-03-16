import React from 'react'
import { NavLink } from 'react-router-dom'
import { Box } from '@chakra-ui/core'

export default function MobileMenu({ showMenu, activeStyle, onOpen }) {
  return (
    <Box
      zIndex="99"
      py={['10px', '10px', '40px', '40px']}
      px={['25px', '25px', '100px', '100px']}
      display={[showMenu(), showMenu(), showMenu(), 'none']}
      alignItems="flex-start"
      flexDir="column"
    >
      <NavLink style={{ marginBottom: '10px' }} exact activeStyle={activeStyle} to="/">
        Home
      </NavLink>
      <Box
        mb="10px"
        as="a"
        href="https://mmdevsblog.netlify.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        Blog
      </Box>
      <Box mb="10px" as="span" cursor="pointer" onClick={onOpen}>
        Contact us
      </Box>
    </Box>
  )
}
