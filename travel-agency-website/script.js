document.addEventListener('DOMContentLoaded', () => {

    // --- Hero Slider Logic ---
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const slideInterval = 5000; // 5 seconds

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    if (slides.length > 0) {
        setInterval(nextSlide, slideInterval);
    }

    // --- Navbar Scroll Effect ---
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Mobile Menu Toggle ---
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');
    const navActions = document.querySelector('.nav-actions');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            const isVisible = navLinks.style.display === 'flex';

            if (isVisible) {
                navLinks.style.display = 'none';
                navActions.style.display = 'none';
                menuToggle.innerHTML = '<i class="ri-menu-line"></i>';
                navbar.style.backgroundColor = window.scrollY > 50 ? 'white' : 'transparent';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.backgroundColor = 'white';
                navLinks.style.padding = '1rem';
                navLinks.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)';

                // Ensure links are visible (color fix for transparent header mode)
                const links = navLinks.querySelectorAll('a');
                links.forEach(link => link.style.color = '#1e293b');

                navActions.style.display = 'flex';
                navActions.style.flexDirection = 'column';
                navActions.style.position = 'absolute';
                navActions.style.top = '280px';
                navActions.style.left = '0';
                navActions.style.width = '100%';
                navActions.style.padding = '1rem';
                navActions.style.backgroundColor = 'white';

                // Button style fix for mobile menu
                const btns = navActions.querySelectorAll('.btn');
                btns.forEach(btn => {
                    btn.classList.remove('btn-outline');
                    btn.classList.add('btn-primary');
                    btn.style.width = '100%';
                    btn.style.textAlign = 'center';
                });

                menuToggle.innerHTML = '<i class="ri-close-line"></i>';
                navbar.style.backgroundColor = 'white'; // Force white background when menu open
            }
        });
    }

    // --- Smooth Scroll for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (navLinks.style.display === 'flex') {
                    menuToggle.click();
                }

                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});
