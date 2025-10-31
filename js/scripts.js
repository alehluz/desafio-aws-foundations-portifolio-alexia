/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    const btn = document.getElementById("lang-toggle");
    if (!btn) return;

    let currentLang = "pt-br";

    btn.addEventListener("click", () => {
        const toShow = currentLang === "pt-br" ? "en" : "pt-br";

        document.querySelectorAll("[lang]").forEach(el => {
            if (el.getAttribute("lang") === toShow) {
                el.style.display = "block";
            } else {
                el.style.display = "none";
            }
        });
        currentLang = toShow;
        btn.textContent = currentLang === "pt-br" ? "EN 🇺🇸" : "PT 🇧🇷";
    });
    
});



