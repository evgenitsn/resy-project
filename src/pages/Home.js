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
  max-width: 34rem;
  margin: 0 auto;
  margin-bottom: 3rem;
  font-size: 2rem;
  font-weight: 300;
  color: white;
`

const CTAButton = styled.button`
  background: #00dfb2;
  padding-left: 5rem;
  padding-right: 5rem;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  margin-bottom: 4rem;
  color: white;
  outline: none;
  border-radius: 0.8rem;
  border: none;
  font-size: 1.3rem;
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
        <Header home={true ? 1 : 0} />
        <Title>RESY</Title>
        <Description>
          Make your favorite restaurant reservations quickly and easily in just
          a few steps.
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
