import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import RestaurantsList from '../components/RestaurantsList'
import Header from '../components/Header'
import PageTitle from '../styled/PageTitle'
import Hr from '../styled/Hr'
import { Row, Col } from 'react-simple-flex-grid'
import ReservationForm from '../components/ReservationForm'

import addToFavImg from '../images/add-to-fav.png'
import removeFromFavImg from '../images/remove-from-fav.png'
import data from '../restaurantsList'

import StarRatings from 'react-star-ratings'

const AllRestaurantsButton = styled.button`
  background: white;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
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
  left: 3rem;
  top: 3rem;
  border-radius: 100%;
  width: 3rem;
  height: 3rem;
  background: transparent;
  color: white;
  border: none;
  outline: none;
  margin: 0;
  padding: 0;
  @media screen and (max-width: 500px) {
    left: 1rem;
    top: 1rem;
  }
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
  margin: 1rem;
  background: #485a7d;
  color: white;
  border-radius: 0.8rem;
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
  padding-top: 1.2rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`
const Description = styled.p`
  font-size: 1.1rem;
  margin: 0;
  padding: 0;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 1.2rem;
  padding-top: 1.2rem;
  text-align: left;
`

const Location = styled.p`
  color: lightgrey;
  font-size: 0.8rem;
  margin: 0;
  padding: 0;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  /* margin-top: 0.4rem;
  margin-bottom: 0.4rem; */
`

const FormContainer = styled.div`
  margin: 1rem;
  background-color: #253759;
  border-radius: 0.8rem;
  padding: 2rem;
`

const FormTitle = styled.p`
  color: white;
  font-size: 1.6rem;
  font-weight: 600;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin: 0;
`

const SingleReview = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: ${({ even }) => (even ? '#253759' : '#485a7d')};
  border-top-left-radius: ${({ first }) => (first ? '0.8rem' : 0)};
  border-top-right-radius: ${({ first }) => (first ? '0.8rem' : 0)};
  border-bottom-left-radius: ${({ last }) => (last ? '0.8rem' : 0)};
  border-bottom-right-radius: ${({ last }) => (last ? '0.8rem' : 0)};
`

const ReviewerPhoto = styled.img`
  border-radius: 100%;
  width: 4rem;
  height: 4rem;
  object-fit: cover;
`

const ReviewDescription = styled.p`
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
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
      <div style={{ position: 'relative' }}>
        <HeroImage src={item.photos} />
        {isFavorite ? (
          <FavoriteButton onClick={() => removeFromFavories(item)}>
            <img alt="Remove Fav Img" width={60} src={removeFromFavImg} />
          </FavoriteButton>
        ) : (
          <FavoriteButton onClick={() => addToFavorites(item)}>
            <img alt="Add Fav Img" width={60} src={addToFavImg} />
          </FavoriteButton>
        )}
      </div>
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        <Row gutter={20} justify={'around'}>
          <Col xs={12} sm={6} md={6} lg={6} xl={6}>
            <InfoCardContainer>
              <Title>
                {item.id} {item.title}
              </Title>
              <Location>{item.location}</Location>
              <Location>{item.phone}</Location>
              <Description>{item.description}</Description>
            </InfoCardContainer>
            <InfoCardContainer>
              {item.reviews.map(r => (
                <SingleReview
                  style={{
                    width: '100%'
                  }}
                  first={parseInt(r.id) === 1}
                  last={parseInt(r.id) === item.reviews.length}
                  even={parseInt(r.id) % 2 === 0}
                  key={r.id}
                >
                  <div
                    style={{
                      marginTop: '1rem',
                      display: 'flex',
                      marginLeft: '1rem'
                    }}
                  >
                    <ReviewerPhoto src={r.photo} />
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start'
                      }}
                    >
                      <p
                        style={{
                          margin: 0,
                          marginLeft: '1rem',
                          padding: 0,
                          fontWeight: 'bold',
                          textAlign: 'left'
                        }}
                      >
                        {r.reviewerName}
                      </p>
                      <p
                        style={{
                          margin: 0,
                          marginLeft: '1rem',
                          padding: 0,
                          fontWeight: 'lighter',
                          textAlign: 'left'
                        }}
                      >
                        {r.date}
                      </p>
                      <div
                        style={{
                          margin: 0,
                          marginLeft: '.9rem',
                          padding: 0,
                          paddingTop: '.2rem',
                          fontWeight: 'lighter',
                          textAlign: 'left'
                        }}
                      >
                        <StarRatings
                          rating={parseInt(r.rating)}
                          starRatedColor="#FFDF3B"
                          starDimension="16px"
                          starSpacing="2px"
                          numberOfStars={5}
                          name="rating"
                        />
                      </div>
                    </div>
                  </div>
                  <ReviewDescription>{r.description}</ReviewDescription>
                </SingleReview>
              ))}
            </InfoCardContainer>
          </Col>
          <Col xs={12} sm={6} md={6} lg={6} xl={6}>
            <FormContainer>
              <FormTitle>MAKE RESERVATION</FormTitle>
              <ReservationForm />
            </FormContainer>
          </Col>
        </Row>
      </div>

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
