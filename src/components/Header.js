import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-size: 1.2rem;
  margin: 0;
`
const Li = styled.li`
  margin-left: 1rem;
  margin-right: 1rem;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ home }) => (home ? 'white' : 'black')};
  &:hover {
    color: #00dfb2;
  }
`
const Nav = styled.nav`
  background-color: transparent;
`

export default function Header({ home }) {
  return (
    <Nav>
      <Ul>
        <Li>
          <StyledLink home={home} to="/">
            Home
          </StyledLink>
        </Li>
        <Li>
          <StyledLink home={home} to="/restaurants/">
            Restaurants
          </StyledLink>
        </Li>
        <Li>
          <StyledLink home={home} to="/my-reservations/">
            My Reservations
          </StyledLink>
        </Li>
        <Li>
          <StyledLink home={home} to="/favorites/">
            Favorites
          </StyledLink>
        </Li>
      </Ul>
    </Nav>
  )
}
