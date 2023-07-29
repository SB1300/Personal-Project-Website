document.addEventListener('DOMContentLoaded', function() {

    // Fetching HTML elements
    const parallaxImg = document.querySelector('.parallax-img');
    const navBar = document.querySelector('.menu-bar')
    const header = document.querySelector('header');
    const devName = document.querySelector('.developer-name');
    const navBarMenus = document.querySelector('.menus');
    const projects = document.querySelector('.projects-container');
    const mainContent = document.querySelector('main');

    // Fetching individual elements of the navigation bar
    const myProjects = document.getElementsByTagName('a')[1];
    const contacts = document.getElementsByTagName('a')[2];
    
    // Fetching any specific values from returned HTML elements
    const header_left = window.getComputedStyle(header).left;
    const header_right = window.getComputedStyle(header).right;

    const navBarMenus_margin = window.getComputedStyle(navBarMenus).marginRight;


    // Determining the number of pixels needed to be scrolled
    const imgScrollThreshold = 1180;
    const contentScrollThreshold = 600;


    window.addEventListener('scroll', function() {
        
        const scrollY = window.scrollY;

        if (scrollY > contentScrollThreshold) {
            const opacity = (scrollY - contentScrollThreshold) / 120;
            mainContent.style.backgroundColor = `rgba(211, 211, 211, ${opacity})`;
        }

        // If number of pixels needed to be scrolled has been reached
        if (scrollY > imgScrollThreshold) {
            header.style.left = 0;
            header.style.right = 0;
            devName.style.marginLeft = '2.488em';
            navBarMenus.style.marginRight = '3.25em';
            myProjects.style.border = '0.0625em solid white';
            contacts.style.border = '0.0625em solid white';
            const opacity = (scrollY - imgScrollThreshold) / 100; // Calculating opacity based on the scroll position
            navBar.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
        // If not, keep scrolling
        } else {
            header.style.left = header_left;
            header.style.right = header_right;
            devName.style.marginLeft = 0;
            navBarMenus.style.marginRight = 0;
            myProjects.style.border = '0.0625em solid black';
            contacts.style.border = '0.0625em solid black';
            navBar.style.backgroundColor = "rgba(0, 0, 0, 0)";
        }
        parallaxImg.style.transform = `translateY(${scrollY * 0.8}px)`; // Bigger values means image will move faster
        
    })
})