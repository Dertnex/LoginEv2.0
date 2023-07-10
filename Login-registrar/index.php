<?php 
    include "php/conexion_be.php";

    if (empty($_POST)) {
        echo "Debe ingresar datos para el registro";
    }else {
        
        $usuario = $_POST['usuario'];
        $correo = $_POST['correo'];
        $clave = $_POST['clave'];

        $sql = mysqli_query($conn,"SELECT * FROM usuariosregistrados WHERE NombredeUsuario = '$usuario' OR Contraseña = '$correo'");

        $query_result = mysqli_num_rows($sql);
        if ($query_result > 0) {
            echo "usuario o clave ya existentes";
        }else {
            
            $slq_insert = mysqli_query($conn,"INSERT INTO usuariosregistrados(NombredeUsuario,Email,Contraseña)
                                              VALUES ('$usuario','$correo','$clave')");
            
            if ($slq_insert) {
                echo "Usuario registrado";
            }else {
                echo "Usuario no registrado";
            }

        }

    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login y Registro - Proyecto</title>
    
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">


    <link rel="stylesheet" href="assets/css/estilos.css">
</head>
<body>

        <main>

            <div class="contenedor__todo">
                <div class="caja__trasera">
                    <div class="caja__trasera-login">
                        <h3>¿Ya tienes una cuenta?</h3>
                        <p>Inicia sesión para entrar en la página</p>
                        <button id="btn__iniciar-sesion">Iniciar Sesión</button>
                    </div>
                    <div class="caja__trasera-register">
                        <h3>¿Aún no tienes una cuenta?</h3>
                        <p>Regístrate para que puedas iniciar sesión</p>
                        <button id="btn__registrarse">Regístrarse</button>
                    </div>
                </div>

                <!--Formulario de Login y registro-->
                <div class="contenedor__login-register">
                    <!--Login-->
                    <form action="  php/conexion_be.php" class="formulario__login">
                        <h2>Iniciar Sesión</h2>
                        <input type="text" placeholder="Correo Electronico" name="correo">
                        <input type="password" placeholder="Contraseña" name="clave">
                        <input type="submit" value="Iniciar sesion">
                    </form>

                    <!--Register-->
                    <form action="" method="POST" class="formulario__register">
                        <h2>Registrarse</h2>
                        <input type="text" placeholder="Nombre completo" name="nombre">
                        <input type="text" placeholder="Correo Electronico" name="correo">
                        <input type="text" placeholder="Usuario" name="usuario">
                        <input type="password" placeholder="Contraseña" name="clave">
                        <input type="submit" value="Registrar usuario">
                    </form>
                </div>
            </div>

        </main>

        <script src="assets/js/script.js"></script>
</body>
</html>