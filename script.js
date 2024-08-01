// Scrool
window.addEventListener('scroll', function () {
    const section = document.getElementById('marketing-section');
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
        section.classList.add('visible');
    } else {
        section.classList.remove('visible');
    }
});

// Añadido para evitar múltiples cálculos innecesarios al hacer scroll rápidamente.
window.addEventListener('resize', () => {
    const section = document.getElementById('marketing-section');
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
        section.classList.add('visible');
    } else {
        section.classList.remove('visible');
    }
});


// banner 

document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.icono');
    const popups = document.querySelectorAll('.popup');
    const closes = document.querySelectorAll('.close');
    const volverButtons = document.querySelectorAll('.volver');

    // Mostrar ventana emergente al hacer clic en el icono
    icons.forEach(icon => {
        icon.addEventListener('click', () => {
            const popupId = icon.getAttribute('data-popup');
            const popup = document.getElementById(popupId);
            popup.style.display = 'block';
        });
    });

    // Cerrar ventana emergente al hacer clic en el botón de cerrar
    closes.forEach(close => {
        close.addEventListener('click', (event) => {
            event.target.closest('.popup').style.display = 'none';
        });
    });

    // Cerrar ventana emergente al hacer clic en el botón "Volver"
    volverButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.target.closest('.popup').style.display = 'none';
        });
    });

    // Cerrar ventana emergente al hacer clic fuera del contenido
    window.addEventListener('click', (event) => {
        popups.forEach(popup => {
            if (event.target === popup) {
                popup.style.display = 'none';
            }
        });
    });
});


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

// Boton de contacto.

document.addEventListener('DOMContentLoaded', function () {
    const floatingButton = document.getElementById('floating-button');
    const contactFormWrapper = document.getElementById('contact-form-wrapper');

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

// parallax

window.addEventListener('scroll', function () {
    const parallax = document.querySelector('.parallax::before');
    const scrollPosition = window.pageYOffset;
    parallax.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});


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