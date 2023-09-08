import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../store/appContext'

const FormRegister = () => {
   
    const {store, actions} = useContext(Context)
    const navigate = useNavigate()
    return (
        <div className="container col-md-4 my-3 shadow p-0">
            <form className="form-control shadow p-3 " onSubmit={(e) => actions.submitRegister(e, navigate)}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Nombre
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Ingresa tu nombre"
                        maxlength="12"
                        minlength="3"
                        required
                    //onChange={}
                    />
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Apellido
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Ingresa tu apellido"
                        maxlength="12"
                        minlength="3"
                        required
                    //onChange={}
                    />
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Ingresa tu email"
                        required
                        pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                    //onChange={}

                    />
                </div>
                <div className="mb-3 password">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Contraseña
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="re_password"
                        placeholder="Contraseña"
                        required
                        name={'re_password'}
                    //onChange={}
                    />
                </div>
                <div className="mb-3 password">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Repetir Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="re_password"
                        placeholder="Repita contraseña"
                        required
                        name={'repetir_password'}
                    //onChange={}
                    />
                </div>
                <div className="input-group mb-3">
                    <label className="input-group-text" htmlFor="inputGroupSelect01">
                        Region
                    </label>
                    <select className="form-select" required >
                        <option selected="" >Selecciona region...</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                    </select>
                </div>
                <div className="my-3 form-check">
                    <input type="checkbox"
                        className="form-check-input"
                        id="Check1" required
                    //onChange={}
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        Acepto términos y condiciones
                    </label>
                </div>
                <button type="submit" className="btn btn-primary my-3">
                    Registrarse
                </button>
            </form>
        </div>
    )

}

export default FormRegister