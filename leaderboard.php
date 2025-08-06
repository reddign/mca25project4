<?php
    $servername = "frog.etownmca.com";
    $username = "u121755072_frog";
    $password = "3kF#~iUjk*";
    $dbname = "u121755072_frogdb";

    $conn = new mysqli($servername, $username, $password, $dbname);

    $sql = "SELECT user, score FROM leaderboard";
    $result = $result = mysqli_query($conn, "SELECT user, 
    score FROM leaderboard ORDER BY score DESC");


?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Leaderboard</title>
    <style>
            table { width: 50%; border-collapse: collapse; }
            th, td { border: 1px solid black; padding: 8px; text-align: left; }
            th { background-color: #f2f2f2; }
    </style>
</head>
<body>
    <h2>Leaderboard</h2>
    <table>
        <thead>
            <tr>
                <th>Rank  </th>
                <th>Username  </th>
                <th>Score</th>
            </tr>
        </thead>
        <tbody>
            <?php
             if ($result->num_rows > 0) {
                    $rank = 1;
                    while($row = $result->fetch_assoc()) {
                        echo "<tr>";
                        echo "<td>" . $rank++ . "</td>";
                        echo "<td>" . htmlspecialchars($row["user"]) . "</td>";
                        echo "<td>" . htmlspecialchars($row["score"]) . "</td>";
                        echo "</tr>";
                    }}
                     ?>
        </tbody>
    </table>
</body>
</html>