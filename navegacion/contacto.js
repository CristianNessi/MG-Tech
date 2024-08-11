document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const successMessage = document.getElementById("success-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevenir el envío real del formulario

        // Validación básica (se puede mejorar según las necesidades)
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const telefono = document.getElementById("telefono").value;
        const mensaje = document.getElementById("mensaje").value;

        if (nombre && email && telefono && mensaje) {
            // Simular envío del formulario
            setTimeout(() => {
                form.reset();
                successMessage.classList.remove("hidden");
                successMessage.classList.add("visible");

                // Ocultar el mensaje después de unos segundos
                setTimeout(() => {
                    successMessage.classList.remove("visible");
                    successMessage.classList.add("hidden");
                }, 3000);
            }, 500); // Simular un pequeño retraso
        } else {
            alert("Por favor, completa todos los campos.");
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('nav ul');

    function toggleMenu() {
        if (menu) {
            menu.classList.toggle('menu-show');
        }
    }

    function handleScroll() {
        const barra = document.querySelector('.barra');
        if (barra) {
            if (window.scrollY > 0) {
                barra.classList.add('scroll');
            } else {
                barra.classList.remove('scroll');
            }
        }
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    window.addEventListener('scroll', handleScroll);
});
