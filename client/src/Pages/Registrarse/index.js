import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Footer from '../../Components/Footer'
import Instagram from '../../Images/Login/instagram.png'
import style from '../../Css/registrarse.module.css'
import Facebook from '../../Images/facebook blanco.jpg'

const Registrarse = () => {
  const dispatch = useDispatch();
  const [datos, setDatos] = useState({
    correo: "",
    nombre: "",
    usuario: "",
    contraseña: ""
  })

  const registrando = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    })
  }

  const registro = (e) => {
    e.preventDefault()
    dispatch(crearCuenta(datos))
  }

  return (
    <div className={style.containerRegis}>
      <div className={style.containerForm}>
        <img src={Instagram} className={style.instagram} alt='instagram' />
        <p className={style.textReg}>Regístrate para ver fotos y videos de tus amigos.</p>
        <div className={style.containerFace}>
          <img src={Facebook} className={style.facebook} alt='Facebook' />
          <span className={style.iniciar}>Iniciar sesión con Facebook</span>
        </div>
        <div className={style.containerLineas}>
          <div className={style.lineaUno}></div>
          <div className={style.circulo}></div>
          <div className={style.lineaDos}></div>
        </div>
        <form className={style.form} onSubmit={registro} >
          <input
            className={style.email}
            type='text'
            placeholder='Correo electrónico'
            value={datos.correo}
            onChange={registrando}
            name='correo'
          />
          <input
            className={style.email}
            type='text'
            placeholder='Nombre completo'
            value={datos.nombre}
            onChange={registrando}
            name='nombre'
          />
          <input
            className={style.email}
            type='text'
            placeholder='Nombre de usuario'
            value={datos.usuario}
            onChange={registrando}
            name='usuario'
          />
          <input
            className={style.email}
            type='password'
            placeholder='Contraseña'
            value={datos.contraseña}
            onChange={registrando}
            name='contraseña'
          />
          <button
            className={`${(datos.contraseña && datos.numero !== "") ? style.botonAct : style.botonDes}`}
            type='submit'
          >Registrarse</button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Registrarse;
