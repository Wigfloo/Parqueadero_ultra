<?php
//require('conectar.php');
$nombre1 = $_POST['nombre1'];

echo "nombre1: ",$nombre1;

$sql = "SELECT * FROM datos ORDER BY nombre ASC";

$result = mysqli_query($conexion, $sql);

while ($row = mysqli_fetch_array($result)) {
  $nombre = $row['nombre'];
  $idRegistroUsuario = $row['idRegistroUsuario'];
  $nombre[] = array("nombre" => $nombre, "idRegistroUsuario" => $idRegistroUsuario);
}

// encoding array to json format
echo json_encode($nombre);
?>
