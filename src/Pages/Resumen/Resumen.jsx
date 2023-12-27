import React from 'react';
import './Resumen.css'

const Resumen = () => {
    return (
        <div className='Caja'>
            <div class="container">

                <main class="row">

                    {/* <!--   *******  Education Section Starts  *******   --> */}

                    <section class="col">

                        <header class="title">
                            <h2>EDUCATION</h2>
                        </header>

                        <div class="contents">

                            <div class="box">
                                <h4>2019-2021</h4>
                                <h3>Tècnico Operador en Office</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>

                            <div class="box">
                                <h4>2021 - 2022</h4>
                                <h3>Tècnico Analista de sistemas computacionales</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>

                            <div class="box">
                                <h4>2021 - 2022</h4>
                                <h3>Bachillerato General</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>
                              <div class="box">
                                <h4>2023 - actual</h4>
                                <h3>Tècnico en Ingieneria de Desarrollo de Software</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>

                        </div>
                    </section>

                    {/* <!--   *******  Education Section Ends  *******   --> */}

                    {/* <!--   *******  Experience Section Starts  *******  --> */}

                    <section class="col">

                        <header class="title">
                            <h2>EXPERIENCE</h2>
                        </header>

                        <div class="contents">

                            <div class="box">
                                <h4>2018 - 2022</h4>
                                <h3>UI/UX Designer</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>

                            <div class="box">
                                <h4>2018 - 2022</h4>
                                <h3>Full-Stack Developer</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>

                            <div class="box">
                                <h4>2018 - 2022</h4>
                                <h3>Frontend Developer</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>

                        </div>
                    </section>
                    {/* <!--   *******  Experience Section Ends   *******  --> */}
                </main>
            </div>
        </div>
    );
}

export default Resumen;
