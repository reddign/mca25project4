<?PHP
//connect to the db

if($_SERVER['HTTP_HOST']=="127.0.0.1"){
    $servername = "127.0.0.1";
    $username = "root";
    $password = "";
    $database = "mca";
}else{//TODO: revisit this area to get password correct

    $servername = "srv557.hstgr.io";
    $username = "u413142534_??";
    $password = "?????????";
    $database = "u413142534_??";
}
?>