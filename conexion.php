<?php
define('DB_HOST','localhost');
define('DB_USER','root');
define('DB_PASS','');
define('DB_NAME','boleta');
$con=@mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);
mysqli_set_charset( $con, 'utf8');
if(!$con){
    die("error de conexion: ".mysqli_error($con));
}
if (@mysqli_connect_errno()) {
    die("error de conexion: ".mysqli_connect_errno()." : ". mysqli_connect_error());
}