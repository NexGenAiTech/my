// About page specific JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Form submission
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const submitText = document.getElementById('submitText');
    const submitLoader = document.getElementById('submitLoader');
    const successMessage = document.getElementById('successMessage');
    
    if (contactForm) {
        const scriptURL = 'https://script.google.com/macros/s/AKfycbxb1RwbEM6Z46wm4LypQd1btaQDoxi35DYb9AOHsV_6f3hWRBHIqi7ybEPffRkvshva3w/exec';
        
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            submitText.style.display = 'none';
            submitLoader.style.display = 'block';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.8';
            
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());
            
            data.timestamp = new Date().toISOString();
            data.source = 'NexGenAiTech Website - Contact Page';
            data.pageURL = window.location.href;
            
            try {
                await fetch(scriptURL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });
                
                successMessage.style.display = 'block';
                contactForm.reset();
                
                setTimeout(() => {
                    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 300);
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 5000);
                
            } catch (error) {
                console.error('Error:', error);
                alert('There was an error sending your message. Please try again or email us directly at nexgenaitech7@gmail.com');
            } finally {
                submitText.style.display = 'block';
                submitLoader.style.display = 'none';
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
            }
        });
    }
    
    // Contact info item hover effects
    const contactInfoItems = document.querySelectorAll('.contact-info-item');
    contactInfoItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const icon = item.querySelector('i');
            icon.style.transform = 'rotate(15deg) scale(1.1)';
        });
        
        item.addEventListener('mouseleave', () => {
            const icon = item.querySelector('i');
            icon.style.transform = 'rotate(0deg) scale(1)';
        });
    });
    
    // Why choose card animations
    const whyChooseCards = document.querySelectorAll('.why-choose-card');
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });
    
    whyChooseCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        cardObserver.observe(card);
    });
    
    // Scroll to contact form if hash is #contact
    if (window.location.hash === '#contact') {
        setTimeout(() => {
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                window.scrollTo({
                    top: contactSection.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        }, 500);
    }
});
