import React from 'react'
import './Perfil.css'
import { AOS } from 'aos'
import Text from '../Text/Text'
export default function Perfil() {
    return (
        <div className= "Perfil" data-aos="fade-right" duration='1000'>
            {/* ==================IMAGEN DE PERFIL============== */}
            <div className="cajaPerfil">
                <img src='/imgs/FOOTOO.png' />
            </div>
            {/* =============NAME================== */}
            <div className="info">
                <h1 className="name "><span className='name1'>Jeff</span>rey<br></br>Mardoqueo</h1>
            </div>
            <br></br>
            {/* <Text /> */}
        </div>
    )
}
