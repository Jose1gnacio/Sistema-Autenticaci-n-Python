import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/allBooks.css";

import { Context } from "../store/appContext";

export const AllBooks = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <div className="container-fluid mt-4">
        <div className="text-center ">
          <h1 className="tituloAll">LIBROS EN VENTA</h1>
        </div>
        <div className="d-flex flex-wrap justify-content-center ">
          {store.showBooks.map((libro, i) => (
            <div
              className="contenedor-card p-0"
              style={{ width: "220px", height: "300" }}
              key={i}
            >
              <div className="d-flex justify-content-center">
                <img
                  className="card-img-top allbooks-img"
                  style={{ maxWidth: "100%", maxHeight: "300px" }}
                  src={libro.photo}
                  alt={`Portada de ${libro.title}`}
                />
              </div>
              <div className="card-body">
                <h6 className="card-title">{libro.title}</h6>
                <p className="card-text  mb-2">{libro.author}</p>
                <p className="card-text  mb-2">{libro.price}</p>
                <Link
                  to={`/allBooks/bookDetails/${libro.id}`}
                  className="btn btn-dark mb-3 boton-ver-detalles"
                >
                  Ver detalles
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
