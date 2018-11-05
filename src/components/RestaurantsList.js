import React from 'react'
import RestaurantCard from './RestaurantCard'
import data from '../restaurantsList'
import { Row, Col } from 'react-simple-flex-grid'

export default function restaurantsList({ top }) {
  let restaurants = data
  if (top) {
    restaurants = data.slice(0, 4)
  }
  return (
    <div
      style={{
        maxWidth: '1100px',
        margin: '0 auto'
      }}
    >
      <Row gutter={20}>
        {restaurants.map(r => (
          <Col span={3}>
            <RestaurantCard
              key={r.id}
              id={r.id}
              title={r.title}
              location={r.location}
              cardPhoto={r.cardPhoto}
              phone={r.phone}
              description={r.description}
              reviews={r.reviews}
            />
          </Col>
        ))}
      </Row>
    </div>
  )
}
