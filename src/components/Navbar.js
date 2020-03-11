import React, { useContext } from 'react'
import theme from '../theme'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Context } from '../context'
import { Box } from '@chakra-ui/core'

const Nav = ({ children }) => (
  <Box
    as="nav"
    w="100%"
    h="10vh"
    display="flex"
    alignItems="center"
    justifyContent="space-between"
    py="50px"
    px="100px"
    boxSizing="border-box"
    backgroundColor="white"
  >
    {children}
  </Box>
)

const Links = styled.div`
  & * {
    font-size: 20px;
    margin-left: 100px;
  }
  & span:hover {
    cursor: pointer;
  }
`

const activeStyle = {
  color: theme.colors.mmorange
}

const imageContent = {
  src: '/assets/MagicMirrorDevs_logo.png',
  width: 80
}

function Navbar() {
  const { onOpen } = useContext(Context)

  return (
    <Nav>
      <Box>
        <NavLink exact to="/">
          <img {...imageContent} alt="mm_logo" />
        </NavLink>
      </Box>
      <Links>
        <NavLink exact activeStyle={activeStyle} to="/">
          Home
        </NavLink>
        <a
          href="https://mmdevsblog.netlify.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Blog
        </a>
        <Box as="span" onClick={onOpen}>
          Contact us
        </Box>
      </Links>
    </Nav>
  )
}

export default Navbar
