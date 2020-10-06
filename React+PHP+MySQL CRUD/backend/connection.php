<?php 

define('DB_HOST','localhost');
define('DB_USER','root');
define('DB_PASS','');
define('DB_NAME','empsystem');

function connect()
{
    $connection = mysqli_connect(DB_HOST,DB_USER,DB_PASS,DB_NAME);

    if(mysqli_connect_errno($connection))
    {
        die("Failed". mysqli_connect_error());
        echo 'Failed';
    }else
    echo 'Successful !';
    mysqli_set_charset($connection, "utf8");

    return $connection;
}

$con = connect();

?>