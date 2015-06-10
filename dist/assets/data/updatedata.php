<?php 
	include 'config.php';

	$updatename = filter_var($_POST["updatename"], FILTER_SANITIZE_STRING);
	$id = filter_var($_POST["updateid"], FILTER_SANITIZE_STRING);

	$stmt = $mysqli->prepare("UPDATE user_pics SET `name`=?  WHERE `id` =  ?");
	$stmt->bind_param('si', $updatename, $id);
	$stmt->execute();

	$stmt->close();
