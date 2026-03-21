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

// ==========================================================================
// 3. LÓGICA DEL MODAL DE IMÁGENES (LIGHTBOX)
// ==========================================================================
const modalImagen = document.getElementById('modalImagen');
const imgAmpliacion = document.getElementById('imgAmpliacion');
const cerrarModal = document.getElementById('cerrarModal');
const imagenesAmpliables = document.querySelectorAll('.img-ampliable');

if (modalImagen && imgAmpliacion && cerrarModal) {
    // Al hacer clic en cualquier imagen ampliable...
    imagenesAmpliables.forEach(img => {
        img.addEventListener('click', function() {
            modalImagen.style.display = "flex"; 
            modalImagen.style.justifyContent = "center";
            modalImagen.style.alignItems = "center";
            imgAmpliacion.src = this.src; // Copia la ruta de la imagen original al modal
        });
    });

    // Cerrar al hacer clic en la X
    cerrarModal.addEventListener('click', () => {
        modalImagen.style.display = "none";
    });

    // Cerrar si el usuario hace clic fuera de la imagen (en el fondo oscuro)
    modalImagen.addEventListener('click', (e) => {
        if (e.target === modalImagen) {
            modalImagen.style.display = "none";
        }
    });
}