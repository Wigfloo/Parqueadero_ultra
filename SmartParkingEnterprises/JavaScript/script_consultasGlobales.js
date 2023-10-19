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