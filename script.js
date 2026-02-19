// 1. LÓGICA DEL MENÚ PRINCIPAL
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

// 2. LÓGICA DE ACORDEONES INDEPENDIENTES
// Función para activar acordeones sin cerrar los demás
function configurarAcordeon(claseHeader) {
    const headers = document.querySelectorAll(claseHeader);
    headers.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            item.classList.toggle('activo');
        });
    });
}

// Inicializamos Doctores y Servicios por separado
configurarAcordeon('.doctor-header');
configurarAcordeon('.servicio-header');