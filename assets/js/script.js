document.addEventListener('DOMContentLoaded', () => {
    // 1. Suaviza a rolagem para seções
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 2. Animação de texto (fade-in)
    const text = document.querySelector(".fade-in-text");
    if (text) {
        text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
        const spans = text.querySelectorAll("span");
        spans.forEach((span, index) => {
            span.style.animationDelay = `${index * 0.1}s`;
        });
    }

    // 3. Formulário de contato (exemplo básico)
    const contactForm = document.querySelector('.contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Mensagem enviada com sucesso! (Implementação real necessária)');
            contactForm.reset();
        });
    }

    // 4. Notificação ao clicar nos botões
    const verTrabalhosButton = document.getElementById('ver-trabalhos');
    const projetosLink = document.getElementById('projetos-link');
    const notification = document.getElementById('notification');

    const showNotification = () => {
        // Exibe a notificação
        notification.classList.remove('hidden');
        notification.classList.add('visible');

        // Oculta a notificação após 3 segundos
        setTimeout(() => {
            notification.classList.remove('visible');
            notification.classList.add('hidden');
        }, 3000); // 3000ms = 3 segundos
    };

    if (verTrabalhosButton && notification) {
        verTrabalhosButton.addEventListener('click', function (event) {
            event.preventDefault(); // Impede o comportamento padrão do link
            showNotification();
        });
    }

    if (projetosLink && notification) {
        projetosLink.addEventListener('click', function (event) {
            event.preventDefault(); // Impede o comportamento padrão do link
            showNotification();

            // Rolagem suave para a seção de projetos após a notificação desaparecer
            setTimeout(() => {
                document.querySelector('#projetos').scrollIntoView({
                    behavior: 'smooth'
                });
            }, 3000); // Espera a notificação desaparecer antes de rolar
        });
    }
}); 

