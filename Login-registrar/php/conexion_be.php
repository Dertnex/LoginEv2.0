<?php

$Servidor ="localhost";
$Serveruser = "root";
$ServerPass= "";
$BD = "messi";

$conn = @mysqli_connect($Servidor, $Serveruser, $ServerPass, $BD);

if(!$conn){
    echo "Te jodes";
}else{
    echo "conexion establecida";
}
?>