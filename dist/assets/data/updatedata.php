<?php 
	include 'config.php';

	$updatename = filter_var($_POST["updatename"], FILTER_SANITIZE_STRING);
	$updatecountry = filter_var($_POST["updatecountry"], FILTER_SANITIZE_STRING);
	$updatepublished = filter_var($_POST["updatepublished"], FILTER_SANITIZE_STRING);
	$updateurl =filter_var( $_POST["updateurl"], FILTER_SANITIZE_URL);

	$id = filter_var($_POST["updateid"], FILTER_SANITIZE_STRING);

	$stmt = $mysqli->prepare("UPDATE user_pics SET `name`=?, `country`=?, `isPublished`=?, `url`=?  WHERE `id` =  ?");
	$stmt->bind_param('ssisi', $updatename, $updatecountry, $updatepublished, $updateurl, $id);
	$stmt->execute();

	$stmt->close();
