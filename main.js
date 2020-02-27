$('.carousel').carousel(
    "prev"
)

let hamburgerElt = document.querySelector(".fa-bars");
let barreTitre = document.getElementById("titleBar");
let barreMenu = document.getElementById("barre");
let menuOuvert = true;


const visibilite = () => {
    barreTitre.style.visibility = "hidden";
    if (screen.width <= 767) {
        barreTitre.style.visibility = "visible";
    }
    console.log(hamburgerElt);
    hamburgerElt.addEventListener("click", function () {
        menuOuvert = !menuOuvert;
        if (menuOuvert) {
            barreMenu.style.transform = 'translateX(0%)';
        } else {
            barreMenu.style.transform = 'translateX(100%)';
        }
    });
}
document.addEventListener('DOMContentLoaded', (event) => {
    visibilite();
})

window.addEventListener("resize", (event) => {
    visibilite();
    console.log("test");
})

/* toggle menu  de 20 à 25 */

let mentionsObligatoires = document.getElementById("mentions");
let mentions = document.querySelector(".mentions");

const visibiliteDeux = () => {
    mentions.style.visibility = "hidden";
    mentionsObligatoires.addEventListener("click", function () {
        mentions.style.visibility = "visible";

    })
}
visibiliteDeux();