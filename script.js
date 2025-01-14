window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.innerWidth > 768) {
        header.classList.toggle('sticky', window.scrollY > 0);
    } else {
        header.classList.remove('sticky');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    menuToggle.addEventListener('change', () => {
        const nav = document.querySelector('nav ul');
        if (menuToggle.checked) {
            nav.style.display = 'flex';
        } else {
            nav.style.display = 'none';
        }
    });
});

let totalProjects = 0;
const totalProjectsElement = document.getElementById('totalProjects');
const startCountUp = () => {
    if (totalProjects < 100) {
        totalProjects++;
        totalProjectsElement.textContent = totalProjects;
        setTimeout(startCountUp, 1);
    }
};

const section = document.querySelector('#company-overview');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCountUp();
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

observer.observe(section);

document.addEventListener('scroll', function() {
        const projectsSection = document.querySelector('#projects');
        const sectionTop = projectsSection.getBoundingClientRect().top;
        const sectionHeight = projectsSection.clientHeight;
        const screenHeight = window.innerHeight;

        if (sectionTop < screenHeight && sectionTop + sectionHeight > 0) {
            projectsSection.classList.add('visible');
        } else {
            projectsSection.classList.remove('visible');
        }
    });
