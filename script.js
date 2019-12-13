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
    // idCover.classList.add("slide_cover");

    loader = 1; //le loader est ouvert
  } else { //SInon on le ferme
    idLoader.classList.remove("loader-is-open");
    idLoader.classList.add("loader-is-closed");
    // idCover.classList.remove("slide_cover");

    loader = 0; //le loader est fermé
  }
}



// var animation = 0;
//
// function displaceError(event){
//
//     idError.classList.remove("animationError");
//     var y = event.clientY;
//     var error = document.getElementById("error");
//     var displacement;
//     y-=500;
//
//     if (y>0) {
//       displacement = Math.abs(y)
//       displacement *= 0.15;
//       error.style.transform = "rotate3D(1,0,0.4,"+displacement+"deg)";
//       //le cursor est vers le bas
//     }
//     else {
//       displacement = Math.abs(y)
//       displacement *= -0.15;
//       error.style.transform = "rotate3D(1,0,0.4,"+displacement+"deg)";
//       //le curseur est vers le haut
//     }
// }


function changeDialogue(){

  var text=0;
  var dialoguebox = document.getElementById('iddialogue');
  var id = setInterval(frame, 5000);

  function frame(){

    if (text=0){
      dialogbox.classList.remove("uDisappear");
    }

  }

}
