import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import RestaurantsList from '../components/RestaurantsList'
import Header from '../components/Header'
import PageTitle from '../styled/PageTitle'
import Hr from '../styled/Hr'

import heroImg from '../images/hero.png'

const Title = styled.h1`
  font-size: 5rem;
  font-weight: 500;
  color: white;
  margin: 2rem;
`

const Description = styled.h4`
  margin-left: 12rem;
  margin-right: 12rem;
  font-size: 2rem;
  font-weight: 300;
  color: white;
`

const CTAButton = styled.button`
  background: #00dfb2;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-bottom: 4rem;
  color: white;
  outline: none;
  border-radius: 0.8rem;
  border: none;
  font-size: 1.5rem;
  font-weight: 200;
  &:hover {
    cursor: pointer;
  }
`

const LandingDiv = styled.div`
  background-image: url(${heroImg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`

export default function Home() {
  return (
    <>
      <LandingDiv>
        <Header home={true} />
        <Title>RESY</Title>
        <Description>
          From this site, you can make your favorite restaurant reservations
          quickly and easily in just a few steps.
        </Description>
        <Link to="/restaurants/">
          <CTAButton>Restaurants</CTAButton>
        </Link>
      </LandingDiv>
      <div>
        <PageTitle>Top Restaurants</PageTitle>
        <Hr />
        <RestaurantsList top />
      </div>
    </>
  )
}
