<?php
	//session_start();
	include('../php/conectar.php');
	$username = $_POST['username'];
	$password = $_POST['password'];
	/**
	 * SE CREAN VARIABLES GLOBALES DENTRO DE ESTE ARCHIVO
	 */
	$indexRetry = "<br><a href='../index.html'>Volver a Intentarlo</a>";
	///consulta sql:
	$sqlUsers = "SELECT * FROM `usuarios` WHERE `usuario`='$username';";

	if($password=="")
	{
		echo "Contraseña no puede estar en blanco";
		echo $indexRetry;
	}
	else
	{
		$sql = $sqlUsers;
		$result = $conexion->query($sql);
		if ($result->num_rows > 0)
		{
			$row = $result->fetch_array(MYSQLI_ASSOC);
		}
		if (password_verify($password, $row['contrasena']))
		{
			//AQUI GUARDO LAS VARIABLES DE LA BD PARA SER USADAS EN PANEL-CONTROL.PHP
			session_start();
			$_SESSION['usuario'] = $row['usuario'];
			$_SESSION['id_registro_usuario'] = $row['id_registro_usuario'];
			$_SESSION['roll'] = $row['roll'];
			$_SESSION["loggedIn"] = true;
			$_SESSION['start'] = time();
			$_SESSION['expire'] = $_SESSION['start'] + (5 * 99999999999999);
			header('Location: panel_de_control.php');
		}
		else
		{
			echo "Usuario o contraseña estan incorrectos.";
			echo "<br><a href='../index.html'>Volver a Intentarlo</a>";
		}
		 mysqli_close($conexion);
	}

?>
