<?php

include 'conexion_be.php';

if(empty($_POST)){
    header("location: index.php");
}else {
    $nombre_completo = $_POST ['nombre_completo'];
    $correo = $_POST['correo'];
    $usuario = $_POST['usuario'];
    $clave = $_POST['clave'];

    $verify = mysqli_query($conn,"SELECT * FROM usuariosregistrados WHERE NombredeUsuario = 'usuario'");
    
    $ejecutar = mysqli_query($conexion, $query);
}

?>