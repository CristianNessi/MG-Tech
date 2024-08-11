

function showPlan(plan) {
    const card = document.getElementById('card');
    const backCommunity = document.getElementById('back-community');
    const backMarketing = document.getElementById('back-marketing');

    // Ocultar todos los elementos `.back` antes de mostrar el correcto
    backCommunity.style.display = 'none';
    backMarketing.style.display = 'none';

    // Mostrar el elemento `.back` correcto
    if (plan === 'community') {
        card.classList.add('show-community');
        backCommunity.style.display = 'flex';
    } else if (plan === 'marketing') {
        card.classList.add('show-marketing');
        backMarketing.style.display = 'flex';
    }

    // Ajustar la altura del contenedor basado en el elemento visible
    const visibleBack = plan === 'community' ? backCommunity : backMarketing;
    card.style.height = `${visibleBack.scrollHeight}px`;
}

function resetCard() {
    const card = document.getElementById('card');
    const backCommunity = document.getElementById('back-community');
    const backMarketing = document.getElementById('back-marketing');

    // Quitar las clases que muestran las tarjetas
    card.classList.remove('show-community', 'show-marketing');

    // Ocultar todos los elementos `.back`
    backCommunity.style.display = 'none';
    backMarketing.style.display = 'none';

    // Restablecer la altura de la tarjeta
    card.style.height = 'auto';
}

// Manejar visibilidad durante el scroll y resize
function handleVisibility() {
    const section = document.getElementById('marketing-section');
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
        section.classList.add('visible');
    } else {
        section.classList.remove('visible');
    }
}

window.addEventListener('scroll', handleVisibility);
window.addEventListener('resize', handleVisibility);



// reloj
document.addEventListener('DOMContentLoaded', () => {
    const hoursTensElement = document.getElementById('hours-tens');
    const hoursUnitsElement = document.getElementById('hours-units');
    const minutesTensElement = document.getElementById('minutes-tens');
    const minutesUnitsElement = document.getElementById('minutes-units');
    const secondsTensElement = document.getElementById('seconds-tens');
    const secondsUnitsElement = document.getElementById('seconds-units');

    function updateClock() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        hoursTensElement.textContent = Math.floor(hours / 10);
        hoursUnitsElement.textContent = hours % 10;
        minutesTensElement.textContent = Math.floor(minutes / 10);
        minutesUnitsElement.textContent = minutes % 10;
        secondsTensElement.textContent = Math.floor(seconds / 10);
        secondsUnitsElement.textContent = seconds % 10;
    }

    updateClock(); // Inicializa el reloj

    // Actualiza el reloj cada segundo
    setInterval(updateClock, 1000);
});



// colaboradores.

document.addEventListener('DOMContentLoaded', () => {
    const articles = document.querySelectorAll('.colaboradores article');
    articles.forEach((article, index) => {
        setTimeout(() => {
            article.classList.add('show');
        }, 500 * index); // Retraso de 0.5s por artículo
    });
});

