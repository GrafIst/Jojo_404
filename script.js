var loader = 0; //le loader n'est pas actif
var menu = 0; //le menu est fermé

var idMenu = document.getElementById("menu");
var idLoader = document.getElementById("loader");
var idCover = document.getElementById("cover");
var idbckdropMenu = document.getElementById("backdropMenu");
var idError = document.getElementById("error");

function openingMenu() {
  if (menu == 0) { //SI le menu est fermé, alors on l'ouvre
    idMenu.classList.remove("menu-is-closed");
    idMenu.classList.add("menu-is-open");
    idbckdropMenu.classList.remove("uDisappear");
    idCover.classList.add("blur");
    menu = 1;
  } else { //SInon on le ferme
    idMenu.classList.remove("menu-is-open");
    idMenu.classList.add("menu-is-closed");
    idbckdropMenu.classList.add("uDisappear");
    idCover.classList.remove("blur");
    menu = 0;
  }
}

function openingLoader() {
  if (loader == 0) { //SI le loader est fermé, alors on l'ouvre
    idLoader.classList.remove("loader-is-closed");
    idLoader.classList.add("loader-is-open");

    loader = 1; //le loader est ouvert
  } else { //SInon on le ferme
    idLoader.classList.remove("loader-is-open");
    idLoader.classList.add("loader-is-closed");

    loader = 0; //le loader est fermé
  }
}

function changeDialogue(){

  var text=0;
  var dialogue=1;
  var dialoguebox = document.getElementById('iddialogue');
  var span = document.getElementById("idspan");
  var id = setInterval(frame, 2000);

  function frame(){

    if (text==0){
      if (dialogue==0) {
        span.innerHTML = "Check <a href='https://youtu.be/dQw4w9WgXcQ'>here</a> ! You'll find out about the server status";
        dialogue=1;
      }
      else {
        span.innerHTML = "Oh no! This must be the work of an enemy Stand!";
        dialogue=0;
      }
      dialoguebox.classList.remove("uDisappear");
      text=1;
    }
    else {
      dialoguebox.classList.add("uDisappear");
      text=0;
    }
  }
}

function animatelogo(){
  var x = setTimeout(removeClass, 4050);
  document.getElementById("idlogo").classList.add("animatinglogo");

  function removeClass(){
    document.getElementById('idlogo').classList.remove("animatinglogo");
  }
}
