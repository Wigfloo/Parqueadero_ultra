function selectRol() {


    //var idSelect = $("#selectRol").val();// Se llama el elemento con id="selectRol"
    //console.log("🚀 ~ file: script_registro.js:21 ~ select ~ idSelect:", idSelect);

    var condicion = "condicionSelectRol";

    datos = { condicion };
    console.log("🚀 ~ file: script_registro.js:44 ~ select ~ datos:", datos);

    // PROPUESTA DE EFICIENCIA DE CHATGPT data: { condicion: $("#SelectRol").val() },
    $.ajax({

        data: datos,
        url: "http://localhost/SmartParkingEnterprise/consultasGlobales.php", //antes era checklogin
        dataType: "json",
        type: "POST",
        /***acá se manejan los estados del servidor o las rtas del server */
        success: function (respuesta) {
            /* var condicion = $("#SelectRol").val(); // Obtener el valo r seleccionado en el select*/
            console.log(respuesta)

            if (respuesta) {
                let len = respuesta.length;
                console.log(len);
                for (let i = 0; i < len; i++) {
                    console.log(respuesta[i].id)
                    /* poblar el select */
                    $("#selectRol").append("<option id=" + respuesta[i].id + ">" + respuesta[i].nombre + "</option>");
                }
            }
            /* ENLACE A registro.html */
         /*    // Crear un enlace a registro.html y redirigir al hacer clic en él
            var registroLink = $("<a>Ir a registro</a>");
            registroLink.attr("href", "registro.html");
            registroLink.appendTo("body"); // Puedes cambiar "body" al elemento donde desees agregar el enlace.

            // Redirigir automáticamente a registro.html después de un cierto tiempo (por ejemplo, 3 segundos)
            setTimeout(function() {
                window.location.href = "../HTML/registro.html";
            }, 3000); // 3000 milisegundos = 3 segundos */

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
// function userName() {
//     //var idSelect = $("#selectRol").val();// Se llama el elemento con id="selectRol"
//     //console.log("🚀 ~ file: script_registro.js:21 ~ select ~ idSelect:", idSelect);

//     var condicion = "condicionUserName";

//     datos = { condicion };
//     console.log("🚀 ~ file: script_registro.js:44 ~ select ~ datos:", datos);

//     // PROPUESTA DE EFICIENCIA DE CHATGPT data: { condicion: $("#SelectRol").val() },
//     $.ajax({

//         data: datos,
//         url: "http://localhost/SmartParkingEnterprise/consultasGlobales.php", //antes era checklogin
//         dataType: "json",
//         type: "POST",
//         /***acá se manejan los estados del servidor o las rtas del server */
//         success: function (respuesta) {
//             if (respuesta && respuesta.nombre) {
//                 // La propiedad "nombre" está presente en la respuesta
//                 let nombrePersona = respuesta.nombre; // Obtener el nombre de la respuesta
        
//                 // Asignar el nombre de la persona al elemento h1
//                 document.getElementById('nombrePerfil').textContent = nombrePersona;
//             } else {
//                 // En caso de que la propiedad "nombre" no esté presente en la respuesta
//                 console.log("La propiedad 'nombre' no está definida en la respuesta.");
//                 // Puedes manejar este caso de acuerdo a tus necesidades
//             }
        
//         },
//         error: function (jqXHR, textStatus, errorThrown) {
//             console.log("Error status: " + textStatus);
//             console.log("Error thrown: " + errorThrown);
//             console.log("Response: " + jqXHR.status);
//             if (jqXHR.status === 500) {
//                 // Si el código de estado es 500
//                 Swal.fire(
//                     "¡Error en el servidor!",
//                     "Ha ocurrido un error interno en el servidor. Por favor, intenta nuevamente más tarde.",
//                     "error"
//                 );
//             } else {
//                 Swal.fire(
//                     "!Parece que hay un error en la solicitud AJAX¡",
//                     "" + textStatus,
//                     "warning"
//                 );
//             }
//         },
//     });
// }
