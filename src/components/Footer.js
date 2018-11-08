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

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`
const Li = styled.li`
  margin-left: 1rem;
  margin-right: 1rem;
  @media screen and (max-width: 500px) {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ home }) => (home ? 'white' : 'black')};
  &:hover {
    color: #00dfb2;
  }
`
const Nav = styled.nav`
  margin-top: 1.5rem;
  border-top: 1px solid #ccc;
  padding: 1rem;
  background-color: transparent;
`

const FooterNote = styled.div`
  padding-top: 0.5rem;
  font-size: 1.2rem;
  width: 100%;
  margin: 0 auto;
`

export default function Footer({ home }) {
  return (
    <Nav>
      <Ul>
        <Li>
          <StyledLink to="/">Home</StyledLink>
        </Li>
        <Li>
          <StyledLink to="/restaurants/">Restaurants</StyledLink>
        </Li>
        <Li>
          <StyledLink to="/my-reservations/">My Reservations</StyledLink>
        </Li>
        <Li>
          <StyledLink to="/favorites/">Favorites</StyledLink>
        </Li>
      </Ul>
      <FooterNote>©2018 RESY</FooterNote>
    </Nav>
  )
}
