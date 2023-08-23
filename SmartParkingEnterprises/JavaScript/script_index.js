
/****************** ALERTA HECHA EN JS ********************/
/*document.getElementById("myButton1").addEventListener("click", function() {
  var mensaje = prompt("Ingrese su mensaje personalizado");
  if (mensaje) {
    alert(mensaje);
  }
});*/
/****************** ALERTA HECHA CON SWEET ALERT ********************/
function mostrar1() {
  Swal.fire({
    title: 'Cuantos puestos quiere separar',
    input: 'number',
    showCancelButton: true,
    confirmButtonText: 'Continuar',
    cancelButtonText: 'Cancelar',
    inputValidator: (value) => {
      if (!value) {
        return 'Por favor, ingrese un valor válido.';
      } else if (value > 3) {
        return 'El valor ingresado no puede ser mayor a 3.';
      }
    },
    customClass: {
      container: 'my-swal-container',
      title: 'my-swal-title',
      input: 'my-swal-input',
      confirmButton: 'my-swal-button',
      cancelButton: 'my-swal-button',
    },
  }).then((result) => {
    if (result.isConfirmed) {
      const inputValue = result.value;
      const multipliedValue = inputValue * 3000;

      // Generar código aleatorio
      const codigoAleatorio = Math.random().toString(36).substring(7);
      
      let message;
        if (inputValue === '1') {
        message = `¿Desea apartar 1 puesto por un costo de ${multipliedValue} pesos?`;
        } else {
        message = `¿Desea apartar ${inputValue} puestos por un costo de ${multipliedValue} pesos?`;
        }

      Swal.fire({
        title: message,
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        customClass: {
          container: 'my-swal-container',
          title: 'my-swal-title',
          text: 'my-swal-text',
          confirmButton: 'my-swal-button',
          cancelButton: 'my-swal-button',
        },
      }).then((confirmResult) => {
        if (confirmResult.isConfirmed) {

          let message;
          if (inputValue === '1') {
          message = `¡Felicidades! Ha separado 1 puesto`;
          } else {
          message = `¡Felicidades! Ha separado ${inputValue} puestos`;
          }

          Swal.fire({
            title: message,
            text: `Su código de usuario es: ${codigoAleatorio}`,
            confirmButtonText: 'Excelente',
            icon: 'success',
            customClass: {
              container: 'my-swal-container',
              title: 'my-swal-title',
              text: 'my-swal-text',
              confirmButton: 'my-swal-button',
            },
          });
        } else if (confirmResult.dismiss === Swal.DismissReason.cancel) {
          Swal.fire({
            title: 'Compra cancelada',
            icon: 'error',
            customClass: {
              container: 'my-swal-container',
              title: 'my-swal-title',
              confirmButton: 'my-swal-button',
            },
          });
        }
      });
    }
  });
}

function mostrar2() {
  Swal.fire({
    title: 'Cuantos puestos quiere separar',
    input: 'number',
    showCancelButton: true,
    confirmButtonText: 'Continuar',
    cancelButtonText: 'Cancelar',
    inputValidator: (value) => {
      if (!value) {
        return 'Por favor, ingrese un valor válido.';
      } else if (value > 3) {
        return 'El valor ingresado no puede ser mayor a 3.';
      }
    },
    customClass: {
      container: 'my-swal-container',
      title: 'my-swal-title',
      input: 'my-swal-input',
      confirmButton: 'my-swal-button',
      cancelButton: 'my-swal-button',
    },
  }).then((result) => {
    if (result.isConfirmed) {
      const inputValue = result.value;
      const multipliedValue = inputValue * 1500;

      // Generar código aleatorio
      const codigoAleatorio = Math.random().toString(36).substring(7);
      
      let message;
        if (inputValue === '1') {
        message = `¿Desea apartar 1 puesto por un costo de ${multipliedValue} pesos?`;
        } else {
        message = `¿Desea apartar ${inputValue} puestos por un costo de ${multipliedValue} pesos?`;
        }

      Swal.fire({
        title: message,
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        customClass: {
          container: 'my-swal-container',
          title: 'my-swal-title',
          text: 'my-swal-text',
          confirmButton: 'my-swal-button',
          cancelButton: 'my-swal-button',
        },
      }).then((confirmResult) => {
        if (confirmResult.isConfirmed) {

          let message;
          if (inputValue === '1') {
          message = `¡Felicidades! Ha separado 1 puesto`;
          } else {
          message = `¡Felicidades! Ha separado ${inputValue} puestos`;
          }

          Swal.fire({
            title: message,
            text: `Su código de usuario es: ${codigoAleatorio}`,
            confirmButtonText: 'Excelente',
            icon: 'success',
            customClass: {
              container: 'my-swal-container',
              title: 'my-swal-title',
              text: 'my-swal-text',
              confirmButton: 'my-swal-button',
            },
          });
        } else if (confirmResult.dismiss === Swal.DismissReason.cancel) {
          Swal.fire({
            title: 'Compra cancelada',
            icon: 'error',
            customClass: {
              container: 'my-swal-container',
              title: 'my-swal-title',
              confirmButton: 'my-swal-button',
            },
          });
        }
      });
    }
  });
  
}

