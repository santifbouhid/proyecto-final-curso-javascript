  //!===========================================!\\
 //!------------------VARIABLES------------------!\\
//!===============================================!\\

let ultimoDado = parseFloat();

let nuevoDado = parseFloat();

let turnoUsuario = 1;

let cantidadJugadores = 1

//* GET ELEMENT BY ID

//* BOTONES
let btnTirarDado = document.getElementById("btnTirarDado");

const btnMayor = document.getElementById("btnMayor");

const btnMenor = document.getElementById("btnMenor");

const btnIgual = document.getElementById("btnIgual");

const btnAgregarUsuario = document.getElementById("btnAgregarUsuario");

const btnInputNombreUsuario1 = document.getElementById("btnInputNombreUsuario1");

//* VARIABLES USUARIOS

const nombreUsuario1 = document.getElementById("nombreUsuario1");

const nombreUsuario2 = document.getElementById("nombreUsuario2");

const nombreUsuario3 = document.getElementById("nombreUsuario3");

const nombreUsuario4 = document.getElementById("nombreUsuario4");

const inputNombreUsuario1 = document.getElementById("inputNombreUsuario1");

const inputNombreUsuario2 = document.getElementById("inputNombreUsuario2");

const inputNombreUsuario3 = document.getElementById("inputNombreUsuario3");

const inputNombreUsuario4 = document.getElementById("inputNombreUsuario4");

const formularioNombreUsuario1 = document.getElementById("formularioNombreUsuario1");

const formularioNombreUsuario2 = document.getElementById("formularioNombreUsuario2");

const formularioNombreUsuario3 = document.getElementById("formularioNombreUsuario3");

const formularioNombreUsuario4 = document.getElementById("formularioNombreUsuario4");

const contenedorAgregarUsuarios = document.getElementById("contenedorAgregarUsuarios");

const cardUsuario2 = document.getElementById("cardUsuario2");

const cardUsuario3 = document.getElementById("cardUsuario3");

const cardUsuario4 = document.getElementById("cardUsuario4");

let turnoUsuario1 = document.getElementById("turnoUsuario1");

let casilleroUsuario1 = document.getElementById("casilleroUsuario1");

let turnoUsuario2 = document.getElementById("turnoUsuario2");

let casilleroUsuario2 = document.getElementById("casilleroUsuario2");

let turnoUsuario3 = document.getElementById("turnoUsuario3");

let casilleroUsuario3 = document.getElementById("casilleroUsuario3");

let turnoUsuario4 = document.getElementById("turnoUsuario4");

let casilleroUsuario4 = document.getElementById("casilleroUsuario4");

let divBotones = document.getElementById("divBotones");

let mensajes = document.getElementById("mensajes");

const textoTurnoDe = document.getElementById("textoTurnoDe");


//!------------------FIN VARIABLES------------------!\\


  //!===========================================!\\
 //!------------------FUNCIONES------------------!\\
//!===============================================!\\

//* BOTON AGREGAR USUARIO.
const agregarUsuario = () => {
    cantidadJugadores ++;
    switch (cantidadJugadores) {
        case 2:
            cardUsuario2.style.display = 'flex';
            usuario2.activo = true
            break;
        case 3:
            cardUsuario3.style.display = 'flex';
            usuario3.activo = true
            break;
        case 4:
            cardUsuario4.style.display = 'flex';
            usuario4.activo = true
            contenedorAgregarUsuarios.style.display = 'none';
            break;
    }
}

// const formularioNombreUsuarios = () => {
    
// }

//* Función para tirar un dado aleatorio.
const tirarDado = () => {
    return Math.ceil (Math.random() * 6);
    };

//* Función para tirar el primer dado del juego. BOTON TIRAR DADO.
// const primerTirarDado = () => {
//     if (usuario1.nombre != '') {
//         ultimoDado = tirarDado();
//         btnTirarDado.remove();
//         mensajes.innerHTML= `<p>¡Tiraste un ${ultimoDado}! ¿El próximo tiro será menor, igual o mayor?</p>`
//         turnoUsuario1.innerHTML = `<p>Turno n° ${usuario1.turnos}</p>`;
//         casilleroUsuario1.innerHTML = `<p>Casillero ${usuario1.casilleroAlert}</p>`;    
//         btnMayor.style.display = 'inline';
//         btnMenor.style.display = 'inline';
//         btnIgual.style.display = 'inline';
//     } else {
//         mensajes.innerHTML= `<p>Por favor ingrese un nombre valido.</p>`
//     }
// };

