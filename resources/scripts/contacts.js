document.addEventListener('DOMContentLoaded', function() {

    // Fetching HTML elements
    const contactForm = document.querySelector('.text-container');

    // Determining the number of pixels needed to be scrolled
    const scrollThreshold = 300;


    window.addEventListener('scroll', function() {
        
        const scrollY = window.scrollY;
        
        contactForm.style.transform = `translateY(${scrollY * 1}px)`; // Bigger values means image will move faster
        
    })
})