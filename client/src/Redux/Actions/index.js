import axios from 'axios';
import db from '../../Utils/firebase.js'
import { signInWithRedirect, FacebookAuthProvider } from 'firebase/auth'
export const NAVEGAR = "NAVEGAR";

export const crearCuenta = (cuenta) => async () => {
  await axios.post('http://localhost:3001/crearUsuario', cuenta);
}

export const iniciandoSesion = (cuenta) => async () => {
  const respuesta = await axios.post('http://localhost:3001/iniciandoSesion', cuenta)
  return respuesta.data.valor
}

export const iniciarFacebook = () => async () => {
  const facebookProvider = new FacebookAuthProvider()
  await signInWithRedirect(db, facebookProvider)
}