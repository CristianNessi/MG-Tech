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

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.toggle-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const article = this.closest('article');
            const isExpanded = article.classList.toggle('expanded');
            this.textContent = isExpanded ? 'Cerrar' : 'Seguir leyendo';
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelector('.carousel-slides');
    const totalSlides = document.querySelectorAll('.carousel-slide').length;
    let currentIndex = 0;

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        const offset = -currentIndex * 100;
        slides.style.transform = `translateX(${offset}%)`;
    }

    setInterval(showNextSlide, 3000); // Cambia cada 3 segundos
});
