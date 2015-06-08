<?php 
	include 'config.php';


	$coord = $_REQUEST['coord'];
	$isExist = 'false';
	
	if (!($stmt = $mysqli->prepare("SELECT coord FROM uniq_coord WHERE coord =  ?"))) {
		echo "Prepare failed: (" . $mysqli->errno . ") " . $mysqli->error;
	}

	if (!$stmt->bind_param("s", $coord)) {
		echo "Binding parameters failed: (" . $stmt->errno . ") " . $stmt->error;
	}
	
	$stmt->execute();
	$stmt->bind_result($col1);
	
	while ($stmt->fetch()) {
		$isExist = 'true';
	}

	echo $isExist;

	$stmt->close();
