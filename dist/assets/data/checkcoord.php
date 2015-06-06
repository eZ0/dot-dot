<?php 
	include 'config.php';

	$coord = $_POST['coord'];
	$isExist = 'false';
	

	if ($result = $mysqli->query("SELECT coord FROM uniq_coord WHERE coord = '$coord' ")) {
		while ($row = $result->fetch_assoc()) {
			$isExist = 'true';
		}
		echo $isExist;
	}

	$result->close();