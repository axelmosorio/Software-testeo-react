import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../index.css'

const GestionarMenu = () => {
    const navigate = useNavigate(); // Inicializar la función de navegación
    const gestionarNavegacion = (direccion) => {
        if (direccion === 'atras') {
            navigate(-1); // Navega hacia atrás en el historial
        } else {
            navigate(1);  // Navega hacia adelante
        }
    };

    const gestionarGenerar = () => {
    alert('Función Generar activada correctamente.');
    };

    const cerrarSesion = () => {
        if (window.confirm('¿Estás seguro de que deseas cerrar sesión?')) {
            navigate('/login'); 
        }
    };
    
    const volverAlMenu = () => {
        navigate('/menu');
    };

    return (
    <div className="body_gestionar">
        <header className="header_gestionar">
            <div className="logo_marca_testeo">
                <div className="icon_logo">S</div>
                <div className="texto_marca">
                    <strong>Software INC</strong>
                    <span>(testeo)</span>
                </div>
            </div>
            <div className="acciones_de_arriba">
                <button className="boton_nav" onClick={() => gestionarNavegacion('atras')}>←</button>
                <button className="boton_nav" onClick={() => gestionarNavegacion('adelante')}>→</button>
                <button className="cerrar_sesion" onClick={cerrarSesion}>Cerrar sesión</button>
            </div>
        </header>
        
        <main className="contenedor_menu">
            <h1 className="titulo_menu">Menú Principal</h1>
            <div className="opciones_menu">
                <button className="boton_menu" id="boton_generar" onClick={gestionarGenerar}>
                    Generar
                </button>
                
                <div className="seccion_gestionar_pruebas">
                    <h2>Gestionar Pruebas</h2>
                    <div className="sub_opciones">
                        <button className="boton_sub_menu" onClick={() => navigate('/crear-cdp')}>
                            Crear caso de prueba
                        </button>
                        <button className="boton_sub_menu" onClick={() => navigate('/modificar-cdp')}>
                            Modificar caso de prueba
                        </button>
                        <button className="boton_sub_menu" onClick={() => navigate('/eliminar-cdp')}>
                            Eliminar caso de prueba
                        </button>
                    </div>
                </div>
            </div>
        </main>
    </div>
    );
};

export default GestionarMenu;