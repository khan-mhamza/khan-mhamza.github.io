// Initialize scroll triggers
const scrollTriggers = new ScrollTriggers();

// Add trigger animations for fade-in effect
scrollTriggers.add('.fade-in', {
    onEnter: element => {
        element.classList.add('active');
    },
    onExit: element => {
        element.classList.remove('active');
    }
});

// Add event listeners to scroll to sections
const menuItems = document.querySelectorAll('.menu li a');
menuItems.forEach(item => {
    item.addEventListener('click', scrollToSection);
});

function scrollToSection(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop - 100, // Adjust scroll offset
            behavior: 'smooth'
        });
    }
}

// Active link highlighting based on scroll position
function setActiveLink(targetId) {
    menuItems.forEach(item => {
        const linkId = item.getAttribute('href').substring(1);
        if (linkId === targetId) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    document.querySelectorAll('.tab-content').forEach(section => {
        if (scrollPosition >= section.offsetTop - 50) {
            setActiveLink(section.id);
        }
    });
});

window.addEventListener('hashchange', () => {
    const targetId = window.location.hash.substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop - 100, // Adjust scroll offset
            behavior: 'smooth'
        });
        setActiveLink(targetId);
    }
});
