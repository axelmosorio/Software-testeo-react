import React from 'react';

const Generar = () => {
    const cerrarSesion = () => {
        if (window.confirm('¿Estás seguro de que deseas cerrar sesión?')) {
            navigate('/login'); 
        }
    };
    
    const volverAlMenu = () => {
        navigate('/menu');
    };
    
    return (
    <div className="body_generar">
        <header className="header_generar">
            <div className="logo_marca_testeo">
                <div className="icon_logo">S</div>
                <div className="texto_marca">
                    <strong>Software INC</strong>
                    <span>(testeo)</span>
                </div>
            </div>
            <div className="acciones_de_arriba">
                <button className="boton_nav" onClick={volverAlMenu}>←</button>
                <button className="boton_nav">→</button>
                <button className="cerrar_sesion" onClick={gestionarCerrarSesion}>Cerrar sesión</button>
            </div>
        </header>
        
        <main className="contenedor_generar">
            <section className="panel_generar">
                <h1>Módulo de Generación</h1>
                <p>Contenido y parámetros para la generación automática de pruebas.</p>
                <button className="boton_ejecutar" onClick={() => alert('Generando...')}>
                    Iniciar Generación
                </button>
            </section>
        </main>
    </div>
    );
};

export default Generar;