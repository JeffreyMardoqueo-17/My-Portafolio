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

            {/* ==============BOOOO========================== */}

            {/* cambios de estilos */}
            <div className={style.knowledge}>
                <div className={style.knowledgecontainer_container}>
                    <div className={style.knowledegetexts}>
                        <h2 className={style.subtitle}>Curso completo de CSS3. ¡Domina CSS de una vez por todas!</h2>
                        <p className={style.knowledgeparagraph}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi,
                            aliquam nemo in facere suscipit at delectus unde labore ad officia iste accusantium eaque
                            aperiam laborum est voluptate totam? Modi, obcaecati?</p>
                        <a href="#" className={style.cta}>Entra al curso</a>
                    </div>

                    <figure className={style.knowledgepicture}>
                        <img src="./images/macbook.png" class={style.knowledgeimg} />
                    </figure>
                </div>
            </div>
        </div>
    )
}
