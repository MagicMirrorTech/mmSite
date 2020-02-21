import React from 'react'
import { NavLink } from 'react-router-dom'
import theme from '../theme'
import styled from 'styled-components'

const Nav = styled.nav`
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100vw;
  height: 12vh;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 70px;
  box-sizing: border-box;
`

const Links = styled.div`
  & * {
    margin-left: 150px;
  }
  & span:hover {
    cursor: pointer;
  }
`

const activeStyle = {
  color: theme.colors.mm.orange
}

const imageContent = {
  src: '/assets/MagicMirrorDevs_logo.png',
  width: 70
}

function Navbar() {
  return (
    <Nav>
      <div>
        <NavLink exact to="/">
          <img {...imageContent} alt="mm_logo" />
        </NavLink>
      </div>
      <Links>
        <NavLink exact activeStyle={activeStyle} to="/">
          Home
        </NavLink>
        <NavLink exact activeStyle={activeStyle} to="/blog">
          Blog
        </NavLink>
        <span>Contact us</span>
      </Links>
    </Nav>
  )
}

export default Navbar
