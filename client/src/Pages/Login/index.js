import React from 'react'
import style from '../../Css/login.module.css'
import Instagram from '../../Images/Login/instagram.png'
import Facebook from '../../Images/Login/facebook.png'
import Celular from '../../Components/Celular'
import Google from '../../Images/Login/googlePlay.png'
import Micro from '../../Images/Login/microsoft.png'
import Footer from '../../Components/Footer'

const Login = () => {
    return (
        <>
            <div
                className={style.container}
            >
                <div className={style.containerCelu}>
                    <Celular />
                </div>
                <div className={style.contenedorIngreso}>
                    <div className={style.containerDatos}>
                        <div>
                            <img src={Instagram} className={style.instagram} alt='instagram' />
                        </div>
                        <form className={style.form}>
                            <input className={style.email} type='email' placeholder='Teléfono, usuario o correo electrónico' />
                            <input className={style.contraseña} type='password' placeholder='Contraseña' />
                            <button
                                className={`${false ? style.botonAct : style.botonDes}`}
                                type='submit'
                            >Entrar</button>
                        </form>
                        <div className={style.containerLineas}>
                            <div className={style.lineaUno}></div>
                            <div className={style.circulo}></div>
                            <div className={style.lineaDos}></div>
                        </div>
                        <div className={style.containerFace}>
                            <img src={Facebook} className={style.facebook} alt='Facebook' />
                            <span className={style.iniciar}>Iniciar sesión con Facebook</span>
                        </div>
                        <a
                            className={style.olvidado}
                            href='http://localhost:3000/registrar'
                        >¿Has olvidado la contraseña?</a>
                    </div>
                    <div className={style.containerNo}>
                        <span>¿No tienes una cuenta? <a className={style.registrate} href='http://localhost:3000/registrar'>Registrate</a></span>
                    </div>
                    <span className={style.descarga}>Descarga la aplicación.</span>
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
        </>
    )
}

export default Login;