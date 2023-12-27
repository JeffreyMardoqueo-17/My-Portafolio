import logo from './logo.svg';
import './App.css';
import Perfil from'./components/Perfil/Perfil.jsx'
import Navbar from './components/NavBar/Navbar';
import Resumen from './Pages/Resumen/Resumen.jsx';
import Text from './components/Text/Text.jsx';
import Card from './components/Card/Card.jsx';
import Cards from './Pages/Proyects/Cards.jsx';
// import Footer from './components/footer';

function App() {

  return (
    // Comienza el componente principal, que tiene una clase "App".
    <div className="App">
      {/* =======Nav============================== */}

      <div className='contenido'>
        {/* //perfil */}
        <Navbar />
        <Perfil></Perfil>
        <Resumen />
        <Cards />
        </div>
    </div>
  );
}

export default App;


