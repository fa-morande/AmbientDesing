import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { appRoutes } from '@/routes/Config';
import Navbar from '@/components/molecules/navigation/Navbar';

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
                    {/* Solo renderiza el Navbar si showNavbar no es explícitamente false */}
                    {showNavbar !== false && <Navbar />}
                    <main className="page-content">
                    <Component />
                    </main>
                </>
                }
            />
            ))}
        </Routes>
        </Suspense>
    );
}

export default App;