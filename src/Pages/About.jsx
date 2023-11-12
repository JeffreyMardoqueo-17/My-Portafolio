import React from 'react'
import style from './About.module.css'

export default function About() {
    return (
        <div className={style.About}>
            {/* ==========================CLARO============================ */}
            <div className={style.claro}>
                <h2>Sobre Mi</h2>
                <p>
                    <span className={style.name}>Me llamo Jeffrey Mardoqeuo</span>
                    Frontend Develomend
                </p>
            </div>
            {/* ===================morado con informacion==================== */}
            <div className={style.MoradoInfor}>
                <p>SDKJNSKDNKJNSDKJNKJSDNKJNSDKNKSJNDKJNSDKJNSKJDNJKNSDKJS DKSDNK SD SDJNK
                    SDJKSDJNKSNDKJNSDKNKSDNKSD KSDJNKJSNDKSNDKJNSKJDKJDNSKJNDSKJNDS KSNDKJSNDKJNSD
                    SDKNJSDNJKSNDKJSND
                    SKDNKSJDNKJSDSNDJKNSDKJNSD KSDNSNDKJNSDKNKJSDNKNSDKNSJKDNKJSDN
                </p>
            </div>
        </div>
    )
}