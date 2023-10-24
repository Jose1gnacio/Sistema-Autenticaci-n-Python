import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../store/appContext'
import { Gallery } from '../component/gallery'
import { Bienvenida } from '../component/bienvenida'

export const Vista = () => {
  const { store, actions } = useContext(Context)

  return (
    <div>
      {!!store.currentUser ? (
        <div className='container-fluid mt-4'>
          <h1>
            <strong>
              <h1 className='text-dark'>SOY USUARIO LOGEADO</h1>
              <Bienvenida />
            </strong>
          </h1>
        </div>
      ) : (
        <div className='container-fluid mt-4'>
          <h1>
            <strong>
              <h1 className='text-dark'>SOY USUARIO INVITADO</h1>
              <Gallery />
            </strong>
          </h1>
        </div>
      )}
    </div>
  )
}
