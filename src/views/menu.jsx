import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function MenuPrincipal() {
    const navigate = useNavigate();

    useEffect(() => {
        document.body.classList.add('body_menu');
        return () => {
            document.body.classList.remove('body_menu');
        };
    }, []);

    const handleCerrarSesion = () => {
        if (window.confirm('¿Estás seguro de que deseas cerrar sesión?')) {
            navigate('/login');
        }
    };

    return (
    <>
    <header className='header_menu'>
        <div className='logo_marca_testeo'>
            <div className='icon_logo'>S</div>
            <div className='texto_marca'>
                <strong>Software INC</strong>
                <span>(testeo)</span>
            </div>
        </div>

        <div className='estado_administrador'>
            <span className='label_permisos'>Permisos de administrador</span>
            <div className='indicador_activo'>
                <span className='puntero_activo'></span>
                Activo
            </div>
        </div>

        <div className='acciones_de_arriba'>
            <button className='boton_nav' onClick={() => window.history.back()}>←</button>
            <button className='boton_nav' onClick={() => window.history.forward()}>→</button>
            <button className='cerrar_sesion' onClick={handleCerrarSesion}>Cerrar sesión</button>
        </div>
        </header>

        <main className='contenedor_menu'>
            <div className='panel_lateral_menu'>
                <h1 className='titulo_menu'>Menu principal</h1>
                <hr className='separador_menu'/>

                <button className='opcion_menu' onClick={() => navigate('/gestionar')}>
                    Gestionar casos de prueba
                </button>
                <button className='opcion_menu' onClick={() => navigate('/generar')}>
                    Generar informes de casos de prueba
                </button>
                <button className='opcion_menu' onClick={() => alert('Proximamente')}>
                    Herramientas CI/CD y control de versiones
                </button>
            </div>
        </main>
        <footer>
            <a href='#' className='enlace_logo'>
                <div className='logo'>
                    <img src='../public/images/icono-software.png' alt='Logo' className='icono_imagen'/>
                    <div className='texto_logo'>
                        <p>SOFTWARE INC<br /><span>Los mejores softwares</span></p>
                    </div>
                </div>
            </a>
        </footer>
    </>
    );
}

export default MenuPrincipal;