function mostrar3() {
  Swal.fire({
    title: 'Cuantos puestos quiere separar',
    input: 'number',
    showCancelButton: true,
    confirmButtonText: 'Continuar',
    cancelButtonText: 'Cancelar',
    inputValidator: (value) => {
      if (!value) {
        return 'Por favor, ingrese un valor válido.';
      } else if (value > 3) {
        return 'El valor ingresado no puede ser mayor a 3.';
      }
    },
    customClass: {
      container: 'my-swal-container',
      title: 'my-swal-title',
      input: 'my-swal-input',
      confirmButton: 'my-swal-button',
      cancelButton: 'my-swal-button',
    },
  }).then((result) => {
    if (result.isConfirmed) {
      const inputValue = result.value;
      const multipliedValue = inputValue * 1000;

      // Generar código aleatorio
      const codigoAleatorio = Math.random().toString(36).substring(7);
      
      let message;
        if (inputValue === '1') {
        message = `¿Desea apartar 1 puesto por un costo de ${multipliedValue} pesos?`;
        } else {
        message = `¿Desea apartar ${inputValue} puestos por un costo de ${multipliedValue} pesos?`;
        }

      Swal.fire({
        title: message,
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        customClass: {
          container: 'my-swal-container',
          title: 'my-swal-title',
          text: 'my-swal-text',
          confirmButton: 'my-swal-button',
          cancelButton: 'my-swal-button',
        },
      }).then((confirmResult) => {
        if (confirmResult.isConfirmed) {

          let message;
          if (inputValue === '1') {
          message = `¡Felicidades! Ha separado 1 puesto`;
          } else {
          message = `¡Felicidades! Ha separado ${inputValue} puestos`;
          }

          Swal.fire({
            title: message,
            text: `Su código de usuario es: ${codigoAleatorio}`,
            confirmButtonText: 'Excelente',
            icon: 'success',
            customClass: {
              container: 'my-swal-container',
              title: 'my-swal-title',
              text: 'my-swal-text',
              confirmButton: 'my-swal-button',
            },
          });
        } else if (confirmResult.dismiss === Swal.DismissReason.cancel) {
          Swal.fire({
            title: 'Compra cancelada',
            icon: 'error',
            customClass: {
              container: 'my-swal-container',
              title: 'my-swal-title',
              confirmButton: 'my-swal-button',
            },
          });
        }
      });
    }
  });
  

}

const style = document.createElement('style');
    style.innerHTML = `
      
      .my-swal-title {
        font-size: 27px;
      }

      .my-swal-input {
        font-size: 20px;
      }
      .my-swal-button {
        padding: 20px 30px;
        font-size: 20px !important;
      }

      
    `;
    document.head.appendChild(style);  

/*************** ANIMACION VISIBLE EN PANTALLA ***************/

window.addEventListener('scroll', function() {
    var elemento = document.getElementById('animacion1');
    var posicion = elemento.getBoundingClientRect();/*para obtener la posición del elemento 
    en la pantalla y compararla con el tamaño de la ventana.*/                                                        
    var alturaPantalla = window.innerHeight;
  
    if (posicion.top < alturaPantalla && posicion.bottom >= 0) {
      elemento.style.animationPlayState = 'running';
    } else {
      elemento.style.animationPlayState = 'paused';
    }
});

window.addEventListener('scroll', function() {
    var elemento = document.getElementById('animacion2');
    var posicion = elemento.getBoundingClientRect();
    var alturaPantalla = window.innerHeight;
  
    if (posicion.top < alturaPantalla && posicion.bottom >= 0) {
      elemento.style.animationPlayState = 'running';
    } else {
      elemento.style.animationPlayState = 'paused';
    }
});

window.addEventListener('scroll', function() {
    var elemento = document.getElementById('animacion3');
    var posicion = elemento.getBoundingClientRect();
    var alturaPantalla = window.innerHeight;
  
    if (posicion.top < alturaPantalla && posicion.bottom >= 0) {
      elemento.style.animationPlayState = 'running';
    } else {
      elemento.style.animationPlayState = 'paused';
    }
});
  


  
  
  