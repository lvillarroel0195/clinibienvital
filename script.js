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

// 2. LÓGICA DE ACORDEONES (MODO INDEPENDIENTE)
const headers = document.querySelectorAll('.doctor-header');

if (headers.length > 0) {
    headers.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            
            // Alternamos 'activo' solo en el elemento clickeado
            // Esto permite tener múltiples servicios abiertos a la vez
            item.classList.toggle('activo');
        });
    });
}