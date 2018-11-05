import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {
  Home,
  Restaurants,
  MyReservations,
  Favorites,
  Restaurant
} from './pages'

export default function Routes() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/restaurants/" component={Restaurants} />
        <Route path="/my-reservations/" component={MyReservations} />
        <Route path="/favorites/" component={Favorites} />
        <Route path="/restaurant/:id" component={Restaurant} />
      </div>
    </Router>
  )
}
