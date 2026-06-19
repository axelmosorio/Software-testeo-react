import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// 1. Corrección de importaciones (Faltaba la barra '/' después del punto)
import Login from './views/login';
import Register from './views/registro';
import ForgotPassword from './views/recuperar_p';
import MenuPrincipal from './views/menu';

// 2. Importar las nuevas vistas de gestión que modificamos
import GestionarMenu from './views/gestionar';
import CrearCDP from './views/crear_cdp';
import ModificarCDP from './views/modificar_cdp';
import EliminarCDP from './views/eliminar_cdp';
import Generar from './views/generar';

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirección inicial */}
        <Route path='/' element={<Navigate to='/login' />} />
        
        {/* Rutas de autenticación */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/recuperar_p' element={<ForgotPassword />} />
        
        {/* Menú Principal */}
        <Route path='/menu' element={<MenuPrincipal />} />
        
        {/* 3. Nuevas rutas mapeadas para que coincidan con tus funciones navigate() */}
        <Route path="/gestionar" element={<GestionarMenu />} />
        <Route path="/generar" element={<Generar />} />
        <Route path='/crear-cdp' element={<CrearCDP />} />
        <Route path='/modificar-cdp' element={<ModificarCDP />} />
        <Route path='/eliminar-cdp' element={<EliminarCDP />} />
      </Routes>
    </Router>
  );
}

export default App;