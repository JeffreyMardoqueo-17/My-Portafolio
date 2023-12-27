import React from 'react';
import './Text.css'
const Text = () => {
    return (
        <div className="container">
            <div className="content">
                <div className="content__container">
                    <p className="content__container__text">
                        Hello
                    </p>

                    <ul className="content__container__list">
                        <li className="content__container__list__item">world !</li>
                        <li className="content__container__list__item">coder !</li>
                        <li className="content__container__list__item">users !</li>
                        <li className="content__container__list__item">Programer</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Text;
