function toggleMenu() {
    const navbar = document.querySelector(".navbar");
    const hamburger = document.querySelector(".hamburger");

    navbar.classList.toggle("active");

    hamburger.classList.toggle("fa-bars");

    hamburger.classList.toggle("fa-xmark");
}