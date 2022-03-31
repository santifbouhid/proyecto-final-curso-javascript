let arrayAvatares = 
[
  {
      "id":1, 
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      "seleccionado": false,
      "usuario": 0
  },
  {
      "id":2, 
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
      "seleccionado": false,
      "usuario": 0
  },
  {
      "id":3, 
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
      "seleccionado": false,
      "usuario": 0
  },
  {
      "id":4, 
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      "seleccionado": false,
      "usuario": 0
  },
  {
      "id":5, 
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
      "seleccionado": false,
      "usuario": 0
  },
  {
      "id":6, 
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
      "seleccionado": false,
      "usuario": 0
  },
  {
      "id":7, 
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      "seleccionado": false,
      "usuario": 0
  },
  {
      "id":8, 
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
      "seleccionado": false,
      "usuario": 0
  },
  {
      "id":9, 
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
      "seleccionado": false,
      "usuario": 0
  }
];

//////////* VARIABLES *\\\\\\\\\\
const avatarUsuario1 = document.getElementById('avatarUsuario1')
const btnCambiarAvatarUsuario1 = document.getElementById ('btnCambiarAvatarUsuario1');
const avatarUsuario2 = document.getElementById('avatarUsuario2')
const btnCambiarAvatarUsuario2 = document.getElementById ('btnCambiarAvatarUsuario2');
const avatarUsuario3 = document.getElementById('avatarUsuario3')
const btnCambiarAvatarUsuario3 = document.getElementById ('btnCambiarAvatarUsuario3');
const avatarUsuario4 = document.getElementById('avatarUsuario4')
const btnCambiarAvatarUsuario4 = document.getElementById ('btnCambiarAvatarUsuario4');


let nuevoAvatar1 = document.createElement ('div');
let nuevoAvatar2 = document.createElement ('div');
let nuevoAvatar3 = document.createElement ('div');
let nuevoAvatar4 = document.createElement ('div');

let avatar1Modificado = false;
let avatar2Modificado = false;
let avatar3Modificado = false;
let avatar4Modificado = false;


let contenedorListaAvatares = document.getElementById ('contenedorListaAvatares');
const btnAceptarCambioAvatar = document.getElementById ('btnAceptarCambioAvatar');


//* FUNCION PARA CALIFICAR AL AVATAR COMO "SELECCIONADO"
const seleccionarAvatar = (element, av) => {
  element.onclick = () => {
    for (let avatar of arrayAvatares){
      avatar.seleccionado=false;
    }
    av.seleccionado=true;
  }
  
}


//* FUNCION PARA COLOCAR LOS AVATARES EN EL MODAL.
function pintarAvatares () {
  for (let avatar of arrayAvatares){
    const element = document.createElement ('button');
    element.classList.add('contenedorAvatar');
    element.innerHTML = 
    `<img  class="avatar" src=${avatar.url}>`;
    contenedorListaAvatares.appendChild(element);
    seleccionarAvatar(element, avatar);
  }
}

//* MODIFICA EL AVATAR EN EL CARD.
const modificarAvatar = (nuevoAvatar, avatarUsuario, btnCambiarAvatarUsuario, numeroUsuario) => {
  btnAceptarCambioAvatar.onclick = () => {
    for (let avatar of arrayAvatares){
      if (avatar.usuario == numeroUsuario){
        avatar.usuario = 0;
      }
      else if ((avatar.seleccionado==true) && (avatar.usuario == 0) ){
        nuevoAvatar.remove();
        avatarUsuario.remove();
        nuevoAvatar.classList.add('avatarPokemon');
        nuevoAvatar.innerHTML = 
        `<img id="avatarUsuario" class="avatarPokemon" src=${avatar.url}>`;
        btnCambiarAvatarUsuario.appendChild(nuevoAvatar);
        avatar.usuario = numeroUsuario;
        mensajes.innerHTML= `<p>¡Avatar modificado!</p>`;
        verificarAvatares(numeroUsuario);
        iniciarTablero(numeroUsuario);
        
      }
      else if (avatar.usuario != 0) {
        mensajes.innerHTML= `<p>Ese avatar no esta disponible. Por favor seleccione otro.</p>`; 
      }
    } 
  }
}



const insertarAvatares1 = () => {
  modificarAvatar(nuevoAvatar1, avatarUsuario1, btnCambiarAvatarUsuario1, 1);
}
const insertarAvatares2 = () => {
  modificarAvatar(nuevoAvatar2, avatarUsuario2, btnCambiarAvatarUsuario2, 2);
}
const insertarAvatares3 = () => {
  modificarAvatar(nuevoAvatar3, avatarUsuario3, btnCambiarAvatarUsuario3, 3);
}
const insertarAvatares4 = () => {
  modificarAvatar(nuevoAvatar4, avatarUsuario4, btnCambiarAvatarUsuario4, 4);
}


