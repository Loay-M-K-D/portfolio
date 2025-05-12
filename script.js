

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav__menu');
    const links = document.querySelectorAll('.nav__link');
    
    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
        });
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

