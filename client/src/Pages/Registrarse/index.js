import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../../Components/Footer'
import Instagram from '../../Images/Login/instagram.png'
import style from '../../Css/registrarse.module.css'
import Facebook from '../../Images/facebook blanco.jpg'
import { crearCuenta } from '../../Redux/Actions'
import Google from '../../Images/Login/googlePlay.png'
import Micro from '../../Images/Login/microsoft.png'

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
      <div className={style.container}>
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
            <p className={style.parrafo}>Es posible que las personas que usan nuestro servicio hayan subido tu información de contacto a Instagram. <a className={style.link} target='_blank' href='https://www.facebook.com/help/instagram/261704639352628'>Más información</a></p>
            <p className={style.parrafo}>Al registrarte, aceptas nuestras <a className={style.link} target='_blank' href='https://help.instagram.com/581066165581870/?locale=es_LA'>Condiciones</a>, <a className={style.link} target='_blank' href='https://www.facebook.com/privacy/policy'>la Política de privacidad</a> y la <a className={style.link} target='_blank' href='https://help.instagram.com/1896641480634370/'>Política de cookies.</a></p>
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
        <div className={style.containerNo}>
          <span>¿Tienes una cuenta? <a className={style.registrate} href='http://localhost:3000/'>Inicia sesión</a></span>
        </div>
        <div className={style.containerApp}>
          <span className={style.descarga}>Descarga la app.</span>
          <div className={style.containerImg}>
            <a
              href='https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D0C684C7F-7DD4-4BE2-AFAF-77601781D7DF%26utm_content%3Dlo%26utm_medium%3Dbadge'
              target='_BLANK'
            ><img src={Google} className={style.google} alt='google' /></a>
            <a
              href='ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=0%2C0%2C2880%2C2280'
            ><img src={Micro} className={style.micro} alt='microsoft' /></a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Registrarse;
