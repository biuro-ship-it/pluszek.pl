// script.js - Główny plik z logiką dla Pluszek.pl

const navSlide = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Toggle Nav
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        // Burger Animation
        hamburger.classList.toggle('toggle');
    });

    // Zamykanie menu po kliknięciu linku na urządzeniach mobilnych
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                hamburger.classList.remove('toggle');
            }
        });
    });
}

// Zmiana stylu nawigacji przy scrollowaniu
const navObserver = () => {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
            navbar.style.padding = "10px 0";
        } else {
            navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.03)";
            navbar.style.padding = "15px 0";
        }
    });
}

// Inicjalizacja skryptów
document.addEventListener('DOMContentLoaded', () => {
    navSlide();
    navObserver();
    
    // Obsługa Modala Zamówień
    const modal = document.getElementById("orderModal");
    const closeBtn = document.querySelector(".close-btn");
    const openBtns = document.querySelectorAll(".open-modal-btn");
    const hiddenPackageInput = document.getElementById("hiddenPackage");
    const selectedPackageName = document.getElementById("selectedPackageName");

    // Otwórz modal, gdy kupią dany pakiet
    openBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const packageId = e.target.getAttribute('data-package');
            hiddenPackageInput.value = packageId;
            selectedPackageName.textContent = packageId;
            modal.style.display = "block";
            // Zablokuj skrolowanie tła
            document.body.style.overflow = 'hidden';
        });
    });

    // Zamknij
    closeBtn.addEventListener('click', () => {
        modal.style.display = "none";
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = 'auto';
        }
    });
});
