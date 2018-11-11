import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import moment from 'moment'

import 'react-datepicker/dist/react-datepicker.css'

const InputField = styled.input`
  border: 1px solid #00dfb2;
  border-radius: 0.8rem;
  margin: 1rem 0;
  padding: 0.5rem;
  width: 90%;
  height: 40px;
  background-color: #253759;
  ::placeholder {
    color: white;
    opacity: 1;
  }
  outline: none;
  color: white;
`

const SelectField = styled.select`
  border: 1px solid #00dfb2;
  border-radius: 0.8rem;
  margin: 1rem 0;
  padding: 0.5rem;
  width: 90%;
  height: 40px;
  background-color: #253759;
  ::placeholder {
    color: white;
    opacity: 1;
  }
  outline: none;
  color: white;
  -webkit-appearance: none;
  -webkit-border-radius: 0.8rem;
`

const DatePickerStyled = styled(DatePicker)`
  border: 1px solid #00dfb2;
  border-radius: 0.8rem;
  margin: 1rem 0;
  padding: 0.5rem;
  width: 90%;
  height: 40px;
  background-color: #253759;
  ::placeholder {
    color: white;
    opacity: 1;
  }
  outline: none;
  color: white;
`

const SubmitButton = styled.button`
  width: 90%;
  border: 1px solid #00dfb2;
  border-radius: 0.8rem;
  background-color: ${({ isValid }) => (isValid ? '#00dfb2' : '#253759')};
  color: ${({ isValid }) => (!isValid ? '#00dfb2' : '#253759')};
  font-size: 1.2rem;
  margin-top: 2rem;
  padding: 0.7rem 0rem;
  outline: none;
  &:hover {
    cursor: pointer;
    color: #253759;
    background-color: #00dfb2;
  }
`

function readFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key)) || []
}

function updateToLocalStorage(key, update) {
  localStorage.setItem(key, JSON.stringify(update))
}

function addToLocalStorage(item) {
  let current = readFromLocalStorage('reservations')
  let update = [...current, item]
  updateToLocalStorage('reservations', update)
}

export default function ReservationForm({ restaurantData, history }) {
  function handleSubmit(values) {
    addToLocalStorage({ ...values, restaurantData })
    history.push('/my-reservations')
  }

  return (
    <Formik
      initialValues={{
        fullName: '',
        phone: '',
        numberOfPeople: '',
        date: '',
        time: '',
        smoking: ''
      }}
      validationSchema={Yup.object().shape({
        fullName: Yup.string()
          .min(2, 'The name should be at least 2 characters')
          .required('Required Field'),
        phone: Yup.string().required('Required Field'),
        numberOfPeople: Yup.number()
          .typeError('Number of people should be a digit (1-8)')
          .min(1, 'Min 1 person')
          .max(8, 'Max 8 people')
          .required('Required Field'),
        date: Yup.date().required('Required Field'),
        time: Yup.string().required('Required Field'),
        smoking: Yup.string().required('Required Field')
      })}
      onSubmit={values => {
        handleSubmit(values)
      }}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          isValid,
          setFieldValue
        } = props
        return (
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            name="reservation"
            onSubmit={handleSubmit}
          >
            <InputField
              id="fullName"
              placeholder="Full name *"
              type="text"
              name="fullName"
              value={values.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.fullName && touched.fullName
                  ? 'text-input error'
                  : 'text-input'
              }
            />
            {errors.fullName && touched.fullName && (
              <div style={{ color: 'red' }}>{errors.fullName}</div>
            )}

            <InputField
              id="phone"
              placeholder="Phone *"
              type="number"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.phone && touched.phone
                  ? 'text-input error'
                  : 'text-input'
              }
            />
            {errors.phone && touched.phone && (
              <div style={{ color: 'red' }}>{errors.phone}</div>
            )}

            <SelectField
              name="numberOfPeople"
              value={values.numberOfPeople}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="" label="Number of people *">
                Number of people *
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="8+">8+</option>
            </SelectField>
            {errors.numberOfPeople && touched.numberOfPeople && (
              <div style={{ color: 'red' }}>{errors.numberOfPeople}</div>
            )}
            <DatePickerStyled
              readOnly={true}
              name="date"
              label="Date *"
              onChange={e => {
                setFieldValue('date', e._d)
              }}
              placehoderText="Date *"
              value={
                values.date
                  ? moment(values.date).format('Do MMM YYYY, ddd')
                  : 'Date *'
              }
            />
            {errors.date && touched.date && (
              <div style={{ color: 'red' }}>{errors.date}</div>
            )}
            <DatePickerStyled
              name="time"
              label="Time *"
              readOnly={true}
              onChange={e => {
                setFieldValue('time', e._d)
              }}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              dateFormat="LT"
              timeCaption="Time"
              placehoderText="Time *"
              value={values.time ? moment(values.time).format('LT') : 'Time *'}
            />
            {errors.time && touched.time && (
              <div style={{ color: 'red' }}>{errors.time}</div>
            )}
            <div
              style={{
                width: '90%',
                display: 'flex',
                justifyContent: 'center',
                padding: '1rem 0'
              }}
            >
              <label>
                <input
                  name="smoking"
                  type="radio"
                  value="Non Smoking"
                  checked={values.smoking === 'Non Smoking'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <div
                  className="non-smoking box"
                  style={{
                    borderTopLeftRadius: '0.8rem',
                    borderBottomLeftRadius: '0.8rem'
                  }}
                >
                  <span style={{ whiteSpace: 'nowrap' }}>Non Smoking</span>
                </div>
              </label>
              <label>
                <input
                  name="smoking"
                  type="radio"
                  value="Smoking"
                  checked={values.smoking === 'Smoking'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <div
                  className="smoking box"
                  style={{
                    borderTopRightRadius: '0.8rem',
                    borderBottomRightRadius: '0.8rem'
                  }}
                >
                  <span style={{ whiteSpace: 'nowrap' }}>Smoking</span>
                </div>
              </label>
            </div>
            {errors.smoking && touched.smoking && (
              <div style={{ color: 'red' }}>{errors.smoking}</div>
            )}

            <SubmitButton
              type="submit"
              isValid={isValid}
              disabled={isSubmitting}
            >
              Reserve
            </SubmitButton>
          </form>
        )
      }}
    </Formik>
  )
}
