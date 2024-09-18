function cambiarSeccion(seccion) {
    const contenido = document.getElementById('contenido');

    switch (seccion) {
        case 'inicio':
            contenido.innerHTML = `
                <h2>Inicio</h2>
                <p>Bienvenido al panel de control de tu canal en PlayVideo.</p>
            `;
            break;
        case 'monetizacion':
            contenido.innerHTML = `
                <h2>Monetización</h2>
                <p>Controla las ganancias y opciones de monetización de tus videos.</p>
                <button class="boton-monetizar" onclick="empezarMonetizacion()">Empezar a Monetizar</button>
            `;
            break;
        case 'estadisticas':
            contenido.innerHTML = `
                <h2>Estadísticas</h2>
                <p>Datos importantes:</p>
                <ul>
                    <li>Horas de reproducción: 1200</li>
                    <li>Vistas totales: 35,000</li>
                    <li>Likes totales: 5,000</li>
                </ul>
            `;
            break;
        case 'configuracion':
            contenido.innerHTML = `
                <h2>Configuración</h2>
                <p>Ajusta las preferencias y configuraciones de tu cuenta.</p>
            `;
            break;
        default:
            contenido.innerHTML = `
                <h2>Bienvenido al panel</h2>
                <p>Aquí encontrarás las estadísticas y herramientas para gestionar tu canal en PlayVideo.</p>
            `;
            break;
    }
}

function empezarMonetizacion() {
    alert("¡Comienza a monetizar tus videos en PlayVideo!");
}