btnCambiarAvatarUsuario1.addEventListener('click', insertarAvatares1);
btnCambiarAvatarUsuario2.addEventListener('click', insertarAvatares2);
btnCambiarAvatarUsuario3.addEventListener('click', insertarAvatares3);
btnCambiarAvatarUsuario4.addEventListener('click', insertarAvatares4);


//* Indica si el usuario eligió un avatar o no.
const verificarAvatares = (numeroUsuario) => {
  switch (numeroUsuario) {
    case 1:
      avatar1Modificado = true;
      break;
    case 2:
      avatar2Modificado = true;
      break;
    case 3:
      avatar3Modificado = true;
      break;
    case 4:
      avatar4Modificado = true;
      break;
    default:
      break;
  }
}



//* CODIGO.
pintarAvatares()


  //!===========================================!\\
 //!------------AVATARES EN EL TABLERO-----------!\\
//!===============================================!\\

const casilleroSalida = document.getElementById ('casilleroSalida');
const casillero1 = document.getElementById ('casillero1');
const casillero2 = document.getElementById ('casillero2');
const casillero3 = document.getElementById ('casillero3');
const casillero4 = document.getElementById ('casillero4');
const casillero5 = document.getElementById ('casillero5');
const casillero6 = document.getElementById ('casillero6');
const casillero7 = document.getElementById ('casillero7');
const casillero8 = document.getElementById ('casillero8');
const casillero9 = document.getElementById ('casillero9');
const casilleroLlegada = document.getElementById ('casilleroLlegada');

let avatarU1 = document.createElement ('div');
let avatarU2 = document.createElement ('div');
let avatarU3 = document.createElement ('div');
let avatarU4 = document.createElement ('div');




//* PINTA LOS AVATARES EN EL PRIMER CASILLERO.
const iniciarTablero = (numUsuario) => {
  
  switch (numUsuario) {
    case 1:
      reproducirTablero (1, avatarU1, casilleroSalida);
      break;
      
    case 2:
      reproducirTablero (2, avatarU2, casilleroSalida);
      break;
  
    case 3:
      reproducirTablero (3, avatarU3, casilleroSalida);
      break;
  
    case 4:
      reproducirTablero (4, avatarU4, casilleroSalida);
      break;
  
    default:
      break;
  }
  
}





//* Indica a qué casillero se va a mover el avatar.
const indicadorCasilletoAvatar = () => {
    indicadorDeUsuarioJugando();
    switch (usuario.casillero) {
        case 0:
            casilleroAvatar = casilleroSalida;            
            break;
        case 1:
            casilleroAvatar = casillero1;
            break;
        case 2:
            casilleroAvatar = casillero2;
            break;
        case 3:
            casilleroAvatar = casillero3;
            break;
        case 4:
            casilleroAvatar = casillero4;
            break;
        case 5:
            casilleroAvatar = casillero5;
            break;
        case 6:
            casilleroAvatar = casillero6;
            break;
        case 7:
            casilleroAvatar = casillero7;
            break;
        case 8:
            casilleroAvatar = casillero8;
            break;
        case 9:
            break;
        case 10:
            casilleroAvatar = casilleroLlegada;
            break;
    }
}

const indicadorAvatarQueMueve = () => {
    indicadorDeUsuarioJugando();
    switch (turnoUsuario) {
        case 1:
            avatarQueMueve = avatarU1;
            break;
        case 2:
            avatarQueMueve = avatarU2;
            break;
        case 3:
            avatarQueMueve = avatarU3;
            break;
        case 4:
            avatarQueMueve = avatarU4;
            break;
        default:
            break;
    }
}


//* Ubica a los avatares en el tablero en el inicio de la partida
const reproducirTablero = (numUsuario, avatar, casillero) => {
    //* numUsuario = el usuario que avanza.
    //* avatar = indica el avatar de qué usuario es el que se va a mover.
    //* casillero = casillero al que avanza.
    avatar.remove();
    let avtr = arrayAvatares.find((obj) => obj.usuario == numUsuario);
    avatar.classList.add('tablero_contenedor_avatar');
    avatar.innerHTML = 
    `<img class="tablero_avatar" src=${avtr.url}>`;
    casillero.appendChild(avatar);
};


//* MUEVE AL AVATAR DENTRO DEL TABLERO
const moverAvatar = () => {
  indicadorCasilletoAvatar();
  indicadorAvatarQueMueve ();
  let numUsuario = turnoUsuario;
  let avatar = avatarQueMueve;
  let casillero = casilleroAvatar;
  reproducirTablero(numUsuario, avatar, casillero);
};
