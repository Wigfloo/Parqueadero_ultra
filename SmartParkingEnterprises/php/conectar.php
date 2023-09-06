<?php
$conexion = mysqli_connect('localhost', 'root', '','consesionariodb');//host,user,pass,bd - - 
/*$DB_HOST=$_ENV['http://'];
$DB_USER=$_ENV['root'];
$DB_PASSWORD=$_ENV[''];
$DB_NAME=$_ENV['railway'];
$DB_PORT=$_ENV[''];*/
//mysql://${{ MYSQLUSER }}:${{ MYSQLPASSWORD }}@${{ MYSQLHOST }}:${{ MYSQLPORT }}/${{ MYSQLDATABASE }}

if (mysqli_connect_errno())
  {
    echo "No se pudo conectar, mostrando error de MySql: " . mysqli_connect_error();
  }
?>
