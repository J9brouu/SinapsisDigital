<?php
// Validamos datos del servidor
$user = "root";
$pass = "";
$host = "localhost";

$connection = mysqli_connect($host, $user, $pass);

if (!$connection) {
    die("Error de conexión: " . mysqli_connect_error());
} else {
    echo "Conexión exitosa al servidor.<br>";
}

$datab = "eva1";
$db = mysqli_select_db($connection, $datab);

if (!$db) {
    die("Error de conexión a la base de datos: " . mysqli_error($connection));
} else {
    echo "Conexión exitosa a la base de datos '$datab'.<br>";
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verificar si las claves existen en $_POST
    $nombre = isset($_POST['name']) ? $_POST['name'] : null;
    $correo = isset($_POST['email']) ? $_POST['email'] : null;
    $servicio = isset($_POST['service']) ? $_POST['service'] : null;
    $mensaje = isset($_POST['message']) ? $_POST['message'] : null;

    if (!empty($nombre) && !empty($correo) && !empty($servicio) && !empty($mensaje)) {
        $instruccion_SQL = "INSERT INTO formulario (nombre, correo, servicio, mensaje) VALUES ('$nombre', '$correo', '$servicio', '$mensaje')";

        if (mysqli_query($connection, $instruccion_SQL)) {
            // Redirigir con un parámetro indicando éxito
            header("Location: contactenos.html?status=success");
            exit();
        } else {
            echo "Error al guardar los datos: " . mysqli_error($connection);
        }
    } else {
        echo "Por favor, completa todos los campos del formulario.";
    }
}

mysqli_close($connection);
?>