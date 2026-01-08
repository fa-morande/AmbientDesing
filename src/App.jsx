import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { appRoutes } from '@/routes/Config';
import Navbar from '@/components/molecules/navigation/Navbar';
import Footer from '@/components/molecules/navigation/Footer'; // 1. Importar el Footer

function App() {
    return (
        <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
            {appRoutes.map(({ path, component: Component, showNavbar }) => (
            <Route
                key={path}
                path={path}
                element={
                <>
                    {/* 2. El Navbar se muestra según la config */}
                    {showNavbar !== false && <Navbar />}
                    
                    <main className="page-content">
                    <Component />
                    </main>

                    {/* 3. Renderizar el Footer aquí para que aparezca en todas las páginas */}
                    {showNavbar !== false && <Footer />} 
                </>
                }
            />
            ))}
        </Routes>
        </Suspense>
    );
}

export default App;