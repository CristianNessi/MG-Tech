document.addEventListener('DOMContentLoaded', function () {
    // Funcionalidad del menú móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('nav ul');
    const barra = document.querySelector('.barra');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function () {
            menu.classList.toggle('menu-show');
        });
    }

    // Funcionalidad para el cambio de color de la barra de navegación en el scroll
    function handleScroll() {
        if (window.scrollY > 0) {
            barra.classList.add('scroll');
        } else {
            barra.classList.remove('scroll');
        }
    }

    window.addEventListener('scroll', handleScroll);

    // Funcionalidad del acordeón para FAQ
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        item.addEventListener('click', function () {
            const isActive = this.classList.contains('active');
            const answer = this.querySelector('.faq-answer');

            // Cerrar otras respuestas abiertas
            faqItems.forEach(i => {
                if (i !== item) {
                    i.classList.remove('active');
                    const otherAnswer = i.querySelector('.faq-answer');
                    otherAnswer.style.maxHeight = '0';
                    otherAnswer.style.opacity = '0';
                    otherAnswer.style.visibility = 'hidden';
                }
            });

            // Alternar la respuesta de la pregunta clickeada
            if (isActive) {
                // Si ya está activa, colapsar
                this.classList.remove('active');
                answer.style.maxHeight = '0';
                answer.style.opacity = '0';
                answer.style.visibility = 'hidden';
            } else {
                // Si no está activa, expandir
                this.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px'; // Ajusta max-height según el contenido
                answer.style.opacity = '1';
                answer.style.visibility = 'visible';
            }
        });
    });
});
