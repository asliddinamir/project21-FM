document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".open_menu");
    const overlay = document.querySelector(".overlay");
    const navbar = document.querySelector(".navbar");
    const closeButton = document.querySelector(".close_menu");


    menuButton.addEventListener("click", function () {
        overlay.style.display = "block";
        closeButton.style.display = 'block'
        navbar.classList.add("active");
    });

    overlay.addEventListener("click", function () {
        overlay.style.display = "none";
        navbar.classList.remove("active");
        closeButton.style.display = 'none'
    });

    closeButton.addEventListener("click", function () {
        overlay.style.display = "none";
        navbar.classList.remove("active");
        closeButton.style.display = 'none'
    });
});
