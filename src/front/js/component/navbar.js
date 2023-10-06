import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar_footer.css";
import { AiTwotoneHome } from "react-icons/ai";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const location = useLocation(); // renderizar con ruta
  console.log(location.pathname);

  return (
    <div>
      <nav className="navbarBooks navbar navbar-expand-lg  px-5">
        <div className="container-fluid">
          <div className="col d-flex">
            <Link to="/" className="nav-link brand active  fs-4">
              Books Market
            </Link>
            {/*             <Link
              to="/profile"
              className="nav-link active text-dark fs-4"
              aria-current="page"
            >
              <AiTwotoneHome />
            </Link> */}
          </div>
          {location.pathname !== "/register" &&
            location.pathname !== "/login" &&
            location.pathname !== "/registroLibro" && (
              <div className="col py-1">
                <form className="d-flex" role="search">
                  <input
                    className="form-control"
                    style={{
                      borderTopLeftRadius: "20px",
                      borderBottomLeftRadius: "20px",
                      borderTopRightRadius: "0",
                      borderBottomRightRadius: "0",
                    }}
                    type="search"
                    placeholder="Buscar"
                    aria-label="Search"
                  />
                  <button
                    className="btn btn-dark pb-2 px-3"
                    type="submit"
                    style={{
                      borderTopLeftRadius: "0px",
                      borderBottomLeftRadius: "0px",
                      borderTopRightRadius: "20px",
                      borderBottomRightRadius: "20px",
                    }}
                  >
                    Buscar
                  </button>
                </form>
              </div>
            )}
          <div className="col">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end">
              {location.pathname !== "/register" &&
                location.pathname !== "/login" &&
                location.pathname !== "/registroLibro" && (
                  <div className="nav-item mt-3 me-2">
                    {store.currentUser?.user?.name}
                  </div>
                )}

              {!!store.currentUser ? (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-secondary"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      className="img-navbar "
                      src={store.currentUser?.user?.userImage}
                      alt="img-perfil"
                    />
                    {/* operador de encadenamiento opcional */}
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <Link to="/profile" className="dropdown-item">
                        Mi Perfil
                      </Link>
                    </li>
                    <li>
                      <Link to="/registerBook" className="dropdown-item">
                        Publica tu libro
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item">
                        {store.currentUser?.user?.name}
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li onClick={() => actions.logout()}>
                      <Link to="/" className="dropdown-item">
                        Cerrar sesión
                      </Link>
                    </li>
                  </ul>
                </li>
              ) : (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-white"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    INICIAR SESION / REGISTRARSE
                  </a>
                  <ul className="dropdown-menu bg-dark text-light">
                    <li>
                      <Link
                        to="/login"
                        className="dropdown-item bg-dark text-light"
                      >
                        Iniciar sesión
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/register"
                        className="dropdown-item bg-dark text-light"
                      >
                        Registrarse
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {location.pathname !== "/register" &&
        location.pathname !== "/login" &&
        location.pathname !== "/registroLibro" && (
          <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
            <div className="container-fluid d-flex justify-content-center">
              <div className="">
                <Link
                  to="/allBooks"
                  className="navbarItem nav-link active mx-4"
                  aria-current="page"
                >
                  LIBROS DISPONIBLES
                </Link>
              </div>
              <div className="">
                <Link
                  to="/exchangeBooks"
                  className="navbarItem nav-link active mx-4"
                  aria-current="page"
                >
                  LIBROS PARA INTERCAMBIO
                </Link>
              </div>
              <div className="">
                <Link
                  to="/saleBooks"
                  className="navbarItem nav-link active mx-4"
                  aria-current="page"
                >
                  LIBROS EN VENTA
                </Link>
              </div>
              <div className="">
                <Link
                  to="/enviar_formulario"
                  className="navbarItem nav-link active mx-4"
                  aria-current="page"
                >
                  DONACIONES REALIZADAS
                </Link>
              </div>
            </div>
          </nav>
        )}
    </div>
  );
};
