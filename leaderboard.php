<?php
    $servername = "frog.etownmca.com";
    $username = "u121755072_frog";
    $password = "3kF#~iUjk*";
    $dbname = "u121755072_frogdb";

    $conn = new mysqli($servername, $username, $password, $dbname);

    $sql = "SELECT user, score FROM leaderboard";
    $result = $conn->query($sql);

        if ($result->num_rows > 0) {
        echo "<table border='1'>";
        echo "<tr><th>Username</th><th>Score</th></tr>";

        while($row = $result->fetch_assoc()) {
            echo "<tr>";
            echo "<td>" . $row["user"] . "</td>";
            echo "<td>" . $row["score"] . "</td>";
            echo "</tr>";
        }
        echo "</table>";
    }

    $conn->close();
?>
