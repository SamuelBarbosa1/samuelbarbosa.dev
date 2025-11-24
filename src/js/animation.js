
const sr = ScrollReveal();

const cards = document.querySelectorAll('.cards');
for (let i = 0; i < cards.length; i++) {
    sr.reveal(cards[i], {
        origin: 'top',
        distance: '30px',
        duration: 800,
        delay: 400 * i,
    });
}



const projects = document.querySelectorAll('.projeto')
for (let i = 0; i < projects.length; i++) {
    sr.reveal(projects[i], {
        delay: 100 * i,
        origin: 'top',
        distance: '20px',
        duration: 2000
    })
}

const nave = document.querySelectorAll('.nave')
// faça uma animação diagonal
for (let i = 0; i < nave.length; i++) {
    sr.reveal(nave[i], {
        delay: 100 * i,
        origin: 'top',
        distance: '150px',
        duration: 3000
    })
}

// Animação para a seção Sobre Mim
const sobreMimSection = document.querySelector('#sobre-mim');
if (sobreMimSection) {
    sr.reveal(sobreMimSection, {
        delay: 200,
        origin: 'bottom',
        distance: '30px',
        duration: 1500
    });
    
    const sobreContentItems = document.querySelectorAll('.sobre-text, .experiencia-timeline');
    for (let i = 0; i < sobreContentItems.length; i++) {
        sr.reveal(sobreContentItems[i], {
            delay: 300 * (i + 1),
            origin: 'left',
            distance: '30px',
            duration: 1000
        });
    }
    
    const timelineItems = document.querySelectorAll('.timeline-item');
    for (let i = 0; i < timelineItems.length; i++) {
        sr.reveal(timelineItems[i], {
            delay: 200 * (i + 1),
            origin: 'left',
            distance: '20px',
            duration: 800
        });
    }
    
    const certificados = document.querySelectorAll('.certificado-card');
    for (let i = 0; i < certificados.length; i++) {
        sr.reveal(certificados[i], {
            delay: 150 * (i + 1),
            origin: 'bottom',
            distance: '20px',
            duration: 800
        });
    }
}

// Header hide/show on scroll functionality
let lastScrollTop = 0;
const header = document.querySelector('.fixed-top-header');
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Hide/show header based on scroll direction
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down - hide header
        header.classList.add('hide');
    } else {
        // Scrolling up - show header
        header.classList.remove('hide');
    }
    
    // Show/hide back to top button
    if (scrollTop > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
    
    lastScrollTop = scrollTop;
});

// Back to top button functionality
backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show header when mouse is near the top of the screen
document.addEventListener('mousemove', function(e) {
    if (e.clientY < 100) {
        header.classList.remove('hide');
    }
});