const sweetAlertTirDado = () => {
    Swal.fire({
        title: 'Tirando dado...',
        timer: '1000',
        showConfirmButton: false,
        timerProgressBar: 'true',
        didOpen: () => {
            Swal.showLoading()
          },
    }).then(() => {
        Swal.fire({
        title: `¡Salió un ${ultimoDado}!`,
        icon: 'success',
        text: 'Presiona "OK" para continuar',
        confirmButtonText: 'OK'
    }).then((result) => {
        if (result.isConfirmed) {
            mensajes.innerHTML= `<p>¡Salió un ${ultimoDado}! ¿El próximo tiro será menor, igual o mayor?</p>`;
        }
    })   
})
}


 

const primerTirarDado = () => {
    if  ( (usuario1.nombre != '' && usuario1.activo == true) && 
        ( (usuario2.nombre != '' && usuario2.activo == true) || (usuario2.activo == false) ) &&
        ( (usuario3.nombre != '' && usuario3.activo == true) || (usuario3.activo == false) ) &&
        ( (usuario4.nombre != '' && usuario4.activo == true) || (usuario4.activo == false) ) ) {
        ultimoDado = tirarDado();
        btnTirarDado.remove();
        contenedorAgregarUsuarios.remove();
        sweetAlertTirDado();
        // escribirTurnoDe();
        btnMayor.style.display = 'inline';
        btnMenor.style.display = 'inline';
        btnIgual.style.display = 'inline'; 
    } else  {
        mensajes.innerHTML= `<p>Por favor ingrese un nombre valido.</p>`; 
    };
    
};


//* RESULTADOS DE LOS DIFERENTES BOTONES *\\
//* BOTON "MAYOR"
const resultadoMayor = () => {
    let resultado;
    nuevoDado = tirarDado();
    if (nuevoDado > ultimoDado) {
        resultado = true;
    } else {
        resultado= false;
    };
    Swal.fire({
        title: 'Tirando dado...',
        timer: '1000',
        showConfirmButton: false,
        timerProgressBar: 'true',
        didOpen: () => {
            Swal.showLoading()
          },
    }).then(() => {
        if (resultado == true) {
            Swal.fire({
                title: `¡Salió un ${ultimoDado}!`,
                icon: 'success',
                text: 'Presiona "OK" para continuar',
                confirmButtonText: 'OK'
            }) .then((result) => {
                if (result.isConfirmed) {
                    avanzaCasillero(1);
                    siguienteTurno();
                }
            }) 
        } else {
            Swal.fire({
                title: `¡Salió un ${ultimoDado}!`,
                icon: 'error',
                text: 'Presiona "OK" para continuar',
                confirmButtonText: 'OK'
            })  .then((result) => {
                    if (result.isConfirmed) {
                        retrocedeCasillero(); 
                        siguienteTurno();
                    }
            }) 
        }
          
    });
    ultimoDado = nuevoDado;
}

//* BOTON "MENOR"
const resultadoMenor = () => {
    nuevoDado = tirarDado();
    let resultado;
    if (nuevoDado < ultimoDado) {
        resultado = true;
    } else {
        resultado= false;
    };
    Swal.fire({
        title: 'Tirando dado...',
        timer: '1000',
        showConfirmButton: false,
        timerProgressBar: 'true',
        didOpen: () => {
            Swal.showLoading()
          },
    }).then(() => {
        if (resultado == true) {
            Swal.fire({
                title: `¡Salió un ${ultimoDado}!`,
                icon: 'success',
                text: 'Presiona "OK" para continuar',
                confirmButtonText: 'OK'
            }) .then((result) => {
                if (result.isConfirmed) {
                    avanzaCasillero(1);
                    siguienteTurno();
                }
            }) 
        } else {
            Swal.fire({
                title: `¡Salió un ${ultimoDado}!`,
                icon: 'error',
                text: 'Presiona "OK" para continuar',
                confirmButtonText: 'OK'
            })  .then((result) => {
                    if (result.isConfirmed) {
                        retrocedeCasillero(); 
                        siguienteTurno();
                    }
            }) 
        }
          
    });
    ultimoDado = nuevoDado;
}


