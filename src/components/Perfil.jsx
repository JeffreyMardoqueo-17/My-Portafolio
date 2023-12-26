import React from 'react'
import style from './Perfil.module.css'
import { AOS } from 'aos'
export default function Perfil() {
    return (
        <div className={style.Perfil} data-aos="fade-right" duration='1000'>
            {/* ==================IMAGEN DE PERFIL============== */}
            <div className={style.cajaPerfil}>
                <img src=' /imgs/peer.png' />
            </div>
            {/* =============NAME================== */}
            <div className={style.info}>
                <h1 className={style.name}>Jeffrey <br></br>Mardoqueo</h1>
            </div>

            {/* {/* ==============BOOOO========================== * */}
        </div>
    )
}
