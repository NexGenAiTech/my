// Services page specific JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Service image hover effects
    const serviceImages = document.querySelectorAll('.service-detailed-image');
    serviceImages.forEach(image => {
        image.addEventListener('mouseenter', () => {
            const img = image.querySelector('img');
            img.style.transform = 'scale(1.05)';
        });
        
        image.addEventListener('mouseleave', () => {
            const img = image.querySelector('img');
            img.style.transform = 'scale(1)';
        });
    });
    
    // Scroll to specific service on page load if hash exists
    if (window.location.hash) {
        const targetId = window.location.hash;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            setTimeout(() => {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }, 500);
        }
    }
    
    // Animate service sections on scroll
    const serviceSections = document.querySelectorAll('.service-detailed');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });
    
    serviceSections.forEach(section => {
        sectionObserver.observe(section);
    });
    
    // Get Started button animations
    const getStartedButtons = document.querySelectorAll('.get-started-btn');
    getStartedButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            const icon = button.querySelector('i');
            icon.style.transform = 'translateX(5px)';
        });
        
        button.addEventListener('mouseleave', () => {
            const icon = button.querySelector('i');
            icon.style.transform = 'translateX(0)';
        });
    });
});
