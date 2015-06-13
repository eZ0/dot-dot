<?php

	include 'config.php';

	$username = $_POST['username'];
	$password = $_POST['password'];

	$isExist = 'fasle';

	// generate a random salt to use for this account
	// $salt = bin2hex(mcrypt_create_iv(32, MCRYPT_DEV_URANDOM));
	// $saltedPW =  $password . $salt;
	// $hashedPW = hash('sha256', $saltedPW);

	// // saving generated pwd to db
	// $stmt = $mysqli->prepare("INSERT INTO users (username, password, salt) VALUES (?,?,?)");
	// $stmt->bind_param('sss', $username, $hashedPW, $salt );
	// $stmt->execute();

	// $stmt->close();

	if (!($stmt = $mysqli->prepare("SELECT salt FROM users WHERE username =  ?"))) {
		echo "Prepare failed: (" . $mysqli->errno . ") " . $mysqli->error;
	}

	if (!$stmt->bind_param("s", $username)) {
		echo "Binding parameters failed: (" . $stmt->errno . ") " . $stmt->error;
	}
	
	$stmt->execute();
	$stmt->bind_result($salt);
	
	while ($stmt->fetch()) {
		$isExist = 'true';
	}

	if ($isExist) {
		$saltedPW =  $password . $salt;
		$hashedPW = hash('sha256', $saltedPW);

		$stmtlg = $mysqli->prepare("SELECT * FROM users WHERE username =  ? AND password = ?");
		$stmtlg->bind_param("ss", $username, $hashedPW);
		$stmtlg->execute();
		$stmtlg->bind_result($col1);
		
		while ($stmtlg->fetch()) {
			$isExist = 'login';
		}
	}

	echo $isExist;

	$stmt->close();
	$stmtlg->close();