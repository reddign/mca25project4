<?PHP
//connect to the db

if($_SERVER['HTTP_HOST']=="127.0.0.1"){
    $servername = "127.0.0.1";
    $username = "root";
    $password = "";
    $database = "mca";
}else{//TODO: revisit this area to get password correct

    $servername = "frog.etownmca.com";
    $username = "u121755072_frog";
    $password = "3kF#~iUjk*";
    $database = "u121755072_frogdb";
}
?>