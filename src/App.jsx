import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx"; // Importa el componente que acabas de crear
import Navbar from "./components/organisms/Navbar";
import Footer from './components/molecules/Footer';
import Contacto from './pages/Contacto';
import Cotizacion from './pages/Cotizacion';
import Proyectos from './pages/Proyectos';
import Servicios from './pages/Servicios';
import SobreLaMarca from './pages/SobreLaMarca';

function App() {
    return (
        <div className="container-page">
        <Navbar />
        {/*se envuelven las rutas en el main*/}
        <main className="contenido-main">
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/cotizacion" element={<Cotizacion />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/sobreLaMarca" element={<SobreLaMarca />} />
            {/*ruta comodin*/}
        </Routes>
        </main>
        <Footer />
        </div>
    );
}

export default App;