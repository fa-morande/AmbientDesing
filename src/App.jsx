import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'; // Importa el componente que acabas de crear
import Navbar from './components/organisms/Navbar'

function App() {
  return (
    <div className="container-page">
      <Navbar />
      {/* Aquí es donde podrías poner un Navbar o un Header 
        que quieras que se muestre en TODAS las páginas.
      */}

      <Routes>
        {/* Esta línea le dice a React Router: */}
        {/* "Cuando la URL sea '/', muestra el componente Home" */}
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;