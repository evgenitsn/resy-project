import React from 'react'
import Header from '../components/Header'
import PageTitle from '../styled/PageTitle'
import styled from 'styled-components'
import Hr from '../styled/Hr'
import { Row, Col } from 'react-simple-flex-grid'
import moment from 'moment'
import { Link } from 'react-router-dom'

const ReservationCardContainer = styled.div`
  border-radius: 0.8rem;
  /* height: 15rem; */
  padding-bottom: 1rem;
  margin: 0 auto;
  min-height: 270px;
  background: linear-gradient(316.33deg, #485a7d 0%, #071839 100%);
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
`

export default function MyReservations() {
  let reservations = JSON.parse(localStorage.getItem('reservations')) || []
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
            <Col
              key={r.id + r.title + r.phone}
              xs={12}
              sm={4}
              md={4}
              lg={3}
              xl={3}
            >
              <ReservationCardContainer>
                <div
                  style={{
                    color: 'white',
                    textAlign: 'left',
                    fontWeight: 500,
                    fontSize: '1.4rem',
                    paddingTop: '0.6rem'
                  }}
                >
                  {moment(r.date).format('Do')}
                </div>
                <div
                  style={{
                    color: 'white',
                    textAlign: 'left',
                    fontWeight: 500,
                    fontSize: '1.4rem'
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
                    paddingLeft: '0.5rem'
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
                    paddingLeft: '1rem'
                  }}
                >
                  <Link
                    style={{ textDecoration: 'none', color: 'white' }}
                    to={'/restaurant/' + r.restaurantData.id}
                  >
                    {r.restaurantData.location}
                  </Link>
                </div>
                <div
                  style={{
                    color: 'white',
                    textAlign: 'left',
                    fontWeight: 300,
                    fontSize: '1.1rem',
                    paddingLeft: '1rem'
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
                    paddingLeft: '0.5rem'
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
                    paddingLeft: '0.5rem'
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
