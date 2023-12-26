import React from 'react'
import './Perfil.css'
import { AOS } from 'aos'
export default function Perfil() {
    return (
        <div className= "Perfil" data-aos="fade-right" duration='1000'>
            {/* ==================IMAGEN DE PERFIL============== */}
            <div className="cajaPerfil">
                <img src=' /imgs/peer.png' />
            </div>
            {/* =============NAME================== */}
            <div className="info">
                <h1 className="name ">Jeffrey <br></br>Mardoqueo</h1>
            </div>

            {/* {/* ==============BOOOO========================== * */}
        </div>
    )
}
