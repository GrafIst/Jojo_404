var loader = 0; //le loader n'est pas actif
var menu = 0; //le menu est fermé

var idMenu = document.getElementById("menu");
var idLoader = document.getElementById("loader");
var idCover = document.getElementById("cover");

function openingMenu() {
  if (menu == 0) { //SI le menu est fermé, alors on l'ouvre
    idMenu.classList.remove("menu-is-closed");
    idMenu.classList.add("menu-is-open");
/* 		idCover.classList.add("backdrop"); */
    menu = 1;
  } else { //SInon on le ferme
    idMenu.classList.remove("menu-is-open");
    idMenu.classList.add("menu-is-closed");
/* 		idCover.classList.remove("backdrop"); */
    menu = 0;
  }
}

function openingLoader() {
  if (loader == 0) { //SI le loader est fermé, alors on l'ouvre
    idLoader.classList.remove("loader-is-closed");
    idLoader.classList.add("loader-is-open");
    idCover.classList.add("slide_cover");

    loader = 1; //le loader est ouvert
  } else { //SInon on le ferme
    idLoader.classList.remove("loader-is-open");
    idLoader.classList.add("loader-is-closed");
    idCover.classList.remove("slide_cover");

    loader = 0; //le loader est fermé
  }
}
