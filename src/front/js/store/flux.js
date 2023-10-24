import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      //INICIO DE SESIÓN
      email: '',
      password: '',
      currentUser: null,

      //VARIABLE PARA GUARDAR LOS USUARIOS QUE SE CREAN
      users: [],

      //URL DE LA API
      url: 'http://localhost:3001',

      message: null,
      //ESTADOS INPUT REGISTRO USUARIO CON FOTOS
      name: [],
      lastname: [],
      email: [],
      password: [],
      rep_password: [],
      region: [],
      city: [],
      userImage: null
    },

    actions: {
      //---------< funcion para  registro  de usuario >----------------->

      handleChangeRegister: e => {
        const { newUser } = getStore()
        e.preventDefault()
        newUser[e.target.name] = e.target.value
        setStore({ newUser })
        console.log('newUser:', getStore().newUser)
      },

      submitRegister: (e, navigate) => {
        //********************************************************************* */
        e.preventDefault()
        if (getStore().newUser.password === getStore().newUser.rep_password) {
          getActions().saveUser(navigate)
        } else {
          alert('las contraseñas no coinciden')
        }
      },

      saveUser: async navigate => {
        try {
          const { url, newUser } = getStore()
          const response = await fetch(`${url}/api/register`, {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: { 'Content-Type': 'application/json' }
          })
          if (response.ok) {
            toast.success('Registro exitoso!!')
            alert('Registro exitoso!!')
            const data = await response.json()
            console.log('data', data)
            navigate('#')
          } else {
            throw Error('Error al registrar')
          }
        } catch (error) {
          alert('Error al iniciar registrarse' + error.message)
          console.error(error)
        }
      },
      //----------< Login usuario >---------------------------------------------->

      //---- funcion para  login  de usuario------------------------------------------->
      handleSubmitLogin: async (e, navigate) => {
        //********************************************************************************************************** */
        e.preventDefault()
        // toast.success("Inicio de sesió nexitoso");
        try {
          const { url, email, password, currentUser } = getStore()
          let info = { email, password, currentUser }
          const response = await fetch(`${url}/api/login`, {
            method: 'POST',
            body: JSON.stringify(info),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          console.log(response)
          const data = await response.json()
          console.log(data)

          if (data.access_token) {
            setStore({ currentUser: data })
            sessionStorage.setItem('currentUser', JSON.stringify(data))
            navigate('/')
          } else {
            setStore({
              alert: {
                text: 'Usuario no registrado',
                show: true,
                textbtn: 'Registrarme'
              }
            })
            toast.error(
              'Usuario No registrado / Correo o Contraseña incorrectas'
            )
          }
        } catch (error) {
          console.log(error)
          console.log('hay un error en el login')
        }
      },

      handleChangeLogin: e => {
        setStore({
          [e.target.name]: e.target.value
        })
      },

      // VERIFICA QUE EXISTA EL USUARIO
      checkUser: () => {
        if (sessionStorage.getItem('currentUser')) {
          setStore({
            currentUser: JSON.parse(sessionStorage.getItem('currentUser'))
          })
        }
      },

      logout: () => {
        if (sessionStorage.getItem('currentUser')) {
          setStore({
            currentUser: null
          })
          sessionStorage.removeItem('currentUser')
        }
      },

      //REGISTRO DE USUARIO CON FOTO
      ///GUARDAR VALOR INPUT IMAGEN USUARIO
      inputUserImage: file => {
        setStore({ userImage: file })
      },

      ///GUARDAR OTROS CAMPOS DEL INPUT USUARIO
      inputUserValue: e => {
        const { name, value } = e.target

        setStore({
          ...getStore(),
          [name]: value
        })
      },

      ///SUBMIT FORM REGISTRO DE USUARIO CON FOTO
      submitUserImage: (e, navigate) => {
        try {
          e.preventDefault()
          const {
            name,
            lastname,
            email,
            password,
            rep_password,
            region,
            userImage
          } = getStore()
          const formData = new FormData()

          if (getStore().password === getStore().rep_password) {
            formData.append('name', name)
            formData.append('lastname', lastname)
            formData.append('email', email)
            formData.append('password', password)
            formData.append('rep_password', rep_password)
            formData.append('region', region)
            formData.append('userImage', userImage)
            getActions().postUser(formData, navigate)
            setStore({
              name: '',
              lastname: '',
              email: '',
              password: '',
              rep_password: '',
              region: '',
              userImage: null
            })
            e.target.reset()
            console.log('SUBMIT USER REGISTER')
          } else {
            alert('las contraseñas no coinciden')
          }
        } catch (error) {
          console.log(error)
        }
      },

      ///POST USUARIO CON FOTOS
      postUser: async (formData, navigate) => {
        try {
          const { url } = getStore()
          const response = await fetch(`${url}/api/register`, {
            method: 'POST',
            body: formData
          })
            .then(response => response.text())
            .then(result => {
              navigate('/login')
              console.log(result)
            })
            .catch(error => alert(error))
        } catch (error) {
          console.log(error)
        }
      },

      ////EDITAR UN USUARIO
      updateProfile: async (id, editedProfile, navigate) => {
        try {
          const { url, currentProfile } = getStore()
          const token = currentProfile ? currentProfile.access_token : ''
          const formData = new FormData()

          // Agrega los campos editados al FormData
          for (const key in editedProfile) {
            formData.append(key, editedProfile[key])
          }

          const response = await fetch(`${url}/api/edit_Profile/${id}`, {
            method: 'PUT',
            body: formData,
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          console.log(response)

          if (response.status === 200) {
            navigate('/')
            getActions().getLibros()
            console.log('Perfil actualizado con éxito.')
          } else {
            console.error('Error al actualizar el perfil:', response.statusText)
          }
        } catch (error) {
          console.error('Error en la solicitud PUT:', error)
        }
      }
    }
  }
}

export default getState
