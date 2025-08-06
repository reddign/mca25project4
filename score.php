
<!-- this is code that adds to the leaderboard, it isnt the leaderboard itself -->
<!-- commented out for now so it doesnt break anything if it doesnt work -->
<form action="score.php" method="post">
        <label for="username">Username:</label>
        <input type="text" id="uname" name="uname" required><br><br>
<?php

session_start();
require_once("dbcreds.php");

if($_SERVER['HTTP_HOST']=="127.0.0.1"){
    $mysqli = new mysqli("127.0.0.1","root","","test");
}else{ //TODO: edit this so password is password 
    $mysqli = new mysqli("frog.etownmca.com","u121755072_frog","3kF#~iUjk*","u121755072_frogdb");
}

if ($mysqli->connect_errno) {
    echo "Failed to connect: ", $mysqli->connect_error;
    exit;
}
if ($_SERVER["REQUEST_METHOD"] == "POST") {

$uname = $_POST['uname'];

//TODO: after the score system is set up, fix the 2 lines below\\
//$score = $_POST['score'];
$score = 5;

//builds a sql statement\\
$sql = "INSERT INTO leaderboard 
(user, score)
VALUES(
'{$uname}','{$score}');";
echo $sql;


//sends the sql statement to the db\\
$result = $mysqli -> query($sql);

}else {
    echo "Please give a username.";
}
?>
<br><br>
<input type="submit" value="Submit">
</form>
<script>event.preventDefault()</script>
