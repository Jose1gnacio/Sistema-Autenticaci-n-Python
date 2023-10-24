import { ToastContainer, toast } from 'react-toastify'
import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from './component/scrollToTop'
import { BackendURL } from './component/backendURL'
import injectContext from './store/appContext'

import { Home } from './pages/home'
/* REGISTROS */
import Login from './component/login/Login'
import Register from './pages/Register'

/* CATEGORIAS */

import { Vista } from './pages/vista'
import { Navbar } from './component/navbar'
import { Footer } from './component/footer'

const Layout = () => {
  const basename = process.env.BASENAME || '/'
  if (!process.env.BACKEND_URL || process.env.BACKEND_URL == '')
    return <BackendURL />

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<Vista />} path='/vista' />
            <Route element={<Login />} path='/login' />
            <Route element={<Register />} path='/register' />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  )
}

export default injectContext(Layout)
