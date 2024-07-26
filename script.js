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

// Boton

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
