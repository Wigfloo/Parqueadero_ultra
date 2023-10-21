const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});
loginLink.addEventListener("click", () => {
wrapper.classList.remove("active");
});

/* ESTA FUNCIÓN SE EJECUTA CUANDO SE INICIA SESIÓN */
function login() {
  var nombre1 = "se envió el nombre1";
  console.log(nombre1);
  // formulario1.reset();
  //return false;

  /* esto lo agregó Ricardo */
  /**SE DEBEN AGREGAR LOS DEMÁS DATOS SI APLICA */
  var email = $("#input_email").val();
  console.log("🚀 ~ file: script_registro.js:21 ~ login ~ email:", email);

  if (email === "") {
    Swal.fire("!Debe ingresar cuenta de correo!", "", "error");
    return;
  }

  var password = $("#input_password").val();
  console.log("🚀 ~ file: script_registro.js:28 ~ login ~ password:", password);

  if (password === "") {
    Swal.fire(
      "!Debe ingresar password!",
      "El campo de contraseña es obligatorio.",
      "warning"
    );
    return;
  }

  datos = { email, password };
  console.log("🚀 ~ file: script_registro.js:44 ~ login ~ datos:", datos);

  /**
   *
   *ACÁ CONFIGURO UN API WEB QUE CONECTE CON EL BACKEND EN PHP
   *
   */

  $.ajax({
    data: datos,

    url: "http://localhost/SmartParkingEnterprise/checklogin.php", //antes era checklogin

    //cache: false,
    dataType: "json",
    type: "POST",
    beforeSend: function () {
      formulario1.reset();
    },
    /***acá se manejan los estados del servidor o las rtas del server */
    success: function (respuesta) {
      console.log("rta: ", respuesta.error);
      /* SI SE INGRESAN DATOS ALEATORIOS QUE NO EXISTAN EN LA BD */
      if (
        respuesta.error ===
        "No se encontraron registros con los datos suministrados"
      ) {
        Swal.fire("" + respuesta.error, "", "info");
        return;
      }
      /* SI LAS CREDENCIALES SON ERRONEAS */
      if (respuesta.error === "Usuario o contraseña están incorrectos.") {
        Swal.fire("" + respuesta.error, "", "error");
        return;
      }
      /* SI HAY ERROR AL CONSULTAR EL ROL */
      if (
        respuesta.error ===
        "Error al consultar roles. Contactar al administrador."
      ) {
        Swal.fire("" + respuesta.error, "", "error");
        return;
      }
      /* SI EL INGRESO ES EXITOSO */
      if (respuesta.id > 0) {
        Swal.fire(
          "Bienvenid@ " + respuesta.nombre,
          "Ingresaste como " + respuesta.roll,
          "success"
        ).then(function() {
          // Redirigir a usuario.html
          window.location.href = "../HTML/usuario.html";
        });
        return;
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log("Error status: " + textStatus);
      console.log("Error thrown: " + errorThrown);
      console.log("Response: " + jqXHR.status);
      if (jqXHR.status === 500) {
        // Si el código de estado es 500
        Swal.fire(
          "¡Error en el servidor!",
          "Ha ocurrido un error interno en el servidor. Por favor, intenta nuevamente más tarde.",
          "error"
        );
      } else {
        Swal.fire(
          "!Parece que hay un error en la solicitud AJAX¡",
          "" + textStatus,
          "warning"
        );
      }
    },
  });
}

/**ESTA FUNCIÓN SE EJECUTA CUANDO SE CREA UN REGISTRO*/
function register() {
  /* esto lo agregó Ricardo */
  
  /**SE DEBEN AGREGAR LOS DEMÁS DATOS SI APLICA */
  var username = $("#input_username_registro").val();
  console.log("🚀 ~ file: script_registro.js:21 ~ login ~ username:", username);
  if (username === "") {
    Swal.fire("Debe ingresar nombre de usuario!", "", "error");
    return;
  }

  var email = $("#input_email_registro").val();
  console.log("🚀 ~ file: script_registro.js:28 ~ login ~ email:", email);
  if (email === "") {
    Swal.fire(
      "Debe ingresar email!",
      "El campo de email es obligatorio!!",
      "warning"
    );
    return;
  }

  var password = $("#input_password_registro").val();
  console.log("🚀 ~ file: script_registro.js:28 ~ login ~ password:", password);
  if (password === "") {
    Swal.fire(
      "Debe ingresar password!",
      "El campo de password es obligatorio!!",
      "warning"
    );
    return;
  }

  var idRol = $("#selectRol").children("option:selected").attr("id");
  console.log("🚀 ~ file: script_registro.js:28 ~ login ~ idRol:", idRol);
  if (idRol === "") {
    Swal.fire(
      "Debe seleccionar el Rol!",
      "El campo de rol es obligatorio!!",
      "warning"
    );
    return;
  }
  datos = { username, email, password, idRol };
  console.log("🚀 ~ file: script_registro.js:44 ~ login ~ datos:", datos);

  /**
   *
   *ACÁ CONFIGURO UN API WEB QUE CONECTE CON EL BACKEND EN PHP
   *
   */

  $.ajax({
    data: datos,
    url: "http://localhost/SmartParkingEnterprise/registrarusuario.php", //antes era checklogin
    //cache: false,
    dataType: "json",
    type: "POST",
    beforeSend: function () {
      formulario2.reset();
    },
    success: function (respuesta) {
      console.log("rta: ", respuesta.message);
      /***acá se manejan los estados del servidor o las rtas del server */

      /* CASOS EN LOS QUE LA RTA DEL SERVDIOR ES EXITOSA */
      if (respuesta.error === "El usuario ya se encuentra registrado!!") {
        Swal.fire("" + respuesta.error, "", "warning");
        return;
      }
      if (respuesta.message === "registroExitoso") {
        Swal.fire("!El registro ha sido exitoso!", "", "success");
        return;
      }
      if (respuesta.error === "Error al crear el usuario") {
        Swal.fire("" + respuesta.error, "", "error");
        return;
      }
      /* SI HAY ERROR DE CONEXIÓN CON LA BD */
      if (respuesta.dbError !== "") {
        Swal.fire("" + respuesta.dbError, "", "error");
        return;
      }
    },
    error: function (jqXHR, textStatus) {
      console.log("Response: " + jqXHR.status);
      if (jqXHR.status === 500) {
        // Si el código de estado es 500
        Swal.fire(
          "¡Error en el servidor!",
          "Ha ocurrido un error interno en el servidor. Por favor, intenta nuevamente más tarde.",
          "error"
        );
      } else {
        console.log(textStatus);
        Swal.fire(
          "!Parece que hay un error en la solicitud AJAX¡",
          "" + textStatus,
          "warning"
        );
      }
    },
  });
}