//* BOTON "IGUAL"
const resultadoIgual = () => {
    nuevoDado = tirarDado();
    let resultado;
    if (nuevoDado == ultimoDado) {
        resultado = true;
    } else {
        resultado= false;
    };
    Swal.fire({
        title: 'Tirando dado...',
        timer: '1000',
        showConfirmButton: false,
        timerProgressBar: 'true',
        didOpen: () => {
            Swal.showLoading()
          },
    }).then(() => {
        if (resultado == true) {
            Swal.fire({
                title: `¡Salió un ${ultimoDado}!`,
                icon: 'success',
                text: 'Presiona "OK" para continuar',
                confirmButtonText: 'OK'
            }) .then((result) => {
                if (result.isConfirmed) {
                    avanzaCasillero(2);
                    siguienteTurno();
                }
            }) 
        } else {
            Swal.fire({
                title: `¡Salió un ${ultimoDado}!`,
                icon: 'error',
                text: 'Presiona "OK" para continuar',
                confirmButtonText: 'OK'
            })  .then((result) => {
                    if (result.isConfirmed) {
                        retrocedeCasillero(); 
                        siguienteTurno();
                    }
            }) 
        }
          
    });
    ultimoDado = nuevoDado;
}



//* Funcion con los pasos necesarios para cuando el usuario gana.
const avanzaCasillero = (x) => {
    let usuario ;
    switch (turnoUsuario) {
        case 1:
            usuario = usuario1;
            break;
        case 2:
            usuario = usuario2;
            break;
        case 3: 
            usuario = usuario3;
            break;
        case 4:
            usuario = usuario4;
            break;
        default:
            console.log('ERROR');
            break;
    }

    //* Determina la cantidad de casilleros que avanza.
    //* Si el usuario adivina que el nuevo dado es == al dado anterior avanza 2 casilleros.
    if (x == 1) {
        usuario.casillero ++;
    } else if (x == 2){
        usuario.casillero ++;
        usuario.casillero ++;
    }
    
    
    console.log(usuario);
    
    if (usuario.casillero == 10){
        usuario.casilleroAlert='final';
        mensajes.innerHTML= `<p>¡Salió ${nuevoDado}!\n¡Ganaste :D! avanzas al casillero ${usuario1.casilleroAlert}</p>`
        //casilleroUsuario1.innerHTML = `<p>Casillero ${usuario1.casilleroAlert}</p>`; 
        ganaElJuego(usuario);
    } else {
        usuario.casilleroAlert = usuario.casillero;
        mensajes.innerHTML= `<p>¡Salió ${nuevoDado}!\n¡Ganaste :D! avanzas al casillero ${usuario.casilleroAlert} ¿El próximo tiro será menor, igual o mayor?</p>`
        //casilleroUsuario1.innerHTML = `<p>Casillero ${usuario.casilleroAlert}</p>`; 
    } 

    
    contadorTurnos(usuario);
    marcadorCasilleros(usuario);
    console.log(usuario.casilleroAlert);
    console.log(usuario.casillero);
}


//* Funcion con los pasos necesarios para cuando el usuario pierde.
const retrocedeCasillero = () => {
    let usuario ;
    switch (turnoUsuario) {
        case 1:
            usuario = usuario1;
            break;
        case 2:
            usuario = usuario2;
            break;
        case 3: 
            usuario = usuario3;
            break;
        case 4:
            usuario = usuario4;
            break;
        default:
            console.log('ERROR');
            break;
    }
    usuario.casillero --;
    console.log(usuario);

    if (usuario.casillero < 1){
        usuario.casilleroAlert='de salida'
        usuario.casillero=0;
        mensajes.innerHTML= `<p>¡Salió ${nuevoDado}!\n¡Perdiste :( ! retrocedes al casillero ${usuario.casilleroAlert} ¿El próximo tiro será menor, igual o mayor?</p>`
        //casilleroUsuario1.innerHTML = `<p>Casillero ${usuario.casilleroAlert}</p>`; 
    } else {
        usuario.casilleroAlert = usuario.casillero;
        mensajes.innerHTML= `<p>¡Salió ${nuevoDado}!\n¡Perdiste :( ! retrocedes al casillero ${usuario.casilleroAlert}! ¿El próximo tiro será menor, igual o mayor?</p>`
    }
    casilleroUsuario1.innerHTML = `<p>Casillero ${usuario.casilleroAlert}</p>`; 
    

    
    contadorTurnos(usuario);
    marcadorCasilleros(usuario);
    console.log(usuario.casilleroAlert);
    console.log(usuario.casillero);
};



