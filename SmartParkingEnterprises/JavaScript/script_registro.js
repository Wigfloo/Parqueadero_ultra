const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

function validar1() {
  var nombre1 = "se envió el nombre1";
  console.log(nombre1);
  // formulario1.reset();
  //return false;

  /* esto lo agregó Ricardo */
  var email = $("#input_email").val();
  console.log("🚀 ~ file: script_registro.js:21 ~ validar1 ~ email:", email);

  if (email === "") {
    Swal.fire("Debe ingresar cuenta de correo!", "", "error");
  }

  var password = $("#input_password").val();
  console.log(
    "🚀 ~ file: script_registro.js:28 ~ validar1 ~ password:",
    password
  );
  if (password === "") {
    Swal.fire(
      "Debe ingresar password!",
      "El campo de contraseña es obligatorio!!",
      "warning"
    );
  }

  /**
   *
   *ACÁ CONFIGURO UN API WEB QUE CONECTE CON EL BACKEND EN PHP
   *
   */

  datos = { email, password };
  console.log("🚀 ~ file: script_registro.js:44 ~ validar1 ~ datos:", datos);
  formulario1.reset();
  //return;
  $.ajax({
    data: datos,
    /**http://dirIp:puerto/php/nombreArchivo */
    url: "../php/consultaRegistro.php",
    cache: false,
    dataType: "json",
    type: "POST",
    beforeSend: function () {
      $("#div_estado_generar_pdf").html("Generando PDF...");
    },
    success: function (respuesta) {
      /***acá se manejan lso estados del servidor o las rtas del server */
    },
    error: function (jqXHR, textStatus) {
      $("#div_estado_generar_pdf").html(jqXHR.responseText);
    },
  });
}

/**COMENTAR CADA FUNCIÓN  */
function validar2() {
  console.log("Se envio el nombre2");
  formulario2.reset();
  return false;
}
