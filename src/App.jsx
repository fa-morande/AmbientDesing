import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'; // Importa el componente que acabas de crear

function App() {
  return (
    <div>
      {}

      <Routes>
        {/* Esta línea le dice a React Router: */}
        {/* "Cuando la URL sea '/', muestra el componente Home" */}
        <Route path="/" element={<Home />} />
        */}
      </Routes>
    </div>
  );
}

export default App;