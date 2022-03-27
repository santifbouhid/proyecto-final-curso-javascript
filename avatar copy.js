//////////* VARIABLES *\\\\\\\\\\
const avatarUsuario1 = document.getElementById('avatarUsuario1')
const btnCambiarAvatarUsuario1 = document.getElementById ('btnCambiarAvatarUsuario1');
const avatarUsuario2 = document.getElementById('avatarUsuario2')
const btnCambiarAvatarUsuario2 = document.getElementById ('btnCambiarAvatarUsuario2');
const avatarUsuario3 = document.getElementById('avatarUsuario3')
const btnCambiarAvatarUsuario3 = document.getElementById ('btnCambiarAvatarUsuario3');
const avatarUsuario4 = document.getElementById('avatarUsuario4')
const btnCambiarAvatarUsuario4 = document.getElementById ('btnCambiarAvatarUsuario4');

const btnCerrarModal = document.getElementById('btnCerrarModal');
const modalAvatares = document.getElementById('modalAvatares');



let nuevoAvatar1 = document.createElement ('div');
let nuevoAvatar2 = document.createElement ('div');
let nuevoAvatar3 = document.createElement ('div');
let nuevoAvatar4 = document.createElement ('div');


const avatarItem = document.getElementsByClassName ('avatar');

const URL_AVATARS = "json/avatares.json";

let contenedorListaAvatares = document.getElementById ('contenedorListaAvatares');
const btnAceptarCambioAvatar = document.getElementById ('btnAceptarCambioAvatar');

let arrayAvarates ;


const insertarAvatares = (nuevoAvatar,avatarUsuario, btnCambiarAvatarUsuario, numeroUsuario) => {
  fetch(URL_AVATARS)
  .then(resultado => resultado.json())
  .then(respuesta => {
    
    console.log(respuesta);
    arrayAvarates = respuesta;
    // console.log(arrayAvarates);

    // console.log(typeof(arrayAvarates));
    console.log(typeof(arrayAvarates));


    for (let avatar of arrayAvarates){
      const element = document.createElement ('button');
      element.classList.add('contenedorAvatar');
      element.innerHTML = 
      `<img  class="avatar" src=${avatar.url}>`;
      contenedorListaAvatares.appendChild(element);


    
      element.onclick = () => {
        for (let avatar of arrayAvarates){
          avatar.seleccionado=false;
        }
        avatar.seleccionado=true;
        console.log(avatar);
        console.log(arrayAvarates);
        console.log(avatar.usuario);
        btnAceptarCambioAvatar.onclick = () => {
          for (let avatar of arrayAvarates){
            if (avatar.usuario == numeroUsuario){
              avatar.usuario = 0;
            }
          }
          if (avatar.seleccionado==true) {
            nuevoAvatar.remove();
            avatarUsuario.remove();
            console.log(avatar);
            //nuevoAvatar = document.createElement ('div');
            nuevoAvatar.classList.add('avatarPokemon');
            nuevoAvatar.innerHTML = 
            `<img id="avatarUsuario" class="avatarPokemon" src=${avatar.url}>`;
            btnCambiarAvatarUsuario.appendChild(nuevoAvatar);
            avatar.usuario=numeroUsuario;
            
          }
          borrarListaAvatares();
        }

      }
      
    }
    
  }) 
  
}







console.log(arrayAvarates);

function pintarAvatares (array) {
  for (let avatar of array){
    const element = document.createElement ('button');
    element.classList.add('contenedorAvatar');
    element.innerHTML = 
    `<img  class="avatar" src=${avatar.url}>`;
    contenedorListaAvatares.appendChild(element);
  }
}

const borrarListaAvatares = () => {
  let a = document.getElementsByClassName('contenedorAvatar');
  console.log(a);
  for (let i = a.length - 1; i >= 0; --i) {
    a[i].remove();
  }         
}






const insertarAvatares1 = () => {
  insertarAvatares(nuevoAvatar1, avatarUsuario1, btnCambiarAvatarUsuario1, 1);
}
const insertarAvatares2 = () => {
  insertarAvatares(nuevoAvatar2, avatarUsuario2, btnCambiarAvatarUsuario2, 2);
}
const insertarAvatares3 = () => {
  insertarAvatares(nuevoAvatar3, avatarUsuario3, btnCambiarAvatarUsuario3, 3);
}
const insertarAvatares4 = () => {
  insertarAvatares(nuevoAvatar4, avatarUsuario4, btnCambiarAvatarUsuario4, 4);
}




btnCambiarAvatarUsuario1.addEventListener('click', insertarAvatares1);
btnCambiarAvatarUsuario2.addEventListener('click', insertarAvatares2);
btnCambiarAvatarUsuario3.addEventListener('click', insertarAvatares3);
btnCambiarAvatarUsuario4.addEventListener('click', insertarAvatares4);

btnCerrarModal.addEventListener('click', borrarListaAvatares);




