import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'

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
`

const SubmitButton = styled.button`
  width: 90%;
  border: 1px solid #00dfb2;
  border-radius: 0.8rem;
  background-color: #253759;
  color: white;
  font-size: 1.2rem;
  margin-top: 2rem;
  padding: 0.7rem 0rem;
`

export default function ReservationForm() {
  function handleSubmit(values) {
    console.log(values)
  }

  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={Yup.object().shape({
        fullName: Yup.string()
          .min(2, 'Името трябва да съдържа поне 2 символа')
          .required('Задължително поле'),
        phone: Yup.string().required('Задължително поле'),
        numberOfPeople: Yup.number()
          .min(1, 'Минимум 1 човек')
          .max(8, 'Максимум 8 човека')
          .required('Задължително поле'),
        date: Yup.string().required('Задължително поле'),
        time: Yup.string().required('Задължително поле'),
        smoking: Yup.string().required('Задължително поле')
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
          isValid
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
              id="name"
              placeholder="Full name *"
              type="text"
              name="name"
              value={values.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.fullName && touched.fullName
                  ? 'text-input error'
                  : 'text-input'
              }
            />
            {errors.fullName &&
              touched.fullName && (
                <div style={{ color: 'red' }}>{errors.fullName}</div>
              )}

            <InputField
              id="phone"
              placeholder="Phone *"
              type="text"
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
            {errors.phone &&
              touched.phone && (
                <div style={{ color: 'red' }}>{errors.phone}</div>
              )}
            <InputField
              id="numberOfPeople"
              placeholder="Number of people *"
              type="text"
              name="numberOfPeople"
              value={values.numberOfPeople}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.numberOfPeople && touched.numberOfPeople
                  ? 'text-input error'
                  : 'text-input'
              }
            />
            {errors.numberOfPeople &&
              touched.numberOfPeople && (
                <div style={{ color: 'red' }}>{errors.numberOfPeople}</div>
              )}

            <InputField
              id="date"
              placeholder="Date *"
              type="text"
              name="date"
              value={values.date}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.date && touched.date ? 'text-input error' : 'text-input'
              }
            />
            {errors.date &&
              touched.date && <div style={{ color: 'red' }}>{errors.date}</div>}
            <InputField
              id="time"
              placeholder="Time *"
              type="text"
              name="time"
              value={values.time}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.time && touched.time ? 'text-input error' : 'text-input'
              }
            />
            {errors.time &&
              touched.time && <div style={{ color: 'red' }}>{errors.time}</div>}

            <InputField
              id="smoking"
              placeholder="Smoking *"
              type="text"
              name="smoking"
              value={values.smoking}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.smoking && touched.smoking
                  ? 'text-input error'
                  : 'text-input'
              }
            />
            {errors.smoking &&
              touched.smoking && (
                <div style={{ color: 'red' }}>{errors.smoking}</div>
              )}

            <SubmitButton type="submit" disabled={isSubmitting}>
              Reserve
            </SubmitButton>
          </form>
        )
      }}
    </Formik>
  )
}
