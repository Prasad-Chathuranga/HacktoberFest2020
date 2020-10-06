<?php 
require 'connection.php';

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
    $request = json_decode($postdata);

    print_r($request);

    $username = $request->username;
    $password = $request->password;

    $sql = "INSERT INTO `users`(`username`,`password`) VALUES('{$username}','{$password}')";

    if(mysqli_query($con,$sql))
    {
        http_response_code(201);
        echo 'inserted';
    }
    else
    {
        http_response_code(422);
    }

}

?>