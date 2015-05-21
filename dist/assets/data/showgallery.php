<?php 
// 	include 'config.php';

// 	if ($result = $mysqli->query("SELECT name, country, url FROM user_pics LIMIT 10")) {
// 		// printf("Select returned %d rows.\n", $result->num_rows);

   		
// 		while ($row = $result->fetch_assoc()) {
// 			// printf ("%s, %s, %s\n", $row["name"], $row["country"], $row["url"]);
// 			printf( "<div class='col view'>
// 					<img src='{$row["url"]}'>
// 					<div class='mask'>
// 						<div class='text-wrap'>
// 							<p class='person'>{$row["name"]}, {$row["country"]}</p>
// 						</div>
// 					</div>
// 				</div>");
// 		}

// 		/* free result set */
// 		$result->close();
// 	}