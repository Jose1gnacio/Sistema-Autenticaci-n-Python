import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import "../../styles/home.css";




export const FormularioRegistro = () => {

  return (
    <div className="container-fluid" >
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card card0 ">
            <div className="row rowForm">
              <div className="col-md-5 d-md-block d-none p-0 box" >
                <img
                  src="https://cdn.pixabay.com/photo/2021/01/21/15/54/books-5937716_1280.jpg"
                  className="imagenEegister"
                  style={{ objectFit: 'cover', height: '640px', width: '320px', borderTopLeftRadius: '1rem', borderBottomLeftRadius: '1rem', borderTopRightRadius: '0', borderBottomRightRadius: '0' }}
                  alt=""
                />
              </div>
              <div className="card border-0 card2 col-md-7 col-sm-12 p-3  pe-4 mb-0 box" id="paypage" style={{ borderTopLeftRadius: '0', borderBottomLeftRadius: '0', borderTopRightRadius: '1rem', borderBottomRightRadius: '1rem' }}>
                <form className="form-control form-card">
                  <label htmlFor="form" className="form-label mt-1">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control m-2 p-2 mb-3 ps-3"
                    id="nombre"
                    aria-describedby="emailHelp"
                    placeholder="Ingresa tu nombre"
                    maxLength="12"
                    minLength="3"
                    required
                    name={'name'}


                  />
                  <label htmlFor="exampleInputEmail1" className="form-label ">
                    Apellido
                  </label>
                  <input
                    type="text"
                    className="form-control m-2 p-2 mb-3 ps-3"
                    id="apellido"
                    aria-describedby="emailHelp"
                    placeholder="Ingresa tu apellido"
                    maxLength="12"
                    minLength="3"
                    required


                  />
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control m-2 p-2 mb-3 ps-3"
                    id="inputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Ingresa tu email"
                    required
                  //validacion email



                  />
                  <div className="row mb-2">
                    <div className="col-8 col-md-6">
                      <label htmlFor="exampleInputPassword1" className="form-label">
                        Contraseña
                      </label>
                      <input
                        type="password"
                        className="form-control m-2 p-2 ps-3"
                        id="password"
                        placeholder="Contraseña"
                        required


                      />
                    </div>
                    <div className="col-4 col-md-6">
                      <label htmlFor="exampleInputPassword1" className="form-label">
                        Repetir Contraseña
                      </label>
                      <input
                        type="password"
                        className="form-control m-2 p-2 ps-3"
                        id="re_password"
                        placeholder="Repita contraseña"
                        required


                      />
                    </div>
                  </div>
                  <div className="col-md-10" >
                    <label>
                      Region
                    </label>
                    <select className="form-select m-2 p-2 ps-3" name="region" required >

                      <option value="" >Selecciona region...</option>
                      <option value={1}>I</option>
                      <option value={2}>II</option>
                      <option value={3}>III</option>
                      <option value={4}>IV</option>
                      <option value={5}>V</option>
                      <option value={6}>VI</option>
                      <option value={7}>VII</option>
                      <option value={8}>VIII</option>
                      <option value={9}>IX</option>
                      <option value={10}>X</option>
                      <option value={11}>XI</option>
                      <option value={12}>XII</option>
                      <option value={13}>XIII</option>
                      <option value={14}>XIV</option>
                      <option value={15}>XV</option>
                      <option value={16}>RM</option>
                    </select>
                  </div>
                  <div className="row my-3 form-check">
                    <input type="checkbox"
                      className="form-check-input col-2 col-md-1 p-0"
                      id="Check1" required

                    />
                    <p className="form-check-label col-8 col-md-6" htmlFor="exampleCheck1">
                      Acepto términos y condiciones
                    </p>
                  </div>
                  <button type="submit" className="buttonRegister btn btn-dark  m-2 p-2 px-4">
                    Registrarme
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )

};