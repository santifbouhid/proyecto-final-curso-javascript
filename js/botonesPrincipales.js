const btnTirarDado = document.getElementById("btnTirarDado");

const btnMayor = document.getElementById("btnMayor");

const btnMenor = document.getElementById("btnMenor");

const btnIgual = document.getElementById("btnIgual");

const btnJuegarDeNuevo = document.getElementById("btnJuegarDeNuevo");





const primerTirarDado = () => {
    if  ( (usuario1.nombre != '' && usuario1.activo == true) && 
        ( (usuario2.nombre != '' && usuario2.activo == true) || (usuario2.activo == false) ) &&
        ( (usuario3.nombre != '' && usuario3.activo == true) || (usuario3.activo == false) ) &&
        ( (usuario4.nombre != '' && usuario4.activo == true) || (usuario4.activo == false) ) ) {
        if (  (avatar1Modificado == true && usuario1.activo == true) && 
            ( (avatar1Modificado == true && usuario2.activo == true) || (usuario2.activo == false) ) &&
            ( (avatar1Modificado == true && usuario3.activo == true) || (usuario3.activo == false) ) &&
            ( (avatar1Modificado == true && usuario4.activo == true) || (usuario4.activo == false) )) {
            if (elegirQuienEmpieza == true) {
                quienEmpieza();
                escribirTurnoDe();
            } 
            ultimoDado = tirarDado();
            btnTirarDado.style.display = 'none';
            contenedorAgregarUsuarios.remove();
            sweetAlertTirDado();
            escribirTurnoDe();
            btnMayor.style.display = 'inline';
            btnMenor.style.display = 'inline';
            btnIgual.style.display = 'inline';
        
        } else { 
            mensajes.innerHTML= `<p>Por favor seleccione un avatar.</p>`; 
        }
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
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading()
          },
    }).then(() => {
        if (resultado == true) {
            Swal.fire({
                title: `¡Salió un ${ultimoDado}!`,
                icon: 'success',
                text: 'Presiona "OK" para continuar',
                allowOutsideClick: false,
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
                allowOutsideClick: false,
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
        allowOutsideClick: false,
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
                allowOutsideClick: false,
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
                allowOutsideClick: false,
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
        allowOutsideClick: false,
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
                allowOutsideClick: false,
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
                allowOutsideClick: false,
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


//* BOTONES *\\

//* BOTON TIRAR DADO.
btnTirarDado.addEventListener('click', primerTirarDado);

//* BOTON MAYOR.
btnMayor.addEventListener('click', resultadoMayor);

//* BOTON MENOR.
btnMenor.addEventListener('click', resultadoMenor);

//* BOTON IGUAL.
btnIgual.addEventListener('click', resultadoIgual);