const siguienteTurno = () => {
    if (turnoUsuario == 0 ) {
        turnoUsuario++;
        console.log(`turno: ${turnoUsuario}`);
    }else if (turnoUsuario == 1 && usuario2.activo == true) {
        turnoUsuario++;
        escribirTurnoDe(usuario2.nombre)
        console.log(`turno: ${turnoUsuario}`);
    } else if (turnoUsuario == 2 && usuario3.activo == true) {
        turnoUsuario++;
        console.log(`turno: ${turnoUsuario}`);
    } else if (turnoUsuario == 3 && usuario4.activo == true) {
        turnoUsuario++;
        console.log(`turno: ${turnoUsuario}`);
    } else if (turnoUsuario == 4 && usuario2.activo == true) {
        turnoUsuario = 1;
        console.log(`turno: ${turnoUsuario}`);
    } else {
        turnoUsuario = 1;
        console.log(`turno: ${turnoUsuario}`);
    }
    console.log(turnoUsuario);
}

/*
const escribirTurnoDe = () => {
    const texto = document.createElement ('p');
    texto.classList.add('mensajes');
    let turnoDe;
    switch (turnoUsuario) {
    case 1:
        turnoDe = usuario1.nombre;
        break;
    case 2:
        turnoDe = usuario2.nombre;
        break;
    case 3: 
    turnoDe = usuario3.nombre;
        break;
    case 4:
        turnoDe = usuario4.nombre;
        break;
    default:
        console.log('ERROR');
        break;
    }
    texto.innerHTML = 
        `Turno de ${turnoDe}`;
    textoTurnoDe.appendChild(texto);

}
*/



//* Funcion que se ejecuta cuando el usuario gana.
const ganaElJuego = (usuario) => {
    usuario.score = +(usuario.turnosTotales / usuario.vecesJugadas); 
    alert (`¡¡GANASTE EL JUEGO!! \n Puntaje final: ${usuario.turnos} turnos.`);
}

//* Actualizar los casilleros en el Card del Usuario.
const marcadorCasilleros = (usuario) => {
    switch (usuario) {
        case usuario1:
            casilleroUsuario1.innerHTML = `<p>Casillero ${usuario1.casilleroAlert}</p>`;
            turnoUsuario1.innerHTML = `<p>Turno n° ${usuario1.turnos}</p>`;
            break;
        case usuario2:
            casilleroUsuario2.innerHTML = `<p>Casillero ${usuario2.casilleroAlert}</p>`;
            turnoUsuario2.innerHTML = `<p>Turno n° ${usuario2.turnos}</p>`;
            break;
        case usuario3: 
            casilleroUsuario3.innerHTML = `<p>Casillero ${usuario3.casilleroAlert}</p>`;
            turnoUsuario3.innerHTML = `<p>Turno n° ${usuario3.turnos}</p>`;
            break;
        case usuario4:
            casilleroUsuario4.innerHTML = `<p>Casillero ${usuario4.casilleroAlert}</p>`;
            turnoUsuario4.innerHTML = `<p>Turno n° ${usuario4.turnos}</p>`;
            break;
        default:
            console.log('ERROR');
            break;
    }
}


//* Funcion que cuenta los turnos totales y turnos por juego.
const contadorTurnos = (usuario) =>{
    usuario.turnosTotales ++;
    usuario.turnos ++;
}

//!------------------FIN FUNCIONES------------------!\\


  //!===========================================!\\
 //!--------------------OBJETOS------------------!\\
//!===============================================!\\

//! ---CONSTRUCTORES--- !\\
//* CONSTRUTOR DE USUARIOS REALES.
class Usuario{
    constructor(numeroUsuario) {
        this.usuario = numeroUsuario;
        this.nombre = '';
        this.nivel  = 1;
        this.turnos = 0; //Turnos por juego.
        this.turnosTotales = 0; // Turnos sumados de todos los juegos.
        this.vecesJugadas = 0; // Las veces que jugó al juego.]
        this.score = 0; // Puntaje final (turnos / veces que jugo).
        this.casillero = 0; // Cuenta de los casilleros por juego.
        this.casilleroAlert = 'de salida'; // Texto que se muestra en el alert.
        // (↓ PARA EL MULTIPLAYER ↓)
        this.activo = false; // true = Está jugando en este momento // false = NO está jugando en este momento
    }
}


