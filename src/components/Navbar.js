import React, { useContext, useState } from 'react'
import theme from '../theme'
import { Context } from '../context'
import { Box } from '@chakra-ui/core'
import NavLogo from './NavLogo'
import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'
import MobileMenu from './MobileMenu'

const activeStyle = {
  color: theme.colors.mmorange
}

const Nav = ({ children }) => (
  <Box
    as="nav"
    w="100%"
    h="10vh"
    display="flex"
    alignItems="center"
    justifyContent="space-between"
    py={['25px', '25px', '50px', '50px']}
    px={['25px', '25px', '100px', '100px']}
    boxSizing="border-box"
    backgroundColor="white"
  >
    {children}
  </Box>
)

function Navbar() {
  const { onOpen } = useContext(Context)
  const [show, setShow] = useState(false)

  const showMenu = () => (show ? 'flex' : 'none')

  return (
    <>
      <Nav>
        {/* logo */}
        <NavLogo />
        {/* mobile navbar */}
        <MobileNav setShow={setShow} onOpen={onOpen} />
        {/* desktop navbar */}
        <DesktopNav activeStyle={activeStyle} onOpen={onOpen} />
      </Nav>
      {/* mobile menu */}
      <MobileMenu activeStyle={activeStyle} onOpen={onOpen} showMenu={showMenu} />
    </>
  )
}

export default Navbar
