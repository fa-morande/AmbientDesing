import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx"; // Importa el componente que acabas de crear
import Navbar from "./components/organisms/Navbar";
import Footer from './components/molecules/Footer';

function App() {
  return (
    <div className="container-page">
      <Navbar />
      {/*se envuelven las rutas en el main*/}
      <main className="contenido-main">
        <Routes>
          <Route path="/" element={<Home />} />



        {/*ruta comodin*/}
      </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;