

//* MUESTRA LOS MENSAJES Y LOS BOTONES CORRESPONDIENTES.
const resetMensajes = () => {
    if (cantidadJugadores = 1){
        mensajes2.innerHTML= `<p>Tirá el dado para comenzar.</p>` 
    } else if (cantidadJugadores > 1) {
        elegirQuienEmpieza = true;
        mensajes2.innerHTML= `<p>¡Presiona "TIRAR DADO" para elegir aleatoreamente quién empieza jugando!<br/>Luego, seguirán en orden de izquierda a derecha y/o de arriba hacia abajo.</p>`
    }
    btnJuegarDeNuevo.style.display = 'none';
    btnTirarDado.style.display = 'inline';
}

//* REINICIA LOS ATRIBUTOS NECESARIOS DE LOS USUARIOS.
const resetCards = () => {
    for (let usuario of arrayUsuarios){
        usuario.turnos = 0; 
        usuario.vecesJugadas++; 
        usuario.ratio =  (usuario.turnosTotales / usuario.vecesJugadas);
        usuario.casillero = 0; 
        usuario.casilleroAlert = 'de salida'; 
        marcadorCasilleros(usuario);
    }
}

//* VUELVE A PINTAR LOS AVATARES EN EL PRIMER CASILLERO.
const resetTablero = () => {
    for (let i = 1; i <= arrayUsuarios.length; i++) {
        iniciarTablero (i)
    }
}



//* HACE TODO EL RESET DEL JUEGO.
const resetearJuego = () => {
    resetMensajes();
    resetCards();
    resetTablero();
}


//* BOTON "JUGAR DE NUEVO".
btnJuegarDeNuevo.addEventListener('click', resetearJuego);




