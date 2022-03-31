//* VARIABLES
const btnAgregarUsuario = document.getElementById("btnAgregarUsuario");

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



//* BOTON AGREGAR USUARIO.
const agregarUsuario = () => {
    cantidadJugadores ++;
    switch (cantidadJugadores) {
        case 2:
            cardUsuario2.style.display = 'flex';
            usuario2.activo = true
            elegirQuienEmpieza = true;
            mensajes2.innerHTML= `<p>¡Presiona "TIRAR DADO" para elegir aleatoreamente quién empieza jugando!<br/>Luego, seguirán en orden de izquierda a derecha y/o de arriba hacia abajo.</p>`
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
            break;
    }
}



//* BOTON AGREGAR USUARIO.
btnAgregarUsuario.addEventListener('click', agregarUsuario);






