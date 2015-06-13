<?php 
	include 'config.php';

	$id = filter_var($_POST["updateid"], FILTER_SANITIZE_STRING);

	$stmt = $mysqli->prepare("DELETE FROM user_pics WHERE `id` =  ?");
	$stmt->bind_param('i', $id);
	$stmt->execute();

	$stmt->close();