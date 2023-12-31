import React, { useContext } from 'react'
import { Context } from '../store/appContext'
import '../../styles/home.css'

export const Bienvenida = () => {
  const { store, actions } = useContext(Context)

  return (
    <>
      <div
        id='carouselExampleCaptions'
        className='carousel slide mb-5'
        data-bs-ride='carousel'
      >
        <div className='carousel-indicators'>
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to={0}
            className='active'
            aria-current='true'
            aria-label='Slide 1'
          />
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to={1}
            aria-label='Slide 2'
          />
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to={2}
            aria-label='Slide 3'
          />
        </div>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img
              src='https://cdn.pixabay.com/photo/2016/11/18/18/48/book-1836380_1280.jpg'
              className='img-bienvenida d-block w-100'
              alt='...'
            />
            <div className='text-bienvenida carousel-caption d-none d-md-block text-start px-2'></div>
          </div>
          <div className='carousel-item'>
            <img
              src='https://cdn.pixabay.com/photo/2021/01/21/15/54/books-5937716_1280.jpg'
              className='img-bienvenida2 d-block w-100'
              alt='...'
            />
            <div className='text-bienvenida carousel-caption d-none d-md-block  text-start px-2'></div>
          </div>
          <div className='carousel-item'>
            <img
              src='https://cdn.pixabay.com/photo/2021/01/08/09/53/books-5899470_1280.jpg'
              className='img-bienvenida3 d-block w-100'
              alt='...'
            />
            <div className='text-bienvenida carousel-caption d-none d-md-block  text-start px-2'></div>
          </div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide='prev'
        >
          <span className='carousel-control-prev-icon' aria-hidden='true' />
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide='next'
        >
          <span className='carousel-control-next-icon' aria-hidden='true' />
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </>
  )
}
