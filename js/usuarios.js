//* VARIABLES
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


//* CONSTRUTOR DE USUARIOS REALES.
class Usuario{
    constructor(numeroUsuario) {
        this.usuario = numeroUsuario;
        this.nombre = '';
        this.nivel  = 1;
        this.turnos = 0; //Turnos por juego.
        this.turnosTotales = 0; // Turnos sumados de todos los juegos.
        this.vecesJugadas = 0; // Las veces que jugó al juego.]
        this.ratio = 0; // Puntaje final (turnos / veces que jugo).
        this.casillero = 0; // Cuenta de los casilleros por juego.
        this.casilleroAlert = 'de salida'; // Texto que se muestra en el alert.
        // (↓ PARA EL MULTIPLAYER ↓)
        this.activo = false; // true = Está jugando en este momento // false = NO está jugando en este momento
    }
}

//* USUARIOS 
const usuario1 = new Usuario (1);

const usuario2 = new Usuario (2);

const usuario3 = new Usuario (3);

const usuario4 = new Usuario (4);


const arrayUsuarios = [] ;



//* CREAR NUEVO USUSARIO
const nuevoUsuario = (e, inputNombreUsuario, nombreUsuario, turnoUsuario, casilleroUsuario, formularioNombreUsuario, usuario) => {
    e.preventDefault();
    if (inputNombreUsuario.value != '') { 
        //* COLOCACION DEL NOMBRE EN EL CARD
        let nombre = inputNombreUsuario.value;
        nombreUsuario.innerHTML = `<p>${nombre}</p>`;
        
        //* TURNO Y CASILLERO 
        turnoUsuario.innerHTML = `<p>Turno n° ${usuario.turnos}</p>`;
        casilleroUsuario.innerHTML = `<p>Casillero ${usuario.casilleroAlert}</p>`;  

        //* OCULTA EL INPUT DEL CARD
        formularioNombreUsuario.style.display = 'none'

        //* CAMBIA EL NOMBRE DEL OBJETO
        usuario.nombre = nombre;
        usuario.activo = true;

        //*PUSH DEL USUARIO AL ARRAY
        arrayUsuarios.push(usuario);

        //* MENSAJE PARA COMENZAR EL JUEGO
        mensajes.innerHTML=`¡Bienvenido ${usuario.nombre}! Tirá el dado para comenzar el juego`;

    } else {
        mensajes.innerHTML= `<p>Por favor ingrese un nombre valido.</p>`; 
    }
};


//* NUEVO USUARIO PARA CADA UNO
const nuevoUsuario1 = (e) => {
    e.preventDefault();
    if (inputNombreUsuario1.value !== (usuario1.nombre || usuario2.nombre || usuario3.nombre || usuario4.nombre)) {
        nuevoUsuario (e, inputNombreUsuario1, nombreUsuario1, turnoUsuario1, casilleroUsuario1, formularioNombreUsuario1, usuario1);
    } else {
        mensajes.innerHTML= `<p>Ese nombre ya está en uso. Por favor elija otro.</p>`;
    }
    
};
const nuevoUsuario2 = (e) => {
    e.preventDefault();
    if (inputNombreUsuario2.value !== (usuario1.nombre || usuario2.nombre || usuario3.nombre || usuario4.nombre)) {
        nuevoUsuario (e, inputNombreUsuario2, nombreUsuario2, turnoUsuario2, casilleroUsuario2, formularioNombreUsuario2, usuario2);
    } else {
        mensajes.innerHTML= `<p>Ese nombre ya está en uso. Por favor elija otro.</p>`;
    }
    
};
const nuevoUsuario3 = (e) => {
    e.preventDefault();
    if (inputNombreUsuario3.value !== (usuario1.nombre || usuario2.nombre || usuario3.nombre || usuario4.nombre)) {
        nuevoUsuario (e, inputNombreUsuario3, nombreUsuario3, turnoUsuario3, casilleroUsuario3, formularioNombreUsuario3, usuario3);
    } else {
        mensajes.innerHTML= `<p>Ese nombre ya está en uso. Por favor elija otro.</p>`;
    }
    
};
const nuevoUsuario4 = (e) => {
    e.preventDefault();
    if (inputNombreUsuario4.value !== (usuario1.nombre || usuario2.nombre || usuario3.nombre || usuario4.nombre)) {
        nuevoUsuario (e, inputNombreUsuario4, nombreUsuario4, turnoUsuario4, casilleroUsuario4, formularioNombreUsuario4, usuario4);
    } else {
        mensajes.innerHTML= `<p>Ese nombre ya está en uso. Por favor elija otro.</p>`;
    }
    
};


//* ASIGNACIÓN DE LA FUNCIÓN DE NUEVO USUARIO AL BOTÓN "ENVIAR"

//* USUARIO 1
formularioNombreUsuario1.addEventListener('submit', nuevoUsuario1)

//* USUARIO 2
formularioNombreUsuario2.addEventListener('submit', nuevoUsuario2)

//* USUARIO 3
formularioNombreUsuario3.addEventListener('submit', nuevoUsuario3)

//* USUARIO 4
formularioNombreUsuario4.addEventListener('submit', nuevoUsuario4)