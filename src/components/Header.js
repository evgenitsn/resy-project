import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import HamburgerMenu from 'react-hamburger-menu'

const HeaderContent = styled.div`
  background-color: transparent;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 4rem;
  align-items: center;
`

const DesktopMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  margin: 0;
  padding: 0;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`

const MobileMenu = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 601px) {
    display: none;
  }
`

const DesktopMenuItem = styled.li`
  padding-left: 30px;
  /* padding: 0.4rem 0.6rem; */
  list-style: none;
  margin: 0;
  margin-left: 1rem;
  margin-right: 1rem;
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${({ home }) => (home ? 'white' : 'black')};
  &:hover {
    color: #00dfb2;
  }
`

const DropdownMenu = styled.div`
  display: ${({ firstOpen }) => (firstOpen ? 'none' : 'block')};
  position: absolute;
  top: 3.9rem;
  left: 0;
  width: 100%;
  z-index: 999;
  background-color: white;
  padding-bottom: 2rem;
`

const Ul = styled.ul`
  text-align: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
`

const Hr = styled.hr`
  margin: 0 auto;
  width: 65%;
  height: 0;
  border: 0;
  border-top: 1px solid lightgrey;
`

const MobileNavLink = styled(Link)`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  display: block;
  text-decoration: none;
  color: ${({ home }) => (home ? 'white' : 'black')};
  &:hover {
    color: #00dfb2;
  }
`

export default function Header({ home }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isFirstOpen, setIsFirstOpen] = useState(true)
  return (
    <HeaderContent>
      <HeaderContainer>
        <MobileMenu>
          <HamburgerMenu
            isOpen={isOpen}
            menuClicked={() => {
              console.log(isOpen)
              setIsOpen(!isOpen)
              setIsFirstOpen(false)
            }}
            width={22}
            height={18}
            strokeWidth={2}
            rotate={0}
            color={home ? 'white' : 'black'}
            borderRadius={0}
            animationDuration={0.5}
          />
        </MobileMenu>

        <DropdownMenu
          firstOpen={isFirstOpen}
          isOpen={isOpen}
          className={
            isFirstOpen ? '' : isOpen ? 'scale-in-ver-top' : 'scale-out-ver-top'
          }
        >
          <Ul>
            <MobileNavLink to="/" exact={1} onClick={() => setIsOpen(false)}>
              Home
            </MobileNavLink>
            <Hr />
            <MobileNavLink to="/restaurants/" onClick={() => setIsOpen(false)}>
              Restaurants
            </MobileNavLink>
            <Hr />
            <MobileNavLink
              to="/my-reservations/"
              onClick={() => setIsOpen(false)}
            >
              My Reservations
            </MobileNavLink>
            <Hr />
            <MobileNavLink to="/favorites" onClick={() => setIsOpen(false)}>
              Favorites
            </MobileNavLink>
            <Hr />
          </Ul>
        </DropdownMenu>
        <DesktopMenu>
          <DesktopMenuItem>
            <NavLink home={home ? 1 : 0} to="/" exact={1}>
              Home
            </NavLink>
          </DesktopMenuItem>
          <DesktopMenuItem>
            <NavLink home={home ? 1 : 0} to="/restaurants/">
              Restaurants
            </NavLink>
          </DesktopMenuItem>
          <DesktopMenuItem>
            <NavLink home={home ? 1 : 0} to="/my-reservations/">
              My Reservations
            </NavLink>
          </DesktopMenuItem>
          <DesktopMenuItem>
            <NavLink home={home ? 1 : 0} to="/favorites/">
              Favorites
            </NavLink>
          </DesktopMenuItem>
        </DesktopMenu>
      </HeaderContainer>
    </HeaderContent>
  )
}
