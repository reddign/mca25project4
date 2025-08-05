

<!-- commented out for now so it doesnt break anything if it doesnt work -->

<?php

session_start();
require_once("dbcreds.php");
//<input type="text" value="$_POST['uname']">;
$uname = '<input type="text" name="uname" value="Username?">';
$score = $_POST["score"];


if($_SERVER['HTTP_HOST']=="127.0.0.1"){
    $mysqli = new mysqli("127.0.0.1","root","","test");
}else{ //TODO: edit this so password is password 
    $mysqli = new mysqli("frog.etownmca.com","u121755072_frog","3kF#~iUjk*","u121755072_frogdb");
}

if ($mysqli->connect_errno) {
    echo "Failed to connect: ", $mysqli->connect_error;
    exit;
}

//builds a sql statement\\
$sql = "INSERT INTO leaderboard 
(user, score)
VALUES
'{$uname}','{$score}';";
echo $sql;


//sends the sql statement to the db\\
$result = $mysqli -> query($sql);
?>
