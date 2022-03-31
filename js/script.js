  //!===========================================!\\
 //!-------------VARIABLES GENERALES-------------!\\
//!===============================================!\\

let ultimoDado = parseFloat();

let nuevoDado = parseFloat();

let turnoUsuario = 1;

let cantidadJugadores = 1;

let usuario ;

let casilleroAvatar ;

let avatarQueMueve ;

let elegirQuienEmpieza = false;

let mensajes = document.getElementById("mensajes");

let mensajes2 = document.getElementById("mensajes2");


//!-------------FIN VARIABLES GENERALES-------------!\\


//* Función para tirar un dado aleatorio.
const tirarDado = () => {
    return Math.ceil (Math.random() * 6);
};

//* SWEET ALERT PARA EL BOTÓN "TIRAR DADO".
const sweetAlertTirDado = () => {
    Swal.fire({
        title: 'Tirando dado...',
        timer: '1000',
        showConfirmButton: false,
        timerProgressBar: 'true',
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading()
          },
    }).then(() => {
        Swal.fire({
        title: `¡Salió un ${ultimoDado}!`,
        icon: 'success',
        text: 'Presiona "OK" para continuar',
        allowOutsideClick: false,
        confirmButtonText: 'OK'
    }).then((result) => {
        if (result.isConfirmed) {
            mensajes.innerHTML= `<p>¡Salió un ${ultimoDado}!</p>`;
        }
    })   
})
}

//* INCIDA QUÉ JUGADOR ESTÁ JUGANDO EN ESTE MOMENTO.
const indicadorDeUsuarioJugando = () => {
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
            break;
    }
    
}



//* FUNCIÓN QUE HACE AVANZAR AL USUARIO (SUMA UN TURNO Y UN CASILLERO)
const avanzaCasillero = (x) => {
    //* INDICA QUÉ USUARIO ESTÁ JUGANDO
    indicadorDeUsuarioJugando();

    //* Determina la cantidad de casilleros que avanza.
    //* Si el usuario adivina que el nuevo dado es == al dado anterior avanza 2 casilleros.
    if (x == 1) {
        usuario.casillero ++;
    } else if (x == 2){
        usuario.casillero ++;
        usuario.casillero ++;
    }

    contadorTurnos(usuario);
    marcadorCasilleros(usuario);
  
    if (usuario.casillero >= 10){
        usuario.casilleroAlert='final';
        ganaElJuego(usuario);
    } else {
        usuario.casilleroAlert = usuario.casillero;
        mensajes.innerHTML= `<p>¡Salió ${nuevoDado}!\n¡Ganaste :D! avanzas al casillero ${usuario.casilleroAlert}</p>`
    } 
    
  
    moverAvatar();
}


//* FUNCIÓN QUE HACE AVANZAR AL USUARIO (SUMA UN TURNO Y RESTA UN CASILLERO)
const retrocedeCasillero = () => {
    //* INDICA QUÉ USUARIO ESTÁ JUGANDO
    indicadorDeUsuarioJugando();
    usuario.casillero --;

    if (usuario.casillero < 1){
        usuario.casilleroAlert='de salida'
        usuario.casillero=0;
    } else {
        usuario.casilleroAlert = usuario.casillero;
    }

    mensajes.innerHTML= `<p>¡Salió ${nuevoDado}! ¡Perdiste :( ! retrocedes al casillero ${usuario.casilleroAlert}!</p>`

    
    contadorTurnos(usuario);
    marcadorCasilleros(usuario);
    moverAvatar();
};

//* VA LLEVANDO LA CUENTA DE LOS TURNOS.
//* INDICA A QUIÉN LE TOCA EL TURNO.
const siguienteTurno = () => {
    if (turnoUsuario == 0 ) {
        turnoUsuario++;
        escribirTurnoDe();
    }else if (turnoUsuario == 1 && usuario2.activo == true) {
        turnoUsuario++;
        escribirTurnoDe();
    } else if (turnoUsuario == 2 && usuario3.activo == true) {
        turnoUsuario++;
        escribirTurnoDe();
    } else if (turnoUsuario == 3 && usuario4.activo == true) {
        turnoUsuario++;
        escribirTurnoDe();
    } else if (turnoUsuario == 4 && usuario2.activo == true) {
        turnoUsuario = 1;
        escribirTurnoDe();
    } else {
        turnoUsuario = 1;
        escribirTurnoDe();
   }
}

//* Funcion que cuenta los turnos totales y turnos por juego.
const contadorTurnos = (usuario) =>{
    usuario.turnosTotales ++;
    usuario.turnos ++;
}

//* ESCRIBE EN EL DOM A QUIÉN LE TOCA EL TURNO.
const escribirTurnoDe = () => {
    switch (turnoUsuario) {
        case 1:
            mensajes2.innerHTML= `<p>¡Turno de ${usuario1.nombre}! <br> ¿El próximo tiro será menor, igual o mayor?</p>`
            break;
        case 2:
            mensajes2.innerHTML= `<p>¡Turno de ${usuario2.nombre}! <br> ¿El próximo tiro será menor, igual o mayor?</p>`
            break;
        case 3:
            mensajes2.innerHTML= `<p>¡Turno de ${usuario3.nombre}! <br> ¿El próximo tiro será menor, igual o mayor?</p>`
            break;
        case 4:
            mensajes2.innerHTML= `<p>¡Turno de ${usuario4.nombre}! <br> ¿El próximo tiro será menor, igual o mayor?</p>`
            break;
        default:
            break;
    }
}

//* INDICA A QUIÉN LE TOCA EL PRIMER TURNO EN CASO DE HABER MÁS DE UN JUGADOR.
const quienEmpieza = () => {
    turnoUsuario = Math.ceil (Math.random() * cantidadJugadores);
    elegirQuienEmpieza = false;
}


//* Funcion que se ejecuta cuando el usuario gana.
const ganaElJuego = (usuario) => {
    usuario.score = (usuario.turnosTotales / usuario.vecesJugadas); 
    alertGanarJuego(usuario);
    btnMayor.style.display = 'none';
    btnMenor.style.display = 'none';
    btnIgual.style.display = 'none';
    btnJuegarDeNuevo.style.display = 'inline';
    btnModalRanking.style.display = 'inline';
    mensajes.innerHTML= `<p>¡GANÓ ${usuario.nombre.toUpperCase()}!</p>`
    mensajes2.innerHTML= `<p>¿Volver a jugar?</p>`
}

//* ALERT PARA EL GANADOR.
const alertGanarJuego = (usuario) => {
    Swal.fire({
        title: `¡${usuario.nombre} es el ganador!`,
        text: `Logró llegar a la meta en ${usuario.turnos} turnos ¡Felicitaciones!`,
        icon: 'success',
        confirmButtonText: '¡Vamos!',
        showClass: {
          popup: 'animate__animated animate__bounceIn' 
        },
        hideClass: {
          popup: 'animate__animated animate__zoomOutDown'
        }
    })
}





































