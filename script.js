document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            contactForm.reset();
            alert('Thank you for your message! We will get back to you soon.');
        } else {
            alert('Sorry, there was an error submitting your message. Please try again.');
        }
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe all sections that need animation
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Navbar background change on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(29, 53, 87, 0.95)';
        } else {
            navbar.style.backgroundColor = '#1d3557';
        }
    });
});
