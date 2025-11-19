// MOBILE NAV TOGGLE
const burger = document.querySelector(".burger");
const nav = document.querySelector(".navbar-items");

burger.addEventListener("click", () => {
    nav.classList.toggle("show-menu");
});

// Close menu when clicking any nav link
document.querySelectorAll(".navbar-items a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("show-menu");
    });
});

// NAVBAR ON SCROLL (background change)
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
