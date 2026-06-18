// ==========================================
// CONFIGURACIÓN: Cambia esto para cada cita
// ==========================================
const CONFIG = {
    planValido: 5,  // El número del botón correcto (del 1 al 6)
    sitio: "París",
    hora: "El viernes por la mañana"
};

// Elementos de la web
const btnNo = document.getElementById('btnNo');
const btnSi = document.getElementById('btnSi');
const pantallaPregunta = document.getElementById('pantallaPregunta');
const pantallaPlanes = document.getElementById('pantallaPlanes');
const pantallaDetalles = document.getElementById('pantallaDetalles');
const sitioPlan = document.getElementById('sitioPlan');
const horaPlan = document.getElementById('horaPlan');

// Lógica para que el botón "No" escape
function escapar() {
    const anchoVentana = window.innerWidth;
    const altoVentana = window.innerHeight;

    const maxX = anchoVentana - btnNo.offsetWidth - 20;
    const maxY = altoVentana - btnNo.offsetHeight - 20;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    btnNo.style.position = 'fixed';
    btnNo.style.left = randomX + 'px';
    btnNo.style.top = randomY + 'px';
}

btnNo.addEventListener('mouseover', escapar);
btnNo.addEventListener('click', escapar);

// Pasar de la pregunta a los planes
btnSi.addEventListener('click', function() {
    pantallaPregunta.classList.add('oculto');
    pantallaPlanes.classList.remove('oculto');
    document.body.className = 'fondo-planes';
});

// Controlar los clicks en los 6 botones de planes
const botonesPlan = document.querySelectorAll('.btn-plan');

botonesPlan.forEach(boton => {
    boton.addEventListener('click', function() {
        // Sacamos el número de botón que ha pulsado
        const idSeleccionado = parseInt(this.getAttribute('data-id'));
        
        if (idSeleccionado === CONFIG.planValido) {
            // Si acierta: metemos los datos en el HTML y cambiamos de pantalla
            sitioPlan.textContent = CONFIG.sitio;
            horaPlan.textContent = CONFIG.hora;
            
            pantallaPlanes.classList.add('oculto');
            pantallaDetalles.classList.remove('oculto');
            document.body.className = 'fondo-detalles'; // Si mantuviste lo de cambiar el fondo
        } else {
            // Si falla: le ponemos la clase 'oculto' al botón que acaba de tocar para que desaparezca
            this.classList.add('oculto');
            
        }
    });
});