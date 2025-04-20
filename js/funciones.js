document.addEventListener('DOMContentLoaded', () => {
    AOS.init();
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const serviceSelect = document.getElementById('service');
    const messageInput = document.getElementById('message');
    const charCount = document.getElementById('charCount');

    messageInput.addEventListener('input', () => {
        const currentLength = messageInput.value.length;
        charCount.textContent = `${currentLength}/1000 caracteres`;
    });

    // Validación y manejo del formulario
    form.addEventListener('submit', (event) => {
         // Prevenir el envío del formulario y la recarga de la página

        let isValid = true;

        // Validar el campo Nombre
        if (nameInput.value.trim() === '') {
            alert('Por favor, ingrese su nombre.');
            isValid = false;
        }

        // Validar el campo Correo Electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            alert('Por favor, ingrese un correo electrónico válido.');
            isValid = false;
        }

        // Validar el campo Servicio
        if (serviceSelect.value === '') {
            alert('Por favor, seleccione un servicio.');
            isValid = false;
        }

        // Validar el campo Mensaje
        if (messageInput.value.trim() === '') {
            alert('Por favor, ingrese un mensaje.');
            isValid = false;
        } else if (messageInput.value.length > 1000) {
            alert('El mensaje no puede exceder los 1000 caracteres.');
            isValid = false;
        }

        // Si el formulario es válido, mostrar los datos en la consola
        if (isValid) {
            console.log('Datos del formulario:');
            console.log('Nombre:', nameInput.value);
            console.log('Correo Electrónico:', emailInput.value);
            console.log('Servicio:', serviceSelect.value);
            console.log('Mensaje:', messageInput.value);

            // Si deseas enviar el formulario después de revisar los datos, descomenta la siguiente línea:
            form.submit();
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');

    themeToggle.addEventListener('click', () => {
        // Cambiar el modo oscuro en el cuerpo
        document.body.classList.toggle('dark-mode');

        // Cambiar el modo oscuro en la barra de navegación
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.classList.toggle('dark-mode');
        }

        // Cambiar el modo oscuro en las tarjetas
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => card.classList.toggle('dark-mode'));

        // Cambiar el modo oscuro en el pie de página
        const footer = document.querySelector('footer');
        if (footer) {
            footer.classList.toggle('dark-mode');
        }

        // Cambiar el modo oscuro en las secciones con la clase "fondo"
        const fondos = document.querySelectorAll('.fondo');
        fondos.forEach(fondo => fondo.classList.toggle('dark-mode'));

        // Cambiar el texto del botón
        if (document.body.classList.contains('dark-mode')) {
            themeToggle.textContent = 'Modo Claro';
        } else {
            themeToggle.textContent = 'Modo Oscuro';
        }
    });
});

const messageInput = document.getElementById('message');
const charCount = document.getElementById('charCount');
messageInput.addEventListener('input', () => {
    const currentLength = messageInput.value.length;
    charCount.textContent = `${currentLength}/1000 caracteres`;
});