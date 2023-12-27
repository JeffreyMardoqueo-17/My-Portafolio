import logo from './logo.svg';
import './App.css';
import Perfil from'./components/Perfil/Perfil.jsx'
import Navbar from './components/NavBar/Navbar';
import Resumen from './Pages/Resumen/Resumen.jsx';
import Text from './components/Text/Text.jsx';
// import Footer from './components/footer';

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

      <div className='contenido'>
        {/* //perfil */}
        <Navbar />
        <Perfil></Perfil>
        <Resumen />
        {/* <Resumen /> */}
        {/* /*FOOOTEEER */}
        {/* <Footer></Footer> */}  
        </div>
    </div>
  );
}

export default App;


