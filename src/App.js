import logo from './logo.svg';
import './App.css';
import Perfil from'./components/Perfil'
import About from './Pages/About'
import Footer from './components/footer';

function App() {
  // Definimos un array llamado `menuItems` que contiene objetos con el texto del enlace y la URL del enlace.
  const menuItems = [
    { text: 'Inicio',       link: '#' },
    { text: 'Acerca de mi', link: '#' },
    { text: 'Proyectos',    link: '#' },
    { text: 'Blog',         link: '#' },
    { text: 'Contacto',     link: '#' },
  ];

  return (
    // Comienza el componente principal, que tiene una clase "App".
    <div className="App">
      {/* =======Nav============================== */}
      <div className='Nav'>
        <ul>
          <li>
            <a href="#" className='locontenedor'>
             {/* El logotipo de tu sitio */}
              <span className="icon"></span>
              <span className="logo"><b>JEFF</b></span>
            </a>
          </li>
          {/* =========================SECION DE LINKS============== */}
          {/* Utilizo `map()` para recorrer el array `menuItems` y generar elementos de lista para cada elemento. */}
          {menuItems.map((item, index) => (

            // index:respresenta la posiocion
            <li key={index}>
              <a href={item.link}>
                {/* El texto del enlace que proviene de la propiedad `text` del objeto en `menuItems`. */}
                <span className="title">{item.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className='contenido'>
        {/* //perfil */}
        <Perfil></Perfil>
        {/* //=======ABOUT=======/ */}
        <About></About>
        {/* /*FOOOTEEER */}
        {/* <Footer></Footer> */}
        </div>
    </div>
  );
}

export default App;


