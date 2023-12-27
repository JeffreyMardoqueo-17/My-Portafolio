import { useState } from 'react';
import './Navbar.css'
import { AiOutlineMenu } from "react-icons/ai";
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
            text: 'Contacto',
            link: '#',
        },
    ]

    const [menu, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(!menu)
    }

    return (
        <header className="Cabecera">
            <div className="Cabecera-h1">
                <img src="/Assets/LOGOOO.svg" alt="" />
                <a href="#" className="Cabecera-a">
                    
                </a>
            </div>

            <button
                onClick={toggleMenu}
                className="Cabecera-button"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#fff" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                </svg>
            </button>

            <nav className={`Cabecera-nav ${menu ? 'isActive' : ''}`}>
                <ul className='Cabecera-ul'>
                    {list.map((item, index) => (
                        <li key={index} className='Cabecera-li'>
                            <a href={item.link} className='Cabecera-a'>
                                <span className="icon">
                                    {item.icon}
                                </span>
                                <span className="title">{item.text}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;

