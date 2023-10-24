import React, { useState, useEffect, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Context } from '../store/appContext'
import { useNavigate } from 'react-router-dom'
import '../../styles/navbar_footer.css'
import { AiTwotoneHome } from 'react-icons/ai'

export const Navbar = () => {
  const { store, actions } = useContext(Context)
  const navigate = useNavigate()
  const location = useLocation() // renderizar con ruta
  console.log(location.pathname)

  return (
    <div>
      <nav className='navbarBooks navbar navbar-expand-lg p-0'>
        <div className='container-fluid'>
          <div className='col'>
            <div className=''>
              <Link to='/' className='text-dark' aria-current='page'>
                <h1>HOME</h1>
              </Link>
            </div>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end'>
              <div className='nav-item mt-3 me-4 fs-5 fw-medium'>
                {store.currentUser?.user?.name}{' '}
                {store.currentUser?.user?.lastname}
              </div>
              {!!store.currentUser ? (
                <li className='nav-item dropdown'>
                  <a
                    className='nav-link dropdown-toggle text-secondary'
                    href='#'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    <img
                      className='img-navbar '
                      src={store.currentUser?.user?.userImage}
                      alt='img-perfil'
                    />
                  </a>
                  <ul className='dropdown-menu dropdown-menu-end'>
                    <li>
                      <Link to='#' className='dropdown-item'>
                        {store.currentUser?.user?.name}
                      </Link>
                    </li>
                    <li>
                      <hr className='dropdown-divider' />
                    </li>
                    <li onClick={() => actions.logout()}>
                      <Link to='/' className='dropdown-item'>
                        Cerrar sesión
                      </Link>
                    </li>
                  </ul>
                </li>
              ) : (
                <li className='nav-item dropdown'>
                  <a
                    className='nav-link dropdown-toggle text-white'
                    href='#'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    INICIAR SESION / REGISTRARSE
                  </a>
                  <ul className='dropdown-menu bg-dark text-light'>
                    <li>
                      <Link
                        to='/login'
                        className='dropdown-item bg-dark text-light'
                      >
                        Iniciar sesión
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/register'
                        className='dropdown-item bg-dark text-light'
                      >
                        Registrarse
                      </Link>
                    </li>
                    <li>
                      <hr className='dropdown-divider' />
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <nav className='nav navbar-expand-lg bg-black  '>
        <div className='container-fluid d-flex justify-content-center'>
          <div className=''>
            <Link
              to='/vista'
              className='navbarItem nav-link  mx-4'
              aria-current='page'
            >
              <h1>VISTA</h1>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
