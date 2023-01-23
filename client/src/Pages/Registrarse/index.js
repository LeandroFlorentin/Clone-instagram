import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../../Components/Footer'
import Instagram from '../../Images/Login/instagram.png'
import style from '../../Css/registrarse.module.css'
import Facebook from '../../Images/facebook blanco.jpg'
import { crearCuenta } from '../../Redux/Actions'

const Registrarse = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [datos, setDatos] = useState({
    correo: "",
    nombre: "",
    usuario: "",
    contrasena: ""
  })

  const registrando = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    })
    setData(true)
  }
  const registro = (e) => {
    e.preventDefault()
    if (isValidEmail(datos.correo) && datos.contrasena.length > 8) dispatch(crearCuenta(datos)).then(() => navigate('/inicio'))
  }

  function isValidEmail(mail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);
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
            value={datos.contrasena}
            onChange={registrando}
            name='contrasena'
          />
          <button
            className={`${(datos.contrasena.length > 8 && datos.correo !== "")
              ?
              style.botonAct
              :
              style.botonDes
              }`}
            type='submit'
          >Registrarse</button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Registrarse;
