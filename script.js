// 1. LÓGICA DEL MENÚ
const btnMenu = document.getElementById('btnMenu');
const menuLista = document.getElementById('menuLista');

if (btnMenu && menuLista) {
    btnMenu.addEventListener('click', () => {
        menuLista.classList.toggle('mostrar');
    });

    window.addEventListener('click', (e) => {
        if (!btnMenu.contains(e.target) && !menuLista.contains(e.target)) {
            menuLista.classList.remove('mostrar');
        }
    });
}

// 2. LÓGICA DE DOCTORES (ACORDEÓN)
const doctorHeaders = document.querySelectorAll('.doctor-header');

if (doctorHeaders.length > 0) {
    doctorHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            
            // Cierra otros doctores abiertos (opcional, para limpieza)
            document.querySelectorAll('.doctor-item').forEach(otherItem => {
                if (otherItem !== item) otherItem.classList.remove('activo');
            });

            item.classList.toggle('activo');
        });
    });
}