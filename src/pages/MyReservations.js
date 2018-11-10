import React from 'react'
import Header from '../components/Header'
import PageTitle from '../styled/PageTitle'
import styled from 'styled-components'
import Hr from '../styled/Hr'
import { Row, Col } from 'react-simple-flex-grid'
import moment from 'moment'

const ReservationCardContainer = styled.div`
  border-radius: 0.8rem;
  /* height: 15rem; */
  padding-bottom: 1rem;
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
                <div
                  style={{
                    color: 'white',
                    textAlign: 'left',
                    fontWeight: 500,
                    fontSize: '1.4rem',
                    paddingTop: '0.6rem',
                    paddingLeft: '1rem'
                  }}
                >
                  {moment(r.date).format('Do')}
                </div>
                <div
                  style={{
                    color: 'white',
                    textAlign: 'left',
                    fontWeight: 500,
                    fontSize: '1.4rem',
                    paddingLeft: '1rem'
                  }}
                >
                  {moment(r.time).format('MMMM, dddd')}
                </div>
                <div
                  style={{
                    color: 'white',
                    textAlign: 'left',
                    fontWeight: 900,
                    fontSize: '1.1rem',
                    paddingTop: '1.5rem',
                    paddingLeft: '1.5rem'
                  }}
                >
                  {r.restaurantData.title}
                </div>
                <div
                  style={{
                    color: 'white',
                    textAlign: 'left',
                    fontWeight: 300,
                    fontSize: '1.1rem',
                    paddingLeft: '2rem'
                  }}
                >
                  {r.restaurantData.location}
                </div>
                <div
                  style={{
                    color: 'white',
                    textAlign: 'left',
                    fontWeight: 300,
                    fontSize: '1.1rem',
                    paddingLeft: '2rem'
                  }}
                >
                  {r.restaurantData.phone}
                </div>
                <div
                  style={{
                    color: 'white',
                    paddingTop: '1rem',
                    textAlign: 'left',
                    fontWeight: 500,
                    paddingLeft: '1.5rem'
                  }}
                >
                  {r.numberOfPeople}{' '}
                  {r.numberOfPeople === '1' ? 'Person' : 'People'}
                </div>
                <div
                  style={{
                    color: 'white',
                    textAlign: 'left',
                    fontWeight: 500,
                    paddingLeft: '1.5rem'
                  }}
                >
                  {r.smoking}
                </div>
              </ReservationCardContainer>
            </Col>
          ))}
        </Row>
      </div>
    </>
  )
}
