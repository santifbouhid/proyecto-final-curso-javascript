//////////* VARIABLES *\\\\\\\\\\
const avatarUsuario1 = document.getElementById('avatarUsuario1')
const btnCambiarAvatarUsuario1 = document.getElementById ('btnCambiarAvatarUsuario1');
const avatarUsuario2 = document.getElementById('avatarUsuario2')
const btnCambiarAvatarUsuario2 = document.getElementById ('btnCambiarAvatarUsuario2');
const avatarUsuario3 = document.getElementById('avatarUsuario3')
const btnCambiarAvatarUsuario3 = document.getElementById ('btnCambiarAvatarUsuario3');
const avatarUsuario4 = document.getElementById('avatarUsuario4')
const btnCambiarAvatarUsuario4 = document.getElementById ('btnCambiarAvatarUsuario4');

// const btnCerrarModal = document.getElementById('btnCerrarModal');
// const modalAvatares = document.getElementById('modalAvatares');

let nuevoAvatar1 = document.createElement ('div');
let nuevoAvatar2 = document.createElement ('div');
let nuevoAvatar3 = document.createElement ('div');
let nuevoAvatar4 = document.createElement ('div');


// const avatarItem = document.getElementsByClassName ('avatar');

const URL_AVATARS = "json/avatares.json";

let contenedorListaAvatares = document.getElementById ('contenedorListaAvatares');
const btnAceptarCambioAvatar = document.getElementById ('btnAceptarCambioAvatar');

let arrayAvarates = [] ;

// let a = document.getElementsByClassName('contenedorAvatar');
// let b = document.getElementsByClassName('avatar');

// console.log(a);

//* FUNCION PARA CALIFICAR AL AVATAR COMO "SELECCIONADO"
const seleccionarAvatar = (element, av) => {
  element.onclick = () => {
    for (let avatar of arrayAvarates){
      avatar.seleccionado=false;
    }
    av.seleccionado=true;
    console.log(arrayAvarates);
  }
  
}


//* FUNCION PARA COLOCAR LOS AVATARES EN EL MODAL.
function pintarAvatares () {
  for (let avatar of arrayAvarates){
    const element = document.createElement ('button');
    element.classList.add('contenedorAvatar');
    element.innerHTML = 
    `<img  class="avatar" src=${avatar.url}>`;
    contenedorListaAvatares.appendChild(element);
    seleccionarAvatar(element, avatar);
  }
}

//* CREO UN ARRAY LOCAL Y COLOCO LOS AVATARES EN EL MODAL.
const insertarAvatares = () => {
  fetch(URL_AVATARS)
  .then(resultado => resultado.json())
  .then(respuesta => {
    for (let avatar of respuesta){
      arrayAvarates.push (avatar);
    }
    console.log(respuesta);
    //arrayAvarates = respuesta;
    // console.log(arrayAvarates);
    // console.log(typeof(arrayAvarates));
    console.log(typeof(arrayAvarates));
    console.log(arrayAvarates[0]);
    pintarAvatares();
  })
}

//* MODIFICA EL AVATAR EN EL CARD.
const modificarAvatar = (nuevoAvatar, avatarUsuario, btnCambiarAvatarUsuario, numeroUsuario) => {
  btnAceptarCambioAvatar.onclick = () => {
    for (let avatar of arrayAvarates){
      if (avatar.usuario == numeroUsuario){
        avatar.usuario = 0;
      }
      else if ((avatar.seleccionado==true) && (avatar.usuario == 0) ){
        nuevoAvatar.remove();
        avatarUsuario.remove();
        console.log(avatar);
        //nuevoAvatar = document.createElement ('div');
        nuevoAvatar.classList.add('avatarPokemon');
        nuevoAvatar.innerHTML = 
        `<img id="avatarUsuario" class="avatarPokemon" src=${avatar.url}>`;
        btnCambiarAvatarUsuario.appendChild(nuevoAvatar);
        avatar.usuario = numeroUsuario;
        mensajes.innerHTML= `<p>¡Avatar modificado!</p>`;
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


//* CODIGO.
insertarAvatares();

// console.log(arrayAvarates[1]);