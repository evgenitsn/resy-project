import React from 'react'
import Header from '../components/Header'
import PageTitle from '../styled/PageTitle'
import styled from 'styled-components'
import Hr from '../styled/Hr'
import { Row, Col } from 'react-simple-flex-grid'

const ReservationCardContainer = styled.div`
  border-radius: 0.8rem;
  height: 15rem;
  margin: 0 auto;
  background: linear-gradient(316.33deg, #485a7d 0%, #071839 100%);
  margin-top: 1rem;
  margin-bottom: 1rem;
`

export default function MyReservations() {
  let reservations = JSON.parse(localStorage.getItem('reservations')) || []
  console.log(reservations)
  return (
    <>
      <Header />
      <PageTitle>My Reservations</PageTitle>
      <Hr />
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        <Row
          gutter={40}
          style={{
            marginLeft: '1rem',
            marginRight: '1rem'
          }}
        >
          {reservations.map(r => (
            <Col key={r.id} xs={12} sm={4} md={4} lg={3} xl={3}>
              <ReservationCardContainer>
                <div style={{ color: 'white' }}>{r.date}</div>
                <div style={{ color: 'white' }}>{r.time}</div>
                <div style={{ color: 'white' }}>{r.restaurantData.title}</div>
                <div style={{ color: 'white' }}>
                  {r.restaurantData.location}
                </div>
                <div style={{ color: 'white' }}>{r.restaurantData.phone}</div>
                <div style={{ color: 'white' }}>{r.numberOfPeople}</div>
                <div style={{ color: 'white' }}>{r.smoking}</div>
              </ReservationCardContainer>
            </Col>
          ))}
        </Row>
      </div>
    </>
  )
}
