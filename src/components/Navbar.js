import React, { useContext } from 'react'
import theme from '../theme'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Context } from '../context'

const Nav = styled.nav`
  width: 100%;
  height: 10vh;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 100px;
  box-sizing: border-box;
`

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
      <div>
        <NavLink exact to="/">
          <img {...imageContent} alt="mm_logo" />
        </NavLink>
      </div>
      <Links>
        <NavLink exact activeStyle={activeStyle} to="/">
          Home
        </NavLink>
        <a href="https://mmdevsblog.netlify.com" rel="noopener noreferrer" target="_blank">
          Blog
        </a>
        <span onClick={onOpen}>Contact us</span>
      </Links>
    </Nav>
  )
}

export default Navbar
