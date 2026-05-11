function cambiarSeccion(id) {
    // Actualizar título
    const titulo = document.getElementById("titulo-seccion");
    titulo.innerText = id.replace("-", " ").toUpperCase();

    // Actualizar clase activa en el menú
    const items = document.querySelectorAll(".nav-menu li");
    items.forEach(item => item.classList.remove("active"));
    
    // Contenedor donde cargaremos las vistas
    const contenedor = document.getElementById("contenedor-dinamico");

    // Lógica de cambio de vista
    if(id === 'inicio') {
        contenedor.innerHTML = `
            <div class="welcome-card">
                <h1>CENTRAL DE INTELIGENCIA DC</h1>
                <p>Panel de administración de eSports activado.</p>
            </div>
        `;
    } else if(id === 'jugador-mes') {
        contenedor.innerHTML = `
            <div class="welcome-card" style="border-color: gold;">
                <h1 style="color:gold;">⭐ JUGADOR DEL MES ⭐</h1>
                <img src="img/elar.jpg" style="width:200px; border-radius:50%; border:5px solid gold; margin:20px;">
                <h2>DC ELAR</h2>
                <p>Récord de 190 Kills en la Temporada 2026.</p>
            </div>
        `;
    } else {
        contenedor.innerHTML = `<h1>Sección ${id}</h1><p>Contenido en desarrollo...</p>`;
    }
}

function cerrarSesion() {
    window.location.href = "index.html";
}