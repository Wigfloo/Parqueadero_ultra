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
    Swal.fire("Debe ingresar cuenta de correo!", "", "error");
    return;
  }

  var password = $("#input_password").val();
  console.log(
    "🚀 ~ file: script_registro.js:28 ~ login ~ password:",
    password
  );

  if (password === "") {
    Swal.fire(
      "Debe ingresar password!",
      "El campo de contraseña es obligatorio!!",
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
    url: "http://localhost/SmartParkingEnterprise/checklogin.php",//antes era checklogin
    //cache: false,
    dataType: "json",
    type: "POST",
    beforeSend: function () {
      formulario1.reset();
    },
    success: function (respuesta) {
      console.log("rta: ", respuesta);
      Swal.fire("" + respuesta.message, "", "success");
      /***acá se manejan los estados del servidor o las rtas del server */
    },
    error: function (jqXHR, textStatus) {
      Swal.fire(
        "!Parece que hay un error en la solicitud AJAX¡",
        "" + textStatus,
        "warning"
      );
    },
  });
}

/**ESTA FUNCIÓN SE EJECUTA CUANDO SE CREA UN RGISTRO*/
function register() {

  /* esto lo agregó Ricardo */
  /**SE DEBEN AGREGAR LOS DEMÁS DATOS SI APLICA */
  var username = $("#input_username_registro").val();
  console.log("🚀 ~ file: script_registro.js:21 ~ login ~ username:", username);
  if (username === "") {Swal.fire("Debe ingresar nombre de usuario!", "", "error");return;}

  var email = $("#input_email_registro").val();
  console.log("🚀 ~ file: script_registro.js:28 ~ login ~ email:",email);
  if (email === "") {Swal.fire("Debe ingresar email!","El campo de email es obligatorio!!","warning");return;}


  var password = $("#input_password_registro").val();
  console.log("🚀 ~ file: script_registro.js:28 ~ login ~ password:",password);
  if (password === "") {Swal.fire("Debe ingresar password!", "El campo de password es obligatorio!!","warning"); return;}

  datos = { username, email, password };
  console.log("🚀 ~ file: script_registro.js:44 ~ login ~ datos:", datos);

  /**
   *
   *ACÁ CONFIGURO UN API WEB QUE CONECTE CON EL BACKEND EN PHP
   *
   */

  $.ajax({
    data: datos,
    url: "http://localhost/SmartParkingEnterprise/registrarusuario.php",//antes era checklogin
    //cache: false,
    dataType: "json",
    type: "POST",
    beforeSend: function () {
      formulario1.reset();
    },
    success: function (respuesta) {
      console.log("rta: ", respuesta);
      Swal.fire("" + respuesta.message, "", "success");
      /***acá se manejan los estados del servidor o las rtas del server */
    },
    error: function (jqXHR, textStatus) {
      Swal.fire(
        "!Parece que hay un error en la solicitud AJAX¡",
        "" + textStatus,
        "warning"
      );
    },
  });
}

