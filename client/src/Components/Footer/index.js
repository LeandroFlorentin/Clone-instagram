import React from 'react'
import style from '../../Css/footer.module.css'

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.containerTextos}>
                <span>Meta</span>
                <span>Información</span>
                <span>Blog</span>
                <span>Empleo</span>
                <span>Ayuda</span>
                <span>API</span>
                <span>Privacidad</span>
                <span>Condiciones</span>
                <span>Cuentas destacadas</span>
                <span>Ubicaciones</span>
                <span>Instagram Lite</span>
                <span>Subir contactos y personas no usuarias</span>
            </div>
            <div className={style.instagram}>
                <span>© 2023 Instagram from Meta</span>
            </div>
        </div>
    )
}

export default Footer;
