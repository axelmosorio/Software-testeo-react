import React, { useState, useEffect } from 'react';

const CrearCDP = () => {
    const [nombreCaso, setNombreCaso] = useState('');
    const [pasos, setPasos] = useState('');
    const [lineas, setLineas] = useState([1]);
    
    useEffect(() => {
        const totalLineas = pasos === '' ? 1 : pasos.split('\n').length;
        const arregloLineas = Array.from({ length: totalLineas }, (_, i) => i + 1);
        setLineas(arregloLineas);
    }, [pasos]);
    
    const cerrarSesion = () => {
        if (window.confirm('¿Estás seguro de que deseas cerrar sesión?')) {
            navigate('/login'); 
        }
    };
    
    const volverAGestionar = () => {
        navigate('/gestionar');
    };
    
    return (
    <div className="body_crear">
        <header className="header_crear">
            <div className="logo_marca_testeo">
                <div className="icon_logo">S</div>
                <div className="texto_marca">
                    <strong>Software INC</strong>
                    <span>(testeo)</span>
                </div>
            </div>
            <div className="estado_administrador">
                <span className="label_permisos">Permisos de administrador: </span>
                <div className="indicador_activo">
                    <span className="puntero_activo"></span>
                    Activo
                </div>
            </div>
            <div className="acciones_de_arriba">
                <button className="boton_nav" onClick={volverAlMenu}>←</button>
                <button className="boton_nav">→</button>
                <button className="cerrar_sesion" onClick={gestionarCerrarSesion}>Cerrar sesión</button>
            </div>
        </header>
        
        <main className="contenedor_creacion">
            <aside className="panel_lateral_creacion">
                <div className="encabezado_lateral_creacion">
                    <h1 className="titulo_gestion">Crear caso de prueba</h1>
                    <hr className="separador_gestion_lateral" />
                </div>
                <div className="seccion_instrucciones_creacion">
                    <h2 className="subtitulo_creacion">Pasos para crear un caso de prueba</h2>
                    <ol className="lista_pasos_creacion">
                        <li>Nombre del caso de prueba</li>
                        <li>Descripción del objetivo</li>
                        <li>Precondiciones</li>
                        <li>Pasos detallados</li>
                        <li>Datos de prueba</li>
                        <li>Resultado esperado</li>
                        <li>Asignar prioridad</li>
                        <li>Clasificar por módulo</li>
                    </ol>
                </div>
            </aside>
            <section className="panel_edicion_creacion">
                <div className="encabezado_edicion_creacion">
                    <div className="campo_creacion_linea">
                        <input 
                        type="text" 
                        id="nombre_caso_input" 
                        placeholder="Nombre del caso de prueba"
                        value={nombreCaso}
                        onChange={(e) => setNombreCaso(e.target.value)}
                        />
                    </div>
                </div>
                <div className="area_texto_numerada_creacion">
                    <div className="area_numeros_creacion" id="numeros_linea_creacion">
                        {lineas.map((num) => (
                            <span key={num}>{num}.</span>
                        ))}
                    </div>
                    <textarea 
                    className="textarea_creacion" 
                    id="textarea_creacion" 
                    placeholder="Inserte los pasos del caso de prueba..."
                    value={pasos}
                    onChange={(e) => setPasos(e.target.value)}
                    />
                </div>
                <div className="panel_acciones_creacion">
                    <button className="opcion_creacion_ejecutar" onClick={() => alert('Ejecutar: función disponible próximamente')}>Ejecutar</button>
                    <button className="opcion_creacion_resultados" onClick={() => alert('Resultado: función disponible próximamente')}>Resultados</button>
                </div>
            </section>
        </main>
        
        <footer>
            <div className="logo">
                <img src="../../Imagenes/icono-software.png" alt="logo" className="icono_imagen" />
                <div className="texto_logo">
                    <p>SOFTWARE INC<br /><span>Los mejores softwares</span></p>
                </div>
            </div>
        </footer>
    </div>
    );
};

export default CrearCDP;