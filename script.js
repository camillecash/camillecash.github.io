let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    let top = window.scrollY + 200;
    let currentId = null;

    sections.forEach(sec => {
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            currentId = id;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');

        if (currentId && link.getAttribute('href') === `#${currentId}`) {
            link.classList.add('active');
        }
    });
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

if (menuIcon && navbar) {
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });
}

window.dispatchEvent(new Event('scroll'));