function toggleText(button) {
    const article = button.closest('article');
    const moreText = article.querySelector('.more-text');
    const isExpanded = moreText.style.display === 'block';

    if (isExpanded) {
        moreText.style.display = 'none';
        button.textContent = 'Ver más';
        article.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
        moreText.style.display = 'block';
        button.textContent = 'Ver menos';
        article.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// Formulario.



// // Boton de contacto.

// document.addEventListener('DOMContentLoaded', function () {
//     const floatingButton = document.getElementById('floating-button');
//     const contactFormWrapper = document.getElementById('contact-form-wrapper');

//     // Mostrar formulario al hacer clic en el botón flotante
//     floatingButton.addEventListener('click', function () {
//         contactFormWrapper.style.display = 'flex';
//     });

//     // Ocultar formulario al hacer clic fuera del formulario
//     contactFormWrapper.addEventListener('click', function (e) {
//         if (e.target === contactFormWrapper) {
//             contactFormWrapper.style.display = 'none';
//         }
//     });
// });




document.addEventListener('DOMContentLoaded', function () {
    const floatingButton = document.getElementById('floating-button');
    const contactFormWrapper = document.getElementById('contact-form-wrapper');
    const form = document.getElementById('contactForm');

    // Mostrar formulario al hacer clic en el botón flotante
    floatingButton.addEventListener('click', function () {
        contactFormWrapper.style.display = 'flex';
    });

    // Ocultar formulario al hacer clic fuera del formulario
    contactFormWrapper.addEventListener('click', function (e) {
        if (e.target === contactFormWrapper) {
            contactFormWrapper.style.display = 'none';
        }
    });
});
// function encriptarTexto(texto) {
//     var passphrase = "mi_secreto_super_seguro"; // Usa una frase de contraseña segura
//     return CryptoJS.AES.encrypt(texto, passphrase).toString();
// }

// document.addEventListener('DOMContentLoaded', function () {
//     const floatingButton = document.getElementById('floating-button');
//     const contactFormWrapper = document.getElementById('contact-form-wrapper');
//     const form = document.getElementById('contactForm');

//     // Mostrar formulario al hacer clic en el botón flotante
//     floatingButton.addEventListener('click', function () {
//         contactFormWrapper.style.display = 'flex';
//     });

//     // Ocultar formulario al hacer clic fuera del formulario
//     contactFormWrapper.addEventListener('click', function (e) {
//         if (e.target === contactFormWrapper) {
//             contactFormWrapper.style.display = 'none';
//         }
//     });

//     // Encriptar los datos antes de enviar el formulario
//     form.addEventListener('submit', function (e) {
//         // Evitar el envío del formulario para encriptar los datos primero
//         e.preventDefault();

//         // Obtener los datos del formulario
//         const nameField = document.getElementById('name');
//         const emailField = document.getElementById('email');
//         const subjectField = document.getElementById('subject');
//         const messageField = document.getElementById('message');

//         // Encriptar los datos
//         nameField.value = encriptarTexto(nameField.value);
//         emailField.value = encriptarTexto(emailField.value);
//         subjectField.value = encriptarTexto(subjectField.value);
//         messageField.value = encriptarTexto(messageField.value);

//         // Puedes aquí enviar los datos al servidor usando Fetch o AJAX
//         // Por ejemplo:
//         // fetch('/your-endpoint', {
//         //     method: 'POST',
//         //     body: new FormData(form)
//         // })
//         // .then(response => response.json())
//         // .then(data => console.log(data))
//         // .catch(error => console.error('Error:', error));

//         // Para fines de demostración, mostraremos los datos en la consola
//         // console.log({
//         //     name: nameField.value,
//         //     email: emailField.value,
//         //     subject: subjectField.value,
//         //     message: messageField.value
//         // });

//         const formData = new FormData(form);

//         // Enviar los datos al servidor
//         fetch('/your-endpoint', {
//             method: 'POST',
//             body: formData
//         })
//             .then(response => response.json())
//             .then(data => console.log(data))
//             .catch(error => console.error('Error:', error));
//         // Ocultar el formulario después de enviar
//         contactFormWrapper.style.display = 'none';
//     });
// });


// // parallax

// window.addEventListener('scroll', function () {
//     const parallax = document.querySelector('.parallax::before');
//     const scrollPosition = window.pageYOffset;
//     parallax.style.transform = `translateY(${scrollPosition * 0.5}px)`;
// });


//footer

document.addEventListener('DOMContentLoaded', function () {
    const icons = document.querySelectorAll('.social-link, .contact-link');

    icons.forEach(icon => {
        icon.addEventListener('click', function () {
            const svg = icon.querySelector('svg');
            svg.style.transform = 'scale(1.8)';
            setTimeout(() => {
                svg.style.transform = 'scale(1.5)';
            }, 150);
        });
    });
});


// degrade 

window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;

    const startColor = [62, 176, 238, 0.5]; // Color de inicio (rojo)
    const endColor = [0, 0, 255]; // Color de fin (azul)

    const newColor = startColor.map((start, index) => {
        const end = endColor[index];
        const diff = end - start;
        return Math.round(start + (diff * scrollPercent));
    });

    document.querySelector('.background-container').style.background = `rgb(${newColor[0]}, ${newColor[1]}, ${newColor[2]})`;
});


// Menu desplegable

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


//section none

window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
        section.style.transform = 'translateX(0)';
    } else {
        section.style.transform = 'none';
        section.classList.add('visible');
    }
});