//* CONSTRUTOR DE USUARIOS BOT.
class UsuarioBot{
    constructor(nombre, nivel, turnosTotales, vecesJugadas) {
        this.nombre = nombre;
        this.nivel  = nivel; 
        this.turnos = 0; //Turnos por juego.
        this.turnosTotales = turnosTotales; // Turnos sumados de todos los juegos.
        this.vecesJugadas = vecesJugadas; // Las veces que jugó al juego.]
        this.score = +(this.turnosTotales / this.vecesJugadas); // Puntaje final (turnos / veces que jugo).
        this.casillero = 0; // Cuenta de los casilleros por juego.
        this.casilleroAlert = 'de salida'; // Texto que se muestra en el alert.
    }
}

//! ---ASIGNACIONES--- !\\

//* USUARIOS REALES
const usuario1 = new Usuario (1);

const usuario2 = new Usuario (2);

const usuario3 = new Usuario (3);

const usuario4 = new Usuario (4);

//* BOTS
const usuarioBot1 = new UsuarioBot ('Diego', 1, 20, 1);

const usuarioBot2 = new UsuarioBot ('Lionel', 1, 30, 3);

const usuarioBot3 = new UsuarioBot ('Armando', 1, 86, 3);

const usuarioBot4 = new UsuarioBot ('Juan Roman', 1, 30, 2);

//!------------------FIN OBJETOS------------------!\\


  //!===========================================!\\
 //!---------------------ARRAYS------------------!\\
//!===============================================!\\

const arrayUsuarios = [] ;

const arrayUsuariosBot = [] ;

//const arrayRanking = arrayUsuariosBot.concat(arrayUsuarios);

//! ---PUSH ARRAYS--- !\\

arrayUsuariosBot.push (usuarioBot1);

arrayUsuariosBot.push (usuarioBot2);

arrayUsuariosBot.push (usuarioBot3);

arrayUsuariosBot.push (usuarioBot4);

//!------------------FIN ARRAYS------------------!\\


  //!===========================================!\\
 //!--------------------EVENTOS------------------!\\
//!===============================================!\\

//* BOTON AGREGAR USUARIO.
btnAgregarUsuario.addEventListener('click', agregarUsuario);

//* BOTON TIRAR DADO.
btnTirarDado.addEventListener('click', primerTirarDado);

//* ASIGNACION DE NOMBRE DEL USUARIO *\\

//* USUARIO 1
formularioNombreUsuario1.addEventListener('submit', (e) => {
    e.preventDefault();
    if (inputNombreUsuario1.value != '') {
        //cantidadJugadores ++;

        //* COLOCACION DEL NOMBRE EN EL CARD
        let nombre = inputNombreUsuario1.value;
        nombreUsuario1.innerHTML = `<p>${nombre}</p>`;
        
        //* TURNO Y CASILLERO 
        turnoUsuario1.innerHTML = `<p>Turno n° ${usuario1.turnos}</p>`;
        casilleroUsuario1.innerHTML = `<p>Casillero ${usuario1.casilleroAlert}</p>`;  

        //* OCULTA EL INPUT DEL CARD
        formularioNombreUsuario1.style.display = 'none'

        //* CAMBIA EL NOMBRE DEL OBJETO
        usuario1.nombre = nombre;
        usuario1.activo = true;

        //*PUSH DEL USUARIO AL ARRAY
        arrayUsuarios.push(usuario1);

        //* MENSAJE PARA COMENZAR EL JUEGO
        mensajes.innerHTML=`¡Bienvenido ${usuario1.nombre}! Tirá el dado para comenzar el juego`;

        //sessionStorage.setItem("arrayUsuarios", JSON.stringify(arrayUsuarios));
        console.log(arrayUsuarios);
    } else {
        mensajes.innerHTML= `<p>Por favor ingrese un nombre valido.</p>`; 
    }
})

