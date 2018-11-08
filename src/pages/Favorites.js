import React from 'react'
import RestaurantCard from '../components/RestaurantCard'
import Header from '../components/Header'
import PageTitle from '../styled/PageTitle'
import Hr from '../styled/Hr'
import { Row, Col } from 'react-simple-flex-grid'

export default function Favorites() {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || []
  console.log(favorites)
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
