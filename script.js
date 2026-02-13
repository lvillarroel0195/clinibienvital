
const btnMenu = document.getElementById('btnMenu');
const menuLista = document.getElementById('menuLista');

    btnMenu.addEventListener('click', () => {
        // "toggle" añade la clase si no está, y la quita si ya está
        menuLista.classList.toggle('mostrar');
    });

    // Opcional: Cerrar el menú si haces clic fuera de él
    window.addEventListener('click', (e) => {
        if (!btnMenu.contains(e.target) && !menuLista.contains(e.target)) {
            menuLista.classList.remove('mostrar');
        }
    });
