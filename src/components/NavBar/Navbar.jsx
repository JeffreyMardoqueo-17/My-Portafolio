import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const list = [
        {
            text: 'Inicio',
            link: '#',
        },
        {
            text: 'Sobre Mi',
            link: '#',
        },
        {
            text: 'Proyectos',
            link: '#',
        },
        {
            text: 'Estudios',
            link: '#',
        },
        {
            text: 'Blog',
            link: '#'
        },
        {
            text: 'Contacto',
            link: '#',
        },
    ];

    // Nuevo estado para controlar el desplazamiento
    const [scrollEnabled, setScrollEnabled] = useState(true);

    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
        setScrollEnabled(menu); // Deshabilita el desplazamiento cuando se abre el menú
    };

    // Efecto para aplicar y limpiar los estilos en el cuerpo de la página según el estado del desplazamiento
    useEffect(() => {
        if (!scrollEnabled) {
            document.body.style.overflow = 'hidden'; // Deshabilita el desplazamiento
        } else {
            document.body.style.overflow = 'auto'; // Habilita el desplazamiento
        }

        // Limpia el efecto cuando el componente se desmonta
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [scrollEnabled]);

    const handleMenuItemClick = () => {
        setMenu(false); // Cierra el menú al seleccionar un ítem
        // Realiza la acción asociada al ítem del menú aquí
         setScrollEnabled(menu);
    };

    return (
        <header className="Cabecera">
            <div className="Cabecera-h1">
                <img src="/Assets/LOGOOO.svg" alt="" />
                <a href="#" className="Cabecera-a"></a>
            </div>

            <button onClick={toggleMenu} className="Cabecera-button">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="#fff"
                    class="bi bi-list"
                    viewBox="0 0 16 16"
                >
                    <path
                        fill-rule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                    />
                </svg>
            </button>
            <nav className={`Cabecera-nav ${menu ? 'isActive' : ''}`}>
                <ul className="Cabecera-ul">
                    {list.map((item, index) => (
                        <li key={index} className="Cabecera-li">
                            <a href={item.link} className="Cabecera-a" onClick={handleMenuItemClick}>
                                <span className="title">{item.text}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

        </header>
    );
};

export default Navbar;
