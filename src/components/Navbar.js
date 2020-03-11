import React, { useContext, useState } from 'react'
import theme from '../theme'
import { NavLink } from 'react-router-dom'
import { Context } from '../context'
import { Box, MenuItems, Button, Text } from '@chakra-ui/core'

const Nav = ({ children }) => (
  <Box
    as="nav"
    w="100%"
    h="10vh"
    display="flex"
    flexWrap="wrap"
    alignItems="center"
    justifyContent="space-between"
    py={['25px', '50px']}
    px={['25px', '100px']}
    boxSizing="border-box"
    backgroundColor="white"
  >
    {children}
  </Box>
)

const activeStyle = {
  color: theme.colors.mmorange
}

function Navbar() {
  const { onOpen } = useContext(Context)
  const [show, setShow] = useState(false)

  return (
    <>
      <Nav>
        {/* logo */}
        <Logo />

        {/* mobile navbar */}
        <Box onClick={() => setShow(!show)} display={['block', 'none']}>
          <svg fill="black" width="24px" viewBox="0 0 20 20">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Box>

        {/* desktop navbar */}
        <DesktopNav onOpen={onOpen} />
      </Nav>
      <Box
        display={[show ? 'block' : 'none', 'none']}
        width={{ sm: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
      >
        <Text>Docs</Text>
        <Text>Examples</Text>
        <Text>Blog</Text>
      </Box>
    </>
  )
}

function DesktopNav({ onOpen }) {
  return (
    <Box fontSize="20px" display={['none', 'block']}>
      <Box ml="100px" display="inline">
        <NavLink exact activeStyle={activeStyle} to="/">
          Home
        </NavLink>
      </Box>
      <Box ml="100px" display="inline">
        <a
          href="https://mmdevsblog.netlify.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Blog
        </a>
      </Box>
      <Box ml="100px" as="span" cursor="pointer" onClick={onOpen}>
        Contact us
      </Box>
    </Box>
  )
}

function Logo() {
  return (
    <Box>
      <NavLink exact to="/">
        <Box
          as="img"
          width={[50, 80]}
          src="/assets/MagicMirrorDevs_logo.png"
          alt="mm_logo"
        />
      </NavLink>
    </Box>
  )
}

export default Navbar
