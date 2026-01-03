    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', function (info) {
        cursor.style.left = info.clientX + 'px';
        cursor.style.top = info.clientY + 'px';
    });

    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('.nav');
    const menuLinks = document.querySelectorAll('.menu a');

    function fecharMenu() {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
    }

    // Abrir / fechar menu
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Fechar ao clicar num link
    menuLinks.forEach(link => {
        link.addEventListener('click', fecharMenu);
    });

    // Fechar ao clicar fora
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
            fecharMenu();
        }
    });

    // 🔥 Fechar ao dar scroll
    window.addEventListener('scroll', () => {
        if (nav.classList.contains('active')) {
            fecharMenu();
        }
    });

    const elementosInterativos = document.querySelectorAll(
        'a, button, .efeito-cursor'
    );

    elementosInterativos.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
        });

        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
        });
    });