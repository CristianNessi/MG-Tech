document.addEventListener("DOMContentLoaded", () => {
    const barra = document.querySelector('.barra');
    const faders = document.querySelectorAll('.fade-in');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            barra.classList.add('scroll');
        } else {
            barra.classList.remove('scroll');
        }

        faders.forEach(fader => {
            const faderPosition = fader.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (faderPosition < windowHeight - 50) {
                fader.classList.add('visible');
            }
        });
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