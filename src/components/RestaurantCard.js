import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Title from './Title'

const CardContainer = styled.div`
  position: relative;
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
  @media screen and (max-width: 800px) {
    margin: 0.5rem;
    min-width: 220px;
  }
  @media screen and (max-width: 400px) {
    margin: 1rem;
    min-width: 220px;
  }
`

const RemoveButton = styled.button`
  position: absolute;
  font-size: 3.5rem;
  border-radius: 100%;
  right: 1rem;
  top: -0.8rem;
  background: transparent;
  color: white;
  border: none;
  outline: none;
  margin: 0;
  padding: 0;
  &:hover {
    cursor: pointer;
  }
`

const Description = styled.p`
  font-size: 1.1rem;
  margin: 0;
  padding: 0;
  padding-left: 1rem;
  padding-right: 1rem;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  -webkit-box-orient: vertical;
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
`

const BookButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  color: #00dfb2;
  font-size: 1rem;
  text-align: left;
  padding: 0;
  margin-top: 0.8rem;
  padding-left: 1rem;
  padding-right: 1rem;
  &:hover {
    cursor: pointer;
  }
`

const Image = styled.img`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-height: 200px;
  max-height: 200px;
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
`

export default function RestaurantCard({
  id,
  title,
  location,
  phone,
  description,
  reviews,
  cardPhoto,
  isFav,
  removeFromFavories
}) {
  return (
    <CardContainer>
      {isFav && (
        <RemoveButton onClick={() => removeFromFavories(id)}>⨯</RemoveButton>
      )}
      <Image src={cardPhoto} />
      <Title>{title}</Title>
      <Location>{location}</Location>
      <Description>{description}</Description>
      <Link to={`/restaurant/${id}`}>
        <BookButton>Book Now</BookButton>
      </Link>
    </CardContainer>
  )
}
