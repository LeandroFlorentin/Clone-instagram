import axios from 'axios'

export const crearCuenta = (cuenta) => dispatch => {
  axios.post('http://localhost:3001/crearUsuario', cuenta)
}