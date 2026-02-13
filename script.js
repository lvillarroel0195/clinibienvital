/* ==========================================================
   1. LÓGICA DEL MENÚ PRINCIPAL
   ========================================================== */
const btnMenu = document.getElementById('btnMenu');
const menuLista = document.getElementById('menuLista');

// Verificar que los elementos del menú existan para evitar errores
if (btnMenu && menuLista) {
    btnMenu.addEventListener('click', () => {
        // Añade o quita la clase 'mostrar' para desplegar el menú
        menuLista.classList.toggle('mostrar');
    });

    // Cerrar el menú si el usuario hace clic fuera de él
    window.addEventListener('click', (e) => {
        if (!btnMenu.contains(e.target) && !menuLista.contains(e.target)) {
            menuLista.classList.remove('mostrar');
        }
    });
}

/* ==========================================================
   2. LÓGICA DEL ACORDEÓN DE DOCTORES
   ========================================================== */
const doctorHeaders = document.querySelectorAll('.doctor-header');

// Solo se ejecuta si hay elementos con la clase '.doctor-header' (Página de Equipo)
if (doctorHeaders.length > 0) {
    doctorHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // Buscamos el contenedor padre '.doctor-item'
            const item = header.parentElement;
            
            // Opcional: Cerrar otros acordeones abiertos al abrir uno nuevo
            document.querySelectorAll('.doctor-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('activo');
                }
            });

            // Alternar la clase 'activo' en el seleccionado
            item.classList.toggle('activo');
        });
    });
}