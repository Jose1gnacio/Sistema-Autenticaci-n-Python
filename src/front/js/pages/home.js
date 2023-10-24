import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../store/appContext'
import '../../styles/home.css'

export const Home = () => {
  const { store, actions } = useContext(Context)
  return (
    <div>
      <h1>
        <strong>SOY EL HOME</strong>
      </h1>
    </div>
  )
}
