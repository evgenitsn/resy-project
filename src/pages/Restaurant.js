import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import RestaurantsList from '../components/RestaurantsList'
import Header from '../components/Header'
import PageTitle from '../styled/PageTitle'
import Hr from '../styled/Hr'
import { Row, Col } from 'react-simple-flex-grid'

import data from '../restaurantsList'
import restaurantHero from '../images/restaurant-hero.png'
import { relative } from 'path'

const AllRestaurantsButton = styled.button`
  background: white;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-bottom: 4rem;
  color: #00dfb2;
  outline: none;
  border-radius: 0.8rem;
  border: 1px solid #00dfb2;
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 1.5rem;
  &:hover {
    cursor: pointer;
  }
`

const FavoriteButton = styled.button`
  position: absolute;
  left: 2rem;
  top: 6rem;
  border-radius: 100%;
  width: 3rem;
  height: 3rem;
  background: #00dfb2;
  color: white;
  border: none;
  outline: none;
`

const HeroImage = styled.img`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-height: 300px;
`

const InfoCardContainer = styled.div`
  margin: 0.5rem;
  background: #485a7d;
  color: white;
  border-radius: 0.8rem;
  padding-bottom: 1.2rem;
  min-width: 240px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

const Title = styled.p`
  font-size: 1.3rem;
  margin: 0;
  padding: 0;
  padding-top: 0.8rem;
  padding-left: 1rem;
  padding-right: 1rem;
`
const Description = styled.p`
  font-size: 1.1rem;
  margin: 0;
  padding: 0;
  padding-left: 1rem;
  padding-right: 1rem;
  text-align: left;
`

const Location = styled.p`
  color: lightgrey;
  font-size: 0.8rem;
  margin: 0;
  padding: 0;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-top: 0.4rem;
  margin-bottom: 0.4rem;
`

export default function Restaurant({ match }) {
  const [favorites, setFavorites] = useState(readFromLocalStorage('favorites'))

  function readFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key)) || []
  }

  function updateToLocalStorage(key, update) {
    localStorage.setItem(key, JSON.stringify(update))
  }

  function addToFavorites(item) {
    let current = readFromLocalStorage('favorites')
    let update = [...current, item]
    updateToLocalStorage('favorites', update)
    setFavorites(update)
  }

  function removeFromFavories(item) {
    let current = readFromLocalStorage('favorites')
    let update = current.filter(f => f.id !== item.id)
    updateToLocalStorage('favorites', update)
    setFavorites(update)
  }

  const item = data.find(r => r.id === match.params.id)
  const isFavorite = favorites.some(f => f.id === item.id)
  return (
    <div>
      <Header />
      <div style={{ position: relative }}>
        <HeroImage src={item.photos} />
        {isFavorite ? (
          <FavoriteButton onClick={() => removeFromFavories(item)}>
            Unfav
          </FavoriteButton>
        ) : (
          <FavoriteButton onClick={() => addToFavorites(item)}>
            Fav
          </FavoriteButton>
        )}
      </div>
      <Row gutter={20}>
        <Col span={6}>
          <InfoCardContainer>
            <Title>
              {item.id} {item.title}
            </Title>
            <Location>{item.location}</Location>
            <Location>{item.phone}</Location>
            <Description>{item.description}</Description>
          </InfoCardContainer>
        </Col>
        <Col span={6} />
      </Row>

      <div>
        <PageTitle>Top Restaurants</PageTitle>
        <Hr />
        <RestaurantsList top />
        <Link to="/restaurants/">
          <AllRestaurantsButton>All Restaurants</AllRestaurantsButton>
        </Link>
      </div>
    </div>
  )
}
