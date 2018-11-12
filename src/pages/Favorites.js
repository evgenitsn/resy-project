import React, { useState } from 'react'
import RestaurantCard from '../components/RestaurantCard'
import Header from '../components/Header'
import PageTitle from '../styled/PageTitle'
import Hr from '../styled/Hr'
import { Row, Col } from 'react-simple-flex-grid'

export default function Favorites() {
  const [favorites, setFavorites] = useState(readFromLocalStorage('favorites'))

  function readFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key)) || []
  }

  function updateToLocalStorage(key, update) {
    localStorage.setItem(key, JSON.stringify(update))
  }

  function removeFromFavories(id) {
    let current = readFromLocalStorage('favorites')
    let update = current.filter(f => f.id !== id)
    updateToLocalStorage('favorites', update)
    setFavorites(update)
  }
  return (
    <div>
      <Header />
      <PageTitle>Favorites</PageTitle>
      <Hr />
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        <Row>
          {favorites.map(fr => (
            <Col key={fr.id} xs={12} sm={4} md={4} lg={3} xl={3}>
              <RestaurantCard
                removeFromFavories={removeFromFavories}
                isFav={true}
                id={fr.id}
                title={fr.title}
                location={fr.location}
                phone={fr.phone}
                cardPhoto={fr.cardPhoto}
                description={fr.description}
                reviews={fr.reviews}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}
