// Definindo variáveis
const menu = document.querySelector(".menu-opener")
const options = document.querySelector("nav")


// Definindo funções
// function abrirmenu() {
//     if (options.style.display === "block") {
//             options.style.display = "none";
//         } else {
//             options.style.display = "block";
//         }
// }

// Chamando a função
menu.addEventListener("click", () => {
    options.classList.toggle("show");
});