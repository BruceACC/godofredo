document.addEventListener('DOMContentLoaded', () => {
    // --- 1. MENÚ MÓVIL ---
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('navLinks');
    const links = document.querySelectorAll('.nav-link');

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuBtn.querySelector('i');
        // Alternar icono entre hamburguesa y 'X'
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Cerrar menú al hacer click en un enlace
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuBtn.querySelector('i').classList.remove('fa-times');
            menuBtn.querySelector('i').classList.add('fa-bars');
        });
    });

    // --- 2. ANIMACIÓN SCROLL REVEAL ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });

    // --- 3. EFECTO 3D CARD TILT (Del nuevo diseño) ---
    const cards3D = document.querySelectorAll('.card-3d-wrap');
    cards3D.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const cardRect = this.getBoundingClientRect();
            const x = e.clientX - cardRect.left;
            const y = e.clientY - cardRect.top;
            const centerX = cardRect.width / 2;
            const centerY = cardRect.height / 2;
            // Ajusta la intensidad dividiendo por un número mayor o menor (ej: 20)
            const rotateY = (x - centerX) / 20; 
            const rotateX = (centerY - y) / 20;
            
            this.querySelector('.card-inner-3d').style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.card-inner-3d').style.transform = 'rotateY(0) rotateX(0)';
        });
    });
});