//* USUARIO 2
formularioNombreUsuario2.addEventListener('submit', (e) => {
    e.preventDefault();
    if (inputNombreUsuario2.value != '') {
        cantidadJugadores ++;

        //* COLOCACION DEL NOMBRE EN EL CARD
        let nombre = inputNombreUsuario2.value;
        nombreUsuario2.innerHTML = `<p>${nombre}</p>`;
        
        //* TURNO Y CASILLERO 
        turnoUsuario2.innerHTML = `<p>Turno n° ${usuario2.turnos}</p>`;
        casilleroUsuario2.innerHTML = `<p>Casillero ${usuario2.casilleroAlert}</p>`;  

        //* OCULTA EL INPUT DEL CARD
        formularioNombreUsuario2.style.display = 'none'

        //* CAMBIA EL NOMBRE DEL OBJETO
        usuario2.nombre = nombre;
        usuario2.activo = true;

        //*PUSH DEL USUARIO AL ARRAY
        arrayUsuarios.push(usuario2);

        //* MENSAJE PARA COMENZAR EL JUEGO
        mensajes.innerHTML=`¡Bienvenido ${usuario2.nombre}! Tirá el dado para comenzar el juego`;

        //sessionStorage.setItem("arrayUsuarios", JSON.stringify(arrayUsuarios));
        console.log(arrayUsuarios);
    } else {
        mensajes.innerHTML= `<p>Por favor ingrese un nombre valido.</p>`; 
    }
})

//* USUARIO 3
formularioNombreUsuario3.addEventListener('submit', (e) => {
    e.preventDefault();
    if (inputNombreUsuario3.value != '') {
        cantidadJugadores ++;

        //* COLOCACION DEL NOMBRE EN EL CARD
        let nombre = inputNombreUsuario3.value;
        nombreUsuario3.innerHTML = `<p>${nombre}</p>`;
        
        //* TURNO Y CASILLERO 
        turnoUsuario3.innerHTML = `<p>Turno n° ${usuario3.turnos}</p>`;
        casilleroUsuario3.innerHTML = `<p>Casillero ${usuario3.casilleroAlert}</p>`;  

        //* OCULTA EL INPUT DEL CARD
        formularioNombreUsuario3.style.display = 'none'

        //* CAMBIA EL NOMBRE DEL OBJETO
        usuario3.nombre = nombre;
        usuario3.activo = true;

        //*PUSH DEL USUARIO AL ARRAY
        arrayUsuarios.push(usuario3);

        //* MENSAJE PARA COMENZAR EL JUEGO
        mensajes.innerHTML=`¡Bienvenido ${usuario3.nombre}! Tirá el dado para comenzar el juego`;

        //sessionStorage.setItem("arrayUsuarios", JSON.stringify(arrayUsuarios));
        console.log(arrayUsuarios);
    } else {
        mensajes.innerHTML= `<p>Por favor ingrese un nombre valido.</p>`; 
    }
})

//* USUARIO 4
formularioNombreUsuario4.addEventListener('submit', (e) => {
    e.preventDefault();
    if (inputNombreUsuario4.value != '') {
        cantidadJugadores ++;

        //* COLOCACION DEL NOMBRE EN EL CARD
        let nombre = inputNombreUsuario4.value;
        nombreUsuario4.innerHTML = `<p>${nombre}</p>`;
        
        //* TURNO Y CASILLERO 
        turnoUsuario4.innerHTML = `<p>Turno n° ${usuario4.turnos}</p>`;
        casilleroUsuario4.innerHTML = `<p>Casillero ${usuario4.casilleroAlert}</p>`;  

        //* OCULTA EL INPUT DEL CARD
        formularioNombreUsuario4.style.display = 'none'

        //* CAMBIA EL NOMBRE DEL OBJETO
        usuario4.nombre = nombre;
        usuario4.activo = true;

        //*PUSH DEL USUARIO AL ARRAY
        arrayUsuarios.push(usuario4);

        //* MENSAJE PARA COMENZAR EL JUEGO
        mensajes.innerHTML=`¡Bienvenido ${usuario4.nombre}! Tirá el dado para comenzar el juego`;

        //sessionStorage.setItem("arrayUsuarios", JSON.stringify(arrayUsuarios));
        console.log(arrayUsuarios);
    } else {
        mensajes.innerHTML= `<p>Por favor ingrese un nombre valido.</p>`; 
    }
})


//* BOTONES *\\

//* BOTON MAYOR.
btnMayor.addEventListener('click', resultadoMayor);

//* BOTON MENOR.
btnMenor.addEventListener('click', resultadoMenor);

//* BOTON IGUAL.
btnIgual.addEventListener('click', resultadoIgual);

//!------------------FIN EVENTOS------------------!\\


  //!===========================================!\\
 //!--------------------STORAGE------------------!\\
//!===============================================!\\

localStorage.setItem("arrayUsuariosBot", JSON.stringify(arrayUsuariosBot));

//!-------------------FIN STORAGE------------------!\\ 