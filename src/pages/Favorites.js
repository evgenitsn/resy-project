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
          maxWidth: '1100px',
          margin: '0 auto'
        }}
      >
        <Row gutter={20}>
          {favorites.map(fr => (
            <Col span={3}>
              <RestaurantCard
                key={fr.id}
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
