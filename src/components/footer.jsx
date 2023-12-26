import React from 'react';
import st from './footer.module.css'
const Footer = () => {
    return (
        <div className={st.piepagina}>
            <div className={st.grupo1} data-aos="fade-right" data-aos-delay="100" data-aos-duration="2000">
                <div className={st.box}>
                    <figure>
                        <a href="#">
                            <img src="./img/Spider-Man-Logo.png" alt="" />
                        </a>
                    </figure>
                </div>
                <div className={st.box}>
                    <h2>Sobre </h2>
                    <p>Bueno el motivo de la pagina es porque psoy super fan de spidemran. </p>
                    <p>Spiderman nos enseña a nunca rendirnos, jamas</p>
                </div>
                <div className={st.box}>
                    <h2>Puedes c</h2>
                    <div className={st.redsocial}>
                        {/* <a href="#" className="fa fa-facebook"></a>
                        <a href="#" className="fa fa-instagram"></a>
                        <a href="#" className="fa fa-youtube"></a> */}
                    </div>
                </div>
            </div>
            <div className="grupo-2">
                <small>&copy; 2023 <b>J.J</b></small>
            </div>
        </div>
    );
}

export default Footer;
