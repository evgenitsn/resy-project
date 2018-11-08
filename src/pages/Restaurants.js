import React from 'react'
import RestaurantsList from '../components/RestaurantsList'
import Header from '../components/Header'
import PageTitle from '../styled/PageTitle'
import Hr from '../styled/Hr'

export default function Restaurants() {
  return (
    <div>
      <Header />
      <PageTitle>Restaurants</PageTitle>
      <Hr />
      <div>
        <RestaurantsList />
      </div>
    </div>
  )
}
