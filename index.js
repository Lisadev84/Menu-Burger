document.addEventListener("DOMContentLoaded", function () {

    const body = document.querySelector("body");
    const menuOuvert = document.querySelector(".menu_ouvert");

    const menu = document.getElementById("menu");
    menu.addEventListener("click", function (e) {
        e.preventDefault;
        body.classList.add("menu_ouvert");
    })

    const menuFermer = document.getElementById("menu_fermer");
    menuFermer.addEventListener("click", function (e) {
        e.preventDefault;
        body.classList.remove("menu_ouvert");
    })